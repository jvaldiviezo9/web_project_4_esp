
export class UserInfo{

    constructor(nameSelector, aboutSelector, avatarSelector, closeFunction) {
        this._nameSelector = nameSelector
        this._aboutSelector = aboutSelector
        this._avatarSelector = avatarSelector
        this._closeFunction = closeFunction
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

        if (avatar){
            document.querySelector(this._avatarSelector).src = avatar
        }

        if(apiElement){

            // change the button label to "Saving..."
            let form = document.forms[0]
            let button = form.querySelector("button")
            button.textContent = "Saving..."

            if (avatar){
                // override the user info

                apiElement.patchAvatar(avatar).then(res => {
                // it's okay
                button.textContent = "Saved"
                document.querySelector(this._avatarSelector).src = avatar

                setTimeout(() => {
                    // debugger
                    this._closeFunction()
                },500)


            }).catch(err => {
                // put errors in the console
                console.log(err)
                document.querySelector(this._nameSelector).textContent = "#APIError"
                document.querySelector(this._aboutSelector).textContent = "#APIError"

                button.textContent = "Try Again"

            })

                // stop as avatar has its own form
                return
            }

            apiElement.patchUserInfo(name, about).then(res => {
                // it's okay
                button.textContent = "Saved"

                setTimeout(() => {
                    // debugger
                    this._closeFunction()
                },500)


            }).catch(err => {
                // put errors in the console
                console.log(err)
                document.querySelector(this._nameSelector).textContent = "#APIError"
                document.querySelector(this._aboutSelector).textContent = "#APIError"

                button.textContent = "Try Again"

            })
        }

    }
}


