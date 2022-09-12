import {Popup} from "./Popup.js";
import Form from "./Form.js";
import FormValidator from "./FormValidator.js";

export class PopupWithForm extends Popup {


    constructor(containerClass, triggerClass, config, submitFunction) {

        super(containerClass);

        // this._form = new Form(formClass)
        this._triggerClass = triggerClass
        this._config = config
        this._open = this.open.bind(this)
        this._close = this.close.bind(this)
        this._submitFunction = submitFunction
    }


    setup() {

        let open = this._open
        let close = this._close
        let setEventListeners = this.setEventListeners.bind(this)
        let config = this._config
        let textConfig = this._config.text
        let submitFunction = this._submitFunction

        // document.querySelector(this._triggerClass).addEventListener("click", (e) => {alert("ok")})

        document.querySelector(this._triggerClass).addEventListener("click", function (e){

            let form = open()
            // edit the text fields

            e.stopPropagation()

            Object.entries(textConfig).forEach( ([key, value]) => {

                console.log(key, value)

                form.querySelector(`.${key}`)[value[0]] = value[1]

            })

            setEventListeners(".form__close-button")

            const validation_object = new FormValidator(form.querySelector(".form__container"), config)
        validation_object.enableValidation()


            form.addEventListener("submit", (e) => {
                submitFunction(e)
                close()
            })

        })
    }
}