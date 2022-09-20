// load template files

import sass from "./styles/index.sass"

import * as utils from "./scripts/utils.js"

import Card from "./scripts/Card.js"
import Section from "./scripts/Section.js"
import {PopupWithImage} from "./scripts/PopupWithImage.js"
import {PopupWithForm} from "./scripts/PopupWithForm.js"
import {UserInfo} from "./scripts/UserInfo.js"


// step 1: load the initial cards

let initialCardSection = new Section({
    items: utils.initialCards,
    renderer: (item) => {

        let card_element = new Card(item, ".elements__card");
        initialCardSection.addItem(card_element.generateCard());
    }
}, ".elements")

initialCardSection.renderer()
Card.SetEvents()

let zoomPopup = new PopupWithImage(".zoom")
zoomPopup.setup()


let configFormProfile = {

    "text": {
        "form__title": ["textContent", "Edit profile"],
        "form__name": ["placeholder", "Name"],
        "form__description": ["placeholder", "Description"],
    },
    "errorValidation": {
        "form__name": {
            "minlength": 2,
            "maxlength": 40,
        },
        "form__description": {
            "minlength": 2,
            "maxlength": 200,
        }
    }

}
let configFormCard = {
    "text": {
        "form__title": ["textContent", "Add Place"],
        "form__name": ["placeholder", "Place"],
        "form__description": ["placeholder", "URL"],
    },
    "errorValidation": {
        "form__name": {
            "minlength": 2,
            "maxlength": 40,
        },
        "form__description": {
            "minlength": 2,
            "type": "url",
            "pattern": "https?://.+"
        }
    }
}

let form_edit_profile = (e, formValues) => {

    e.preventDefault()

    let name = formValues[0]
    let about = formValues[1]

    let userInfo = new UserInfo(".profile__name", ".profile__description",".profile__avatar")
    userInfo.setUserInfo(name, about)

}


let userForm = new PopupWithForm(".form", ".profile__edit", configFormProfile, form_edit_profile)
userForm.setup()

let form_edit_card = (e, formValues) => {

    e.preventDefault()

    let card_info = {}

    card_info.name = formValues[0]
    card_info.link = formValues[1]

    let newCard = new Section({
        items: [card_info],
        renderer: (item) => {

            let card_element = new Card(item, ".elements__card");
            newCard.addItem(card_element.generateCard());
        }
    }, ".elements")

    newCard.renderer()
}


let cardForm = new PopupWithForm(".form", ".profile__add", configFormCard, form_edit_card)
cardForm.setup()




