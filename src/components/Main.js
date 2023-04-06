import React from "react";
import '../blocks/App.sass';
import Profile from "./Profile/Profile";
import Elements from "./Elements/Elements";

function Main({ApiElement}) {
  return (
    <>
      <Profile ApiElement={ApiElement} />
      <Elements ApiElement={ApiElement}/>
    </>
  );
}

export default Main;