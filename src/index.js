// load template files

import sass from "./styles/index.sass"

import * as utils from "./scripts/utils.js"

import Card from "./scripts/Card.js"
import Section from "./scripts/Section.js"
import {PopupWithImage} from "./scripts/PopupWithImage.js"
import {PopupWithForm} from "./scripts/PopupWithForm.js"
import {UserInfo} from "./scripts/UserInfo.js"

import {Api} from "./scripts/Api.js";
import {PopupWithConfirmation} from "./scripts/PopupWithConfirmation";

const api = new Api('https://around.nomoreparties.co/v1/cohort-1-es', "3e02ecdf-737d-4954-9ff6-836c396f5812");
let userObj = null

async function initialRender() {
    userObj = await api.getUserInfo()
    const items = await api.getCards()

    // render the items
    let initialCardSection = new Section({

        items,
        renderer: (item) => {
            let card_element = new Card(item, ".elements__card", userObj);
            initialCardSection.addItem(card_element.generateCard());
        }

    }, ".elements")

    initialCardSection.clear()
    initialCardSection.renderer()
    Card.SetEvents(api)


    let userInfo = new UserInfo(".profile__name", ".profile__description",".profile__picture")
    userInfo.setUserInfo(userObj.name, userObj.about, userObj.avatar)

}

const res = initialRender()

// Promise.all([api.getCards(), api.getUserInfo()]).then(res => {
//
//     const apiCardsResponse = res[0]
//     const apiUserInfoResponse = res[1]
//
//     // process the apiCardsResponse
//
//
//     // step 1: load the initial cards
//     let initialCardSection = new Section({
//         // replace with the api get cards
//         items: utils.initialCards,
//
//         renderer: (item) => {
//
//             let card_element = new Card(item, ".elements__card");
//             initialCardSection.addItem(card_element.generateCard());
//         }
//     }, ".elements")
//
//     initialCardSection.renderer()
//     Card.SetEvents()
//
// })


let zoomPopup = new PopupWithImage(".zoom")
zoomPopup.setup()


let configFormProfile = {

    text: {
        form__title: ["textContent", "Edit profile"],
        form__name: ["placeholder", "Name"],
        form__description: ["placeholder", "Description"],
    },
    errorValidation: {
        form__name: {
            minlength: 2,
            maxlength: 40,
        },
        form__description: {
            minlength: 2,
            maxlength: 200,
        }
    }

}
let configFormCard = {
    text: {
        form__title: ["textContent", "Add Place"],
        form__name: ["placeholder", "Place"],
        form__description: ["placeholder", "URL"],
    },
    errorValidation: {
        form__name: {
            minlength: 2,
            maxlength: 40,
        },
        form__description: {
            minlength: 2,
            type: "url",
            pattern: "https?://.+"
        }
    }
}
let configFormAvatar = {
    text: {
        "form-avatar__title": ["textContent", "Add Link"],
        "form-avatar__src": ["placeholder", "URL"]
    },
    errorValidation: {
        "form-avatar__src": {
            minlength: 2,
            type: "url",
            pattern: "https?://.+"
        },
    }
}

let form_edit_profile = (e, formValues, closeFunction) => {

    e.preventDefault()

    let name = formValues[0]
    let about = formValues[1]

    let userInfo = new UserInfo(".profile__name", ".profile__description",".profile__picture", closeFunction)
    userInfo.setUserInfo(name, about, null, api)

}

let userForm = new PopupWithForm(".form", ".profile__edit", configFormProfile, form_edit_profile)
userForm.setup()

let form_edit_card = (e, formValues, closeFunction) => {

    e.preventDefault()

    let card_info = {}

    card_info.name = formValues[0]
    card_info.link = formValues[1]


    // get the info from the form
    let form = document.forms[0]

    let button = form.querySelector("button")
    button.textContent = "Saving..."

    api.postCard(card_info.name, card_info.link).then(res => {

        const items = [res]
        // convert only the last item into the first one

        let newCard = new Section({
            items,
            renderer: (item) => {

                let card_element = new Card(item, ".elements__card", userObj);
                newCard.addItem(card_element.generateCard(), true);
            }
        }, ".elements")

        newCard.renderer()


        button.textContent = "Saved"
        setTimeout(() => {
            closeFunction()
        }, 500)

    }).catch(err => {
        console.error(err)
        button.textContent = "Try again"
    })
}

let cardForm = new PopupWithForm(".form", ".profile__add", configFormCard, form_edit_card)
cardForm.setup()


let form_edit_avatar = (e, formValues, closeFunction) => {

    e.preventDefault()

    let avatar_info = {}
    avatar_info.name = formValues[0]

    // update avatar profile

    let userInfo = new UserInfo(".profile__name", ".profile__description",".profile__picture", closeFunction)

    let userObj = userInfo.getUserInfo()
    userInfo.setUserInfo(userObj.name, userObj.about, avatar_info.name, api)


}


let avatarForm = new PopupWithForm(".form-avatar", ".profile__avatar", configFormAvatar, form_edit_avatar, ".form-avatar__container")
avatarForm.setup()




let confirmationForm = new PopupWithConfirmation(".form-confirmation", null, api, initialRender)
confirmationForm.setup()



