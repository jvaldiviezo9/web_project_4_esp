import React, {useState} from "react";
import closeIcon from "../../images/close_icon.png";
import "../../blocks/Form.sass";
import PopupWithForm from "../Popups/PopupWithForm";

const ButtonProfileEdit = ({ApiElement, setUserObject}) => {


  const [popupPerfil, setPopupPerfil] = useState(false);

  const handleClick = () => {
    setPopupPerfil(true);
  }
  function handleSubmit(event) {
    event.preventDefault(); // Prevents the form from submitting and refreshing the page

    const name = event.target.elements.form__name.value;
    const description = event.target.elements.form__description.value;

    console.log(`Name: ${name}`);
    console.log(`Description: ${description}`);


    // ref: https://stackoverflow.com/questions/73337619/uncaught-in-promise-typeerror-setexercises-is-not-a-function
    ApiElement.patchUserInfo(name, description).then((userInfo) => {
      setUserObject(userInfo);
    });

  }
  return (
    <>
      <button onClick={handleClick} className="profile__edit"></button>
      <PopupWithForm popupStatus={popupPerfil} setPopupStatus={setPopupPerfil}>
          <form onSubmit={handleSubmit} className="form__container" >
            <h2 className="form__title">Editar perfil</h2>
            <input className="form__name" id="form__name" type="text" placeholder="Nombre" required/>
            <span className="form__name-error form__error">field__name</span>
            <input className="form__description" id="form__description" type="text" placeholder="Acerca de" required/>
              <span className="form__description-error form__error">field__description</span>
              <button className="form__submit" type="submit">Save</button>
          </form>
        </PopupWithForm>
    </>
  );
}

export default ButtonProfileEdit;
