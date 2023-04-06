import React from "react";
import '../blocks/App.sass';
import Header from "./Header/Header";
import Profile from "./Profile/Profile";
import Elements from "./Elements/Elements";
import Footer from "./Footer/Footer";

import {Api} from "../utils/Api"

function App() {

  const ApiElement = new Api('https://around.nomoreparties.co/v1/cohort-1-es', "3e02ecdf-737d-4954-9ff6-836c396f5812");


return (
  <>
    <Header />
    <Profile ApiElement={ApiElement} />
    <Elements ApiElement={ApiElement}/>
    <Footer />
  </>
);
}

export default App;
