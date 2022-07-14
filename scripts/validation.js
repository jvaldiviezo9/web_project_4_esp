// the form is active

function formSetEvents(source){
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
            errorSpan.textContent = input.validationMessage

        })

    })

    form.addEventListener("submit", e => {
        e.preventDefault()
    })
}


