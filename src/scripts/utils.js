export let template = document.querySelector("template").content;


//some places and images taken from here
//https://travel2next.com/landmarks-mexico/
//others from wikipedia
//https://es.wikipedia.org/wiki/Barrancas_del_Cobre#/media/Archivo:Barrancas_de_Cobre.jpg
//https://en.wikipedia.org/wiki/Chichen_Itza#/media/File:Chichen_Itza_3.jpg
export const initialCards = [
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


// export function setKeyboardEvents() {
//     document.addEventListener("keydown", function (e) {
//
//         if (e.keyCode === 27) {
//
//             if (document.querySelector(".zoom").style.display === "block") {
//                 Card._zoomFunctions.closeImage()
//             }
//
//             if (document.querySelector(".form")) {
//                 Form._closeForm()
//             }
//
//         }
//
//     })
// }

