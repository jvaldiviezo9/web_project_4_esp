import React, {useState} from "react";
import closeIcon from "../../images/close_icon.png";
import "../../blocks/Form.sass";

const ButtonProfileAdd = ({ApiElement}) => {

  const [popupAddImage, setPopupAddImage] = useState(false);

  const handleClick = () => {
    setPopupAddImage(true);
    console.log("click");
  }

  const handleCloseClick = () => {
    setPopupAddImage(false);
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
      {popupAddImage &&
        <div className="form">
          <img onClick={handleCloseClick} className="form__close-button" src={closeIcon} alt="close button"/>


          <form onSubmit={handleSubmit} className="form__container" noValidate>
            <h2 className="form__title">Añadir imagen</h2>
            <input className="form__name" id="form__name" type="text" placeholder="Nombre" required/>
            <span className="form__name-error form__error">field__name</span>
            <input className="form__description" id="form__description" type="text" placeholder="Acerca de" required/>
            <span className="form__description-error form__error">field__description</span>
            <button className="form__submit" type="submit">Save</button>
          </form>


        </div>}
    </>

  );
}

export default ButtonProfileAdd;
