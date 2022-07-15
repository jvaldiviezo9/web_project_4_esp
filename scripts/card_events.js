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

        if (e.target.className === "elements__image") {

            document.querySelector(".elements__zoom").style.display = "block";
            document.querySelector(".elements__zoom-image").src = e.target.src;

            setTimeout(function () {
                document.querySelector(".elements__zoom").classList.add("elements__image_active")
                document.addEventListener("click", imageClickOutside)
            }, 100)

        }

        if (e.target.className === "elements__trash") {

            removeCard(e.target)
        }

    }
)

// big popup image
document.querySelector(".elements__zoom-button").addEventListener("click",  closeImage)


function imageClickOutside(e) {
    // click outside the form
    // ref: https://stackoverflow.com/questions/152975/how-do-i-detect-a-click-outside-an-element

    const zoomBlock = document.querySelector(".elements__zoom")
    const insideImage = e.composedPath().includes(zoomBlock)

    if (!insideImage) {
        closeImage()
    }

}


function closeImage() {
    const zoomBlock = document.querySelector(".elements__zoom")
    zoomBlock.style.visibility = "visible"

    setTimeout(function () {
        zoomBlock.classList.remove("elements__image_active")
        setTimeout(function () {
            zoomBlock.style.display = "none"
            document.removeEventListener("click", imageClickOutside)
        }, 500)
    }, 100)
}


document.addEventListener("keydown", function(e) {

    if (e.keyCode === 27) {

        if (document.querySelector(".elements__zoom").style.display === "block") {
            closeImage()
        }

        if (document.querySelector(".form")){
            closeForm()
        }

    }

})