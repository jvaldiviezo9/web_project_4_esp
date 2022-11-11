import {Popup} from "./Popup.js";
import Form from "./Form.js";
import FormValidator from "./FormValidator.js";
import Card from "./Card";

export class PopupWithConfirmation extends Popup {


    constructor(containerClass, submitFunction, apiElement, renderFunction) {

        super(containerClass);

        // this._form = new Form(formClass)
        this._open = this.open.bind(this)
        this._close = this.close.bind(this)
        this._submitFunction = submitFunction
        this._apiElement = apiElement
        this._renderFunction = renderFunction.bind(this)
    }



    setup() {

        let open = this._open
        let close = this._close

        let apiElement = this._apiElement

        let setEventListeners = this.setEventListeners.bind(this)
        let renderFunction = this._renderFunction

        document.querySelector(".elements").addEventListener("click", function (e) {
            if (e.target.className === "elements__trash") {

                let form = open()
                e.stopPropagation()

                setEventListeners(".form-confirmation__close-button")

                let cardId = e.target.closest(".elements__card").dataset.cardId

                form.querySelector(".form-confirmation__submit").addEventListener("click", function (evnt) {

                    apiElement.deleteCard(cardId).then((res) => {
                        renderFunction()
                    }).catch(
                        (err) => {
                            console.log(err)
                        })
                    })

            }

        })
    }
}