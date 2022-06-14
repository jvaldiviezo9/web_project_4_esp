let profile_info = document.querySelector(".profile__info");
let edit_button = document.querySelector(".profile__edit");
let edit_form = document.querySelector(".form");
let close_button = document.querySelector(".form__close-button");


close_button.addEventListener("click", function() {
    edit_form.style.display = "none";
})

edit_button.addEventListener("click", function() {
    edit_form.style.display = "block";
})


function edit_profile(e) {

    e.preventDefault();

    profile_info.querySelector(".profile__name").textContent = e.target.elements.form__name.value

    profile_info.querySelector(".profile__description").textContent = e.target.elements.form__description.value

    setTimeout(function() {

        edit_form.style.display = "none";

    }, 175)

}
edit_form.addEventListener("submit", edit_profile)