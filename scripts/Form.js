
import * as utils from "./utils.js"
import FormValidator from "./FormValidator.js"
import Card from "./Card.js"


export default class Form {


    constructor(config, templateID) {
        this._config = config
        this._templateID = templateID

    }


    static _form_edit_profile(e) {

        let profile_info = document.querySelector(".profile__info");

        e.preventDefault()

        profile_info.querySelector(".profile__name").textContent = e.target.elements.form__name.value
        profile_info.querySelector(".profile__description").textContent = e.target.elements.form__description.value

        Form._closeForm()

    }

    static _form_add_place(e) {

        e.preventDefault()

        let card_info = {}

        card_info.name = e.target.elements.form__name.value
        card_info.link = e.target.elements.form__description.value

        // todo: replace with section
        new Card(card_info).addCard()


    }
}
