// big popup image
document.querySelector(".elements__zoom-button").addEventListener("click", function () {
    document.querySelector(".elements__zoom").style.display = "none";
})



function form_edit_profile(e) {

    let profile_info = document.querySelector(".profile__info");

    e.preventDefault()

    profile_info.querySelector(".profile__name").textContent = e.target.elements.form__name.value
    profile_info.querySelector(".profile__description").textContent = e.target.elements.form__description.value

    closeForm()

}

function form_add_place(e) {

    e.preventDefault()

    card_info = {}

    card_info.name = e.target.elements.form__name.value
    card_info.link = e.target.elements.form__description.value

    addCard(card_info)

    closeForm()

}

// reuse function to add the input forms, for a new card and for a new place.
function openForm(kind="profile") {

    let form = form_template.cloneNode(true);

    database = {
        "profile": {
            "title": "Edit profile",
            "name": "Name",
            "description": "Description",
            "function" : form_edit_profile

        },
        "card": {
            "title": "Add Place",
            "name": "Place",
            "description": "URL",
            "function" : form_add_place
        }
    }

    const source = database[kind]

    form.querySelector(".form__title").textContent = source.title

    form.querySelector(".form__name").textContent = ""
    form.querySelector(".form__name").placeholder = source.name

    form.querySelector(".form__description").textContent = ""
    form.querySelector(".form__description").placeholder = source.description

    form.addEventListener("submit", source.function)
    form.querySelector(".form__close-button").addEventListener("click", closeForm)

    form.style.display = "block";
    document.querySelector(".page").appendChild(form);

}

function closeForm() {
    let edit_form = document.querySelector(".form");
    setTimeout(function () {

        edit_form.style.display = "none";
        edit_form.remove()

    }, 225)

}

document.querySelector(".profile__edit").addEventListener("click", function () {

    openForm()
})

document.querySelector(".profile__add").addEventListener("click", function () {

    openForm("card")
})


