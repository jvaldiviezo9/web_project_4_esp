document.addEventListener("keydown", function (e) {

    if (e.keyCode === 27) {

        if (document.querySelector(".elements__zoom").style.display === "block") {
            Card._zoomFunctions.closeImage()
        }

        if (document.querySelector(".form")) {
            Form._closeForm()
        }

    }

})