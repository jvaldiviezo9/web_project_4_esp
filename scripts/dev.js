// estas son sólo las clases de desarrollo,
// hice aquí la base del código unicamente. No tiene funcionalidad.


export class Popup{

    constructor(container) {

    }

    _handleEscClose() {}

    open() {}

    close() {}

    setEventListeners(){}


}


// popu with image

export class PopupWithImage extends Popup {

    // this is the popup that appears when the image is clicked
    open(){}


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

export class userInfo{

    constructor(name, about, avatar) {
        this._name = name
        this._about = about
        this._avatar = avatar
    }

    getUserInfo() {
        return {
            name: this._name,
            about: this._about,
            avatar: this._avatar
        }
    }

    setUserInfo(name, about, avatar) {

    }
}


