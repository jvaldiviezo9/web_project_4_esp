// the form is active


function enableValidation(source){
    // function to apply the input events
    // to all the fields in the form

    // only get the input fields
    const form = document.forms[0]
    const formInputs = Array.from(form.elements).filter((input) => input.type !== "submit")

    formInputs.forEach(input => {

        // add validation criteria to the input tag

        const attributeValidators = source.errorValidation[input.classList[0]]
        for (const key in attributeValidators){

            input.setAttribute(key, attributeValidators[key])

        }

        // validate the input
        input.addEventListener("input", e => {

            let errorSpan = document.forms[0].querySelector(`.${input.id}-error`)

            errorSpan.textContent = input.validationMessage.split("(")[0]

            if (input.validationMessage === "") {
                errorSpan.textContent = "Ok"
                errorSpan.classList.remove("form__error-active")
            }else{
                errorSpan.classList.add("form__error-active")
            }

        })
    })

    form.addEventListener("submit", e => {
        e.preventDefault()
    })

    form.addEventListener("input", e => {

        const submitButton = form.querySelector(".form__submit")
        const formInputs = Array.from(form.elements).filter((input) => input.type !== "submit")

        const checkValidity = !formInputs.some(input => {
            if(!input.validity.valid){
                return true
            }
        })

        // if checkValidity is true the entire form is valid
        // so the button is activated

        // console.log(checkValidity)
        submitButton.disabled = !checkValidity


    })
}
