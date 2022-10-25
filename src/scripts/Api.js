export class Api{
    constructor(baseUrl, apiKey){

        this.baseUrl = baseUrl;
        this.apiKey = apiKey;

    }

    // get the cards from the server
    getCards(){
            return fetch(`${this.baseUrl}/cards`, {
                headers: {
                    authorization: this.apiKey
                }
            })
                .then(res => res.json())
    }

    getUserInfo(){
        return fetch(`${this.baseUrl}/users/me`, {
            headers: {
                authorization: this.apiKey
            }
        })
            .then(res => res.json())
    }
}


