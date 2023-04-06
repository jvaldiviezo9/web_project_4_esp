import React from "react";

const FormProfile = () => {

  return (
    <div className="form">
      <img className="form__close-button" src="images/close_icon.png" alt="close button"/>
      <form className="form__container" noValidate>
        <h2 className="form__title"></h2>
        <input className="form__name" id="form__name" type="text" placeholder="" required/>
        <span className="form__name-error form__error">field__name</span>
        <input className="form__description" id="form__description" type="text" placeholder="" required/>
        <span className="form__description-error form__error">field__description</span>
        <button className="form__submit" type="submit" disabled>Save</button>
      </form>
    </div>
  );
}

export default FormProfile;