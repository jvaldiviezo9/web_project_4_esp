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

    }, 225)

}
edit_form.addEventListener("submit", edit_profile)

// add global event on hover in the elements
document.querySelector(".elements").addEventListener("mouseover", function(e) {
        if (e.target.className === "elements__icon") {
            if (e.target.src.includes("_default")) {
                e.target.src = "images/like/like_hover.png"
            }
        }
    }
)

document.querySelector(".elements").addEventListener("mouseout", function(e) {
        if (e.target.className === "elements__icon") {
            if (e.target.src.includes("_hover")) {
                e.target.src = "images/like/like_default.png"
            }
        }
    }
)

document.querySelector(".elements").addEventListener("click", function(e) {
        if (e.target.className === "elements__icon") {
            if (e.target.src.includes("_hover") || e.target.src.includes("_hover")) {
                e.target.src = "images/like/like_active.png"
            }else if (e.target.src.includes("_active")) {
                e.target.src = "images/like/like_hover.png"
            }
        }
    }
)
