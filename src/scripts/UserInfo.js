
export class UserInfo{

    constructor(nameSelector, aboutSelector, avatarSelector) {
        this._nameSelector = nameSelector
        this._aboutSelector = aboutSelector
        this._avatarSelector = avatarSelector
    }

    // returns an object with the info from the markup
    getUserInfo() {

        return {

            name: document.querySelector(this._nameSelector).textContent,
            about: document.querySelector(this._aboutSelector).textContent,
            avatar: document.querySelector(this._avatarSelector).src,

        }
    }

    // this uses the constructor to set the values
    setUserInfo(name, about, avatar=null, apiElement=null) {

        document.querySelector(this._nameSelector).textContent = name
        document.querySelector(this._aboutSelector).textContent = about


        if(apiElement){
            apiElement.patchUserInfo(name, about).then(res => {
                // it's okay
            }).catch(err => {
                // put errors in the console
                console.log(err)
                document.querySelector(this._nameSelector).textContent = "#APIError"
                document.querySelector(this._aboutSelector).textContent = "#APIError"
            })
        }
        if (avatar){
            document.querySelector(this._avatarSelector).src = avatar
        }
    }
}


