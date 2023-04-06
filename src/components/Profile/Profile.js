import React, {useEffect} from "react";
import ProfileAvatar from "./ProfileAvatar";
import ProfileInfo from "./ProfileInfo";
import ButtonProfileEdit from "./ButtonProfileEdit";
import ButtonProfileAddCard from "./ButtonProfileAddCard";
import "../../blocks/Profile.sass";



const Profile = (props) => {

  const ApiElement = props.ApiElement
  const [userObject, setUserObject] = React.useState({name: "Loading...", about: "Loading..."});

  useEffect(() => {
    ApiElement.getUserInfo().then((userInfo) => {
      setUserObject(userInfo);
    });
  }, );

  return (
    <section className="profile">
      <div className="profile__container">

        <ProfileAvatar ApiElement={ApiElement} setUserObject={setUserObject} userObject={userObject}/>
        <ProfileInfo ApiElement={ApiElement} userHook={[userObject, setUserObject]}/>
        <ButtonProfileEdit ApiElement={ApiElement} setUserObject={setUserObject}/>

      </div>

      <ButtonProfileAddCard ApiElement={ApiElement}/>

    </section>
  );
}

export default Profile;
