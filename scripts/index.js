// load template files

import * as utils from "./utils.js"

import Card from "./Card.js"
import Form from "./Form.js"
import Section from "./Section.js"
import {Popup} from "./Popup.js";
import {PopupWithImage} from "./PopupWithImage.js";

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




