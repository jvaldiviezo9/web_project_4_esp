import React, {useState} from "react";
import editPencil from "../../images/edit_pencil.png";
import "../../blocks/Form.sass";
import closeIcon from "../../images/close_icon.png";

const ProfileAvatar = ({ApiElement, setUserObject, userObject}) => {

  const [popupAvatar, setPopupAvatar] = useState(false);

  const handleClick = () => {
    setPopupAvatar(true);
    console.log("click");
  }

  const handleCloseClick = () => {
    setPopupAvatar(false);
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
        {popupAvatar && (
            <div className="form">
              <img onClick={handleCloseClick} className="form__close-button" src={closeIcon} alt="close button" />

              <form onSubmit={handleSubmit} className="form__container" noValidate>
                <h2 className="form__title">Editar foto de perfil</h2>
                <input className="form__name" id="form__name" type="text" placeholder="URL" required />
                <span className="form__name-error form__error">field__name</span>
                <button className="form__submit" type="submit">Save</button>
              </form>

            </div>
        )}
      </>
  );


}

export default ProfileAvatar;
