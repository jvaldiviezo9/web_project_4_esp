let form_template = template.querySelector(".form");

class Form {

    // master configuration object
    // this is used to control the entire behaviour of the forms
    static database = {
        "profile": {
            "title": "Edit profile",
            "name": "Name",
            "description": "Description",
            "function": Form._form_edit_profile,
            "errorValidation": {
                "form__name": {
                    "minlength": 2,
                    "maxlength": 40,
                },
                "form__description": {
                    "minlength": 2,
                    "maxlength": 200,
                }
            }

        },
        "card": {
            "title": "Add Place",
            "name": "Place",
            "description": "URL",
            "function": Form._form_add_place,
            "errorValidation": {
                "form__name": {
                    "minlength": 2,
                    "maxlength": 40,
                },
                "form__description": {
                    "minlength": 2,
                    "type": "url",
                    "pattern": "https?://.+"
                }
            }
        }
    }

    static _form_edit_profile(e) {

        let profile_info = document.querySelector(".profile__info");

        e.preventDefault()

        profile_info.querySelector(".profile__name").textContent = e.target.elements.form__name.value
        profile_info.querySelector(".profile__description").textContent = e.target.elements.form__description.value

        Form._closeForm()

    }

    static _form_add_place(e) {

        e.preventDefault()

        let card_info = {}

        card_info.name = e.target.elements.form__name.value
        card_info.link = e.target.elements.form__description.value

        new Card(card_info).addCard()

        Form._closeForm()

    }

// reuse function to add the input forms, for a new card and for a new place.
    static _openForm(kind = "profile") {

        let form = form_template.cloneNode(true);

        const source = Form.database[kind]

        form.querySelector(".form__title").textContent = source.title

        form.querySelector(".form__name").textContent = ""
        form.querySelector(".form__name").placeholder = source.name

        form.querySelector(".form__description").textContent = ""
        form.querySelector(".form__description").placeholder = source.description

        form.addEventListener("submit", source.function)

        form.querySelector(".form__close-button").addEventListener("click", Form._closeForm)


        // add validations to the for

        form.style.visibility = "visible"

        setTimeout(function () {
                form.classList.add("form_active")
                document.addEventListener("click", Form._formClickOutside)
            }, 100
        )

        const validation_object = new FormValidator(form.querySelector(".form__container"), source)
        validation_object.enableValidation()

        document.querySelector(".page").appendChild(form);

    }

    static _formClickOutside(e) {
        // click outside the form
        // ref: https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element

        const forms = document.forms
        if (forms.length > 0) {
            const insideForm = e.composedPath().includes(forms[0])

            if (!insideForm) {
                Form._closeForm()
            }
        }
    }

    static _closeForm() {

        let edit_form = document.querySelector(".form");
        edit_form.classList.remove("form_active")

        setTimeout(function () {

            edit_form.remove()
            document.removeEventListener("click", Form._formClickOutside)
        }, 500)

    }

    static addEvents() {

        document.querySelector(".profile__edit").addEventListener("click", function () {

            Form._openForm()
        })

        document.querySelector(".profile__add").addEventListener("click", function () {

            Form._openForm("card")
        })
    }
}


Form.addEvents()



