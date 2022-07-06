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

function openForm(kind="profile") {

    let form = form_template.cloneNode(true);

    if (kind === "profile") {

        form.querySelector(".form__title").textContent = "Edit profile"

        form.querySelector(".form__name").textContent = ""
        form.querySelector(".form__name").placeholder = "Name"

        form.querySelector(".form__description").textContent = ""
        form.querySelector(".form__description").placeholder = "Description"

        document.querySelector(".page").appendChild(form);

        // add event to modify the profile
        let edit_form = document.querySelector(".form");
        edit_form.addEventListener("submit", form_edit_profile)

        edit_form.style.display = "block";


    }else{

        form.querySelector(".form__title").textContent = "New place"

        form.querySelector(".form__name").textContent = ""
        form.querySelector(".form__name").placeholder = "Name"

        form.querySelector(".form__description").textContent = ""
        form.querySelector(".form__description").placeholder = "URL"

        document.querySelector(".page").appendChild(form);
        let edit_form = document.querySelector(".form");
        edit_form.addEventListener("submit", form_add_place)

        edit_form.style.display = "block";

    }

    let close_button = document.querySelector(".form__close-button");
    close_button.addEventListener("click", closeForm)

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


