// estas son sólo las clases de desarrollo,
// hice aquí la base del código unicamente. No tiene funcionalidad.





export class UserInfo{

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


