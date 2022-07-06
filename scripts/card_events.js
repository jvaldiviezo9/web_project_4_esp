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

