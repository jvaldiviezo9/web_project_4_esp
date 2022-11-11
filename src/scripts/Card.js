import {template} from "./utils.js";
import like_hover from "../images/like/like_hover.png"
import like_active from "../images/like/like_active.png"
import like_default from "../images/like/like_default.png"

// this class only worry will be to store and generate a card object
export default class Card {

    constructor(cardInfo, templateClass, userObj) {

        this._templateClass = templateClass
        this._image = cardInfo.link
        this._name = cardInfo.name


        this._likes = cardInfo.likes
        this._cardId = cardInfo._id
        this._ownerId =cardInfo.owner._id
        this._userId = userObj._id

    }

    // initial render of cards

    static RemoveCard(element) {

        let card = element.closest(".elements__card");
        card.remove();
    }

    // functions related to the zoom image cointainer.
    static _zoomFunctions = {

        imageClickOutside : function (e) {
            // click outside the form
            // ref: https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element

            const zoomBlock = document.querySelector(".zoom")
            const insideImage = e.composedPath().includes(zoomBlock)

            if (!insideImage) {
                Card._zoomFunctions.closeImage()
            }

        },

        closeImage : function () {

            const zoomBlock = document.querySelector(".zoom")
            zoomBlock.style.visibility = "visible"

            setTimeout(function () {
                zoomBlock.classList.remove("zoom__image_active")
                setTimeout(function () {
                    zoomBlock.style.display = "none"
                    document.removeEventListener("click", Card._zoomFunctions.imageClickOutside)
                }, 500)
            }, 100)
        }

    }

    // events to interact with the cards and the zoom image container.
    static SetEvents(api) {
        // add global event on hover in the elements
        document.querySelector(".elements").addEventListener("mouseover", function (e) {
                if (e.target.className === "elements__icon") {
                    if (e.target.src.includes("_default")) {
                        e.target.src = like_hover
                    }
                }
            }
        )
        document.querySelector(".elements").addEventListener("mouseout", function (e) {
                if (e.target.className === "elements__icon") {
                    if (e.target.src.includes("_hover")) {
                        e.target.src = like_default
                    }
                }
            }
        )

        // add the like event
        document.querySelector(".elements").addEventListener("click", function (e) {
                if (e.target.className === "elements__icon") {
                    if (e.target.src.includes("_hover")) {
                        e.target.src = like_active

                        api.putLike(e.target.closest(".elements__card").dataset.cardId).then((res) => {
                            e.target.closest(".elements__card").querySelector(".elements__like-counter").textContent = res.likes.length
                            e.target.src = like_active
                        }).catch(
                            (err) => {
                                console.log(err)
                                e.target.src = like_default
                            }
                        )

                    } else if (e.target.src.includes("_active")) {
                        e.target.src = like_hover

                        api.deleteLike(e.target.closest(".elements__card").dataset.cardId).then((res) => {
                            e.target.closest(".elements__card").querySelector(".elements__like-counter").textContent = res.likes.length
                            e.target.src = like_hover
                        }).catch(
                            (err) => {
                                console.log(err)
                                e.target.src = like_active
                            })
                    }
                }


            }
        )
    }


    _getTemplate() {

        return document.querySelector("template")
            .content
            .querySelector(this._templateClass).
            cloneNode(true);

    }

    generateCard() {
        let cardElement = this._getTemplate()

        if (this._userId !== this._ownerId) {
            cardElement.querySelector(".elements__trash").style.display = "none"
        }

        // add the number of likes
        cardElement.querySelector(".elements__like-counter").textContent = this._likes.length

        // iterate over the like array and check if the user has liked the card
        if (this._likes.some(like => like._id === this._userId)) {
            cardElement.querySelector(".elements__icon").src = like_active
        }

        cardElement.querySelector(".elements__text").textContent = this._name
        cardElement.querySelector(".elements__image").src = this._image
        cardElement.querySelector(".elements__image").alt = this._name.replace(/\s/g, "_")

        // insert the cardId in the card element
        cardElement.dataset.cardId = this._cardId


        return cardElement;
    }

}


