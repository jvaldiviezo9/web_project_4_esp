import React, {useState} from "react";
import "../../blocks/Form.sass";
import PopupWithForm from "../Popups/PopupWithForm";

const ButtonProfileAdd = ({ApiElement}) => {

  const [popupAddImage, setPopupAddImage] = useState(false);

  const handleClick = () => {
    setPopupAddImage(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    ApiElement.postCard(e.target.form__name.value, e.target.form__description.value).then((cardInfo) => {
      console.log(cardInfo);
      setPopupAddImage(false);
    });
  }

  return (
    <>
      <button onClick={handleClick} className="profile__add">+</button>

      <PopupWithForm popupStatus={popupAddImage} setPopupStatus={setPopupAddImage}>

          <form onSubmit={handleSubmit} className="form__container" noValidate>
            <h2 className="form__title">Añadir imagen</h2>
            <input className="form__name" id="form__name" type="text" placeholder="Nombre" required/>
            <span className="form__name-error form__error">field__name</span>
            <input className="form__description" id="form__description" type="text" placeholder="Acerca de" required/>
            <span className="form__description-error form__error">field__description</span>
            <button className="form__submit" type="submit">Save</button>
          </form>

      </PopupWithForm>

    </>)

}

export default ButtonProfileAdd;
