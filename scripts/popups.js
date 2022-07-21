
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

    const source = database[kind]

    form.querySelector(".form__title").textContent = source.title

    form.querySelector(".form__name").textContent = ""
    form.querySelector(".form__name").placeholder = source.name

    form.querySelector(".form__description").textContent = ""
    form.querySelector(".form__description").placeholder = source.description

    form.addEventListener("submit", source.function)



    form.querySelector(".form__close-button").addEventListener("click", closeForm)


    // add validations to the for

    form.style.visibility = "visible"

    setTimeout(function () {
        form.classList.add("form_active")
        document.addEventListener("click", formClickOutside)
        },100
    )

    document.querySelector(".page").appendChild(form);

    enableValidation(source)

}

function formClickOutside(e) {
    // click outside the form
    // ref: https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element

        const forms = document.forms
        if (forms.length > 0) {
            const insideForm = e.composedPath().includes(forms[0])

            if (!insideForm) {
                closeForm()
            }
        }
}

function closeForm() {
    let edit_form = document.querySelector(".form");
    edit_form.classList.remove("form_active")

    setTimeout(function () {

        edit_form.remove()
        document.removeEventListener("click", formClickOutside)
    }, 500)

}

document.querySelector(".profile__edit").addEventListener("click", function () {

    openForm()
})

document.querySelector(".profile__add").addEventListener("click", function () {

    openForm("card")
})



const database = {
        "profile": {
            "title": "Edit profile",
            "name": "Name",
            "description": "Description",
            "function" : form_edit_profile,
            "errorValidation" : {
                "form__name" : {
                    "minlength" : 2,
                    "maxlength" : 40,
                },
                "form__description" : {
                    "minlength" : 2,
                    "maxlength" : 200,
                }
            }

        },
        "card": {
            "title": "Add Place",
            "name": "Place",
            "description": "URL",
            "function" : form_add_place,
            "errorValidation" : {
                "form__name" : {
                    "minlength" : 2,
                    "maxlength" : 40,
                },
                "form__description" : {
                    "minlength" : 2,
                    "type" : "url",
                    "pattern" : "https?://.+"
                }
            }
        }
    }



