import {Popup} from "./Popup.js";

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