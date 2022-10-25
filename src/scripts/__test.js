import {Api} from "/src/scripts/Api.js";

// test the api
const api = new Api('https://around.nomoreparties.co/v1/cohort-1-es', "3e02ecdf-737d-4954-9ff6-836c396f5812");
const cardList = api.getCards()
const userInfo = api.getUserInfo()

// this code only will be executed when there is a response from the server
Promise.all([cardList, userInfo]).then(res => {
        console.log(res[1])
    }
)