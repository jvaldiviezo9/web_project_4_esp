
export class UserInfo{

    constructor(name, about, avatar="") {
        this._name = name
        this._about = about
        this._avatar = avatar
    }

    getUserInfo() {

        let userElement = document.querySelector(".profile__container")

        return {

            name: userElement.querySelector(".profile__name").textContent,
            about: userElement.querySelector(".profile__description").textContent,
            avatar: userElement.querySelector(".profile__avatar").src,

        }
    }

    setUserInfo(name, about, avatar) {

        let userElement = document.querySelector(".profile__container")

        userElement.querySelector(".profile__name").textContent = this._name
        userElement.querySelector(".profile__description").textContent = this._about
        userElement.querySelector(".profile__avatar").src = this._avatar

    }
}


