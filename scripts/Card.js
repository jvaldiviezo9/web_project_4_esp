import {template} from "./utils.js";


// this class only worry will be to store and generate a card object
export default class Card {

    // initial render of cards

    static removeCard(element) {

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
    static SetEvents() {
        // add global event on hover in the elements
        document.querySelector(".elements").addEventListener("mouseover", function (e) {
                if (e.target.className === "elements__icon") {
                    if (e.target.src.includes("_default")) {
                        e.target.src = "images/like/like_hover.png"
                    }
                }
            }
        )
        document.querySelector(".elements").addEventListener("mouseout", function (e) {
                if (e.target.className === "elements__icon") {
                    if (e.target.src.includes("_hover")) {
                        e.target.src = "images/like/like_default.png"
                    }
                }
            }
        )
        document.querySelector(".elements").addEventListener("click", function (e) {
                if (e.target.className === "elements__icon") {
                    if (e.target.src.includes("_hover") || e.target.src.includes("_hover")) {
                        e.target.src = "images/like/like_active.png"
                    } else if (e.target.src.includes("_active")) {
                        e.target.src = "images/like/like_hover.png"
                    }
                }

                // if (e.target.className === "elements__image") {
                //
                //     document.querySelector(".zoom").style.display = "block";
                //     document.querySelector(".zoom__image").src = e.target.src;
                //
                //     setTimeout(function () {
                //         document.querySelector(".zoom").classList.add("zoom__image_active")
                //         document.addEventListener("click", Card._zoomFunctions.imageClickOutside)
                //     }, 100)
                //
                // }


                if (e.target.className === "elements__trash") {

                    Card.removeCard(e.target)
                }

            }
        )

    }

    constructor(cardInfo, templateClass) {

        this._templateClass = templateClass
        this._image = cardInfo.link
        this._name = cardInfo.name

    }

    _getTemplate() {

        return document.querySelector("template")
            .content
            .querySelector(this._templateClass).
            cloneNode(true);

    }

    generateCard() {
        let cardElement = this._getTemplate()

        cardElement.querySelector(".elements__text").textContent = this._name
        cardElement.querySelector(".elements__image").src = this._image
        cardElement.querySelector(".elements__image").alt = this._name.replace(/\s/g, "_")

        return cardElement;
    }

}


