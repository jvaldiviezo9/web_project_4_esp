// popup with image
import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {

    constructor(containerClass) {
        super(containerClass);

        this._setEventListeners = this.setEventListeners.bind(this)
        this._open = this.open.bind(this)

    }


    setup() {

        let open = this._open
        let setEventListeners = this._setEventListeners.bind(this)

        document.querySelector(".elements").addEventListener("click", function (e){

            if (e.target.className === "elements__image") {

                let element = open()
                element.querySelector(".zoom__image").src = e.target.src
                e.stopPropagation()
                setEventListeners(".zoom__close-button")

            }
        })
    }

}