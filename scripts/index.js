// load template files
let template = document.querySelector("template").content;
let form_template = template.querySelector(".form");
let card_template = template.querySelector(".elements__card");

let card_container = document.querySelector(".elements");

// initial render of cards
const initialCards = [
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
  }
];


// initialize cards
initialCards.forEach(function(item){

    console.log(item.link, item.name)
    addCard(item)

})

function addCard(card_info){

    let card = card_template.cloneNode(true);

    card.querySelector(".elements__text").textContent = card_info.name;

    card.querySelector(".elements__image").src = card_info.link;
    card.querySelector(".elements__image").alt = card_info.name.replace(/\s/g, "_");

    card_container.prepend(card)

}

function removeCard(element){

    let card = element.closest(".elements__card");
    card.remove();

}
