export class Popup{

    constructor(container) {
        this._container = container
        this._element = null

        // these are placeholders
        // to move the function
        // around the methods
        // inside the class
        this._outClickFunct= null
        this._escFunct = null
    }

    _getTemplate() {
        return document
            .querySelector("template")
            .content
            .querySelector(this._container)
            .cloneNode(true)
    }

    _handleOutClick(e) {
        // click outside the form
        // ref: https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element
        const insideForm = e.composedPath().includes(this._element)
        if (!insideForm) {
            this.close()
        }
    }

    _handleEscClose(e) {
        if (e.key === "Escape"){
            this.close()
        }
    }

    open() {
        let Element = this._getTemplate()
        this._element = Element

        Element.style.visibility = "visible"
        setTimeout( () => {
                this._element.classList.add("form_active")
            }, 100)

        document.querySelector(".page").appendChild(this._element)
    }

    close() {

        // shade out animation
        let popup = document.querySelector(this._container)
        popup.classList.remove("form_active")


        // remove the element and events listeners
        let outClickFunct = this._outClickFunct
        let escFunct = this._escFunct

        setTimeout(function () {

            document.removeEventListener("click", outClickFunct)
            document.removeEventListener("keydown", escFunct)
            popup.remove()
        }, 500)

    }

    setEventListeners(closeButtonName) {

        // function to store the callback
        // ref: https://stackoverflow.com/questions/43727516/how-adding-event-handler-inside-a-class-with-a-class-method-as-the-callback

        // Event for the close button
        let closeFunct = this.close.bind(this)
        this._element.querySelector(closeButtonName).addEventListener("click", closeFunct)

        // additional event listeners

        // click outside the popup
        this._outClickFunct = this._handleOutClick.bind(this)
        document.addEventListener("click", this._outClickFunct)

        // press esc key
        this._escFunct = this._handleEscClose.bind(this)
        document.addEventListener("keydown", this._escFunct)

    }

}

// popup with image
export class PopupWithImage extends Popup {

    // this is the popup that appears when the image is clicked
    open(){}

    setEventListeners() {
        super.setEventListeners();
        // big popup image
        document.querySelector(".zoom__button").addEventListener(
            "click", Card._zoomFunctions.closeImage)
    }


}

export class PopupWithForm extends Popup {

    // this is the popup that appears when the image is clicked
    open(){}

    _getInputValues() {}

    close() {
        super.close()

    }

    setEventListeners(){
        // debe agregar al formulario un controlador de
        // eventos submit y el detector de eventos click para el icono cerrar

    }

}
