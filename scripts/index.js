// load template files

import * as utils from "./utils.js"

import Card from "./Card.js"
import Form from "./Form.js"
import Section from "./Section.js"
import {Popup} from "./Popup.js";

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

const config = {
        "profile": {
            "title": "Edit profile",
            "name": "Name",
            "description": "Description",
            "function": Form._form_edit_profile,
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

        },
        "card": {
            "title": "Add Place",
            "name": "Place",
            "description": "URL",
            "function": Form._form_add_place,
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
    }

let popup = new Popup(".zoom")
popup.open()
popup.setEventListeners(".zoom__button")

setTimeout(()=>{
    popup.close()
},2000)


let popup2 = new Popup(".form")
popup2.open()
popup2.setEventListeners(".form__close-button")

