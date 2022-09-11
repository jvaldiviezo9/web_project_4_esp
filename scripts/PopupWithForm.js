import {Popup} from "./Popup.js";
import Form from "./Form.js";

export class PopupWithForm extends Popup {

    constructor(containerClass, formClass) {
        super(containerClass);
        this._form = new Form(formClass)
    }

}