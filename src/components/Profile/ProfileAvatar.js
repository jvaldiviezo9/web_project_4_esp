import React, {useState} from "react";
import editPencil from "../../images/edit_pencil.png";
import "../../blocks/Form.sass";
import PopupWithForm from "../Popups/PopupWithForm";

const ProfileAvatar = ({ApiElement, setUserObject, userObject}) => {

  const [popupAvatar, setPopupAvatar] = useState(false);

  const handleClick = () => {
    setPopupAvatar(true);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
    ApiElement.patchAvatar(e.target.form__name.value).then((userInfo) => {
      setUserObject(userInfo);
    });
    setPopupAvatar(false);
  }

  return (
      <>
        <div onClick={handleClick} className="profile__avatar">
          <img className="profile__picture" src={userObject.avatar} alt="profile picture" />
          <img className="profile__icon" src={editPencil} alt="edit icon" />
        </div>

        <PopupWithForm popupStatus={popupAvatar} setPopupStatus={setPopupAvatar}>

          <form onSubmit={handleSubmit} className="form__container" noValidate>
            <h2 className="form__title">Editar foto de perfil</h2>
            <input className="form__name" id="form__name" type="text" placeholder="URL" required />
            <span className="form__name-error form__error">field__name</span>
            <button className="form__submit" type="submit">Save</button>
          </form>

        </PopupWithForm>

      </>
  );


}

export default ProfileAvatar;
