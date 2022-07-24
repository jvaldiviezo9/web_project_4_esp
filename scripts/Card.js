import {template} from "./utils.js";

export default class Card {

    // initial render of cards
    static initialCards = [
        {
            name: "Valle de Yosemite",
            link: "https://code.s3.yandex.net/web-code/yosemite.jpg"
        },
        {
            name: "Lago Louise",
            link: "https://code.s3.yandex.net/web-code/lake-louise.jpg"
        },
        {
            name: "Montañas Calvas",
            link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg"
        },
        {
            name: "Latemar",
            link: "https://code.s3.yandex.net/web-code/latemar.jpg"
        },
        {
            name: "Parque Nacional de la Vanoise",
            link: "https://code.s3.yandex.net/web-code/vanoise.jpg"
        },
        {
            name: "Lago di Braies",
            link: "https://code.s3.yandex.net/web-code/lago.jpg"
        },
        {
            name: "Chichén Itzá",
            link: "images/elements/chichenitza.jpg"
        },

        {
            name: "Monte Albán",
            link: "images/elements/montealban.jpg"
        },

        {
            name: "Palenque",
            link: "images/elements/palenque.jpg"
        },

        {
            name: "Tulum",
            link: "images/elements/tulum.jpg"
        },

        {
            name: "Cenote Dos Ojos",
            link: "images/elements/cenote%20dos%20ojos.jpg"
        },

        {
            name: "Barrancas del cobre",
            link: "images/elements/barrancas%20del%20cobre.jpg"
        }

    ]

    static card_container = document.querySelector(".elements");
    static card_template = template.querySelector(".elements__card");

    static removeCard(element) {

        let card = element.closest(".elements__card");
        card.remove();

    }

    // functions related to the zoom image cointainer.
    static _zoomFunctions = {

        imageClickOutside : function (e) {
            // click outside the form
            // ref: https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element

            const zoomBlock = document.querySelector(".elements__zoom")
            const insideImage = e.composedPath().includes(zoomBlock)

            if (!insideImage) {
                Card._zoomFunctions.closeImage()
            }

        },

        closeImage : function () {

            const zoomBlock = document.querySelector(".elements__zoom")
            zoomBlock.style.visibility = "visible"

            setTimeout(function () {
                zoomBlock.classList.remove("elements__image_active")
                setTimeout(function () {
                    zoomBlock.style.display = "none"
                    document.removeEventListener("click", Card._zoomFunctions.imageClickOutside)
                }, 500)
            }, 100)
        }

    }

    // events to interact with the cards and the zoom image container.
    static setEvents() {

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

                if (e.target.className === "elements__image") {

                    document.querySelector(".elements__zoom").style.display = "block";
                    document.querySelector(".elements__zoom-image").src = e.target.src;

                    setTimeout(function () {
                        document.querySelector(".elements__zoom").classList.add("elements__image_active")
                        document.addEventListener("click", Card._zoomFunctions.imageClickOutside)
                    }, 100)

                }


                if (e.target.className === "elements__trash") {

                    Card.removeCard(e.target)
                }

            }
        )

        // big popup image
        document.querySelector(".elements__zoom-button").addEventListener(
            "click", Card._zoomFunctions.closeImage)

    }

    constructor(cardInfo) {

        this._card = Card.card_template.cloneNode(true);

        this._card.querySelector(".elements__text").textContent = cardInfo.name;
        this._card.querySelector(".elements__image").src = cardInfo.link;
        this._card.querySelector(".elements__image").alt = cardInfo.name.replace(/\s/g, "_");

    }

    static renderCards() {

        // initialize cards
        Card.initialCards.forEach(function (item) {

            // console.log(item.link, item.name)

            let card_element = new Card(item);

            card_element.addCard()

        })

    }

    static initCards() {
        Card.renderCards()
        Card.setEvents()
    }


    addCard() {

        Card.card_container.prepend(this._card)

    }




}


