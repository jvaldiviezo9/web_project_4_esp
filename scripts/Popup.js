export class Popup{

    constructor(containerClass) {
        this._container = containerClass
        this._element = null

        // these are placeholders
        // to move the function
        // around the methods
        // inside the class
        this._outClickFunct= this._handleOutClick.bind(this)
        this._escFunct = this._handleEscClose.bind(this)
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

        return Element

    }

    close() {

        // shade out animation
        let popup = document.querySelector(this._container)
        popup.classList.remove("form_active")

        // when a function is called from a nested function
        // like setTimeout, the reference should be stored
        // in a new variable to make ti work.
        let removeEventListeners = this.removeEventListeners.bind(this)
        setTimeout(function () {

            // document.removeEventListener("click", outClickFunct)
            // document.removeEventListener("keydown", escFunct)

            removeEventListeners()
            popup.remove()

        }, 500)

    }

    removeEventListeners(){

        document.removeEventListener("click", this._outClickFunct)
        document.removeEventListener("keydown", this._escFunct)

    }

    setEventListeners(closeButtonName) {

        // function to store the callback
        // ref: https://stackoverflow.com/questions/43727516/how-adding-event-handler-inside-a-class-with-a-class-method-as-the-callback

        // Event for the close button
        let closeFunct = this.close.bind(this)
        this._element.querySelector(closeButtonName).addEventListener("click", closeFunct)

        // additional event listeners

        // click outside the popup
        document.addEventListener("click", this._outClickFunct)

        // press esc key
        document.addEventListener("keydown", this._escFunct)

    }

}