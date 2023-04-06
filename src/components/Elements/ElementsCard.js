import React, {useEffect, useState} from "react";

import trashIcon from "../../images/trash_icon.png";
import likeDefault from "../../images/like/like_default.png";
import likeActive from "../../images/like/like_active.png";
import likeHover from "../../images/like/like_hover.png";
import closeIcon from "../../images/close_icon.png";

const ElementsCard = (props) => {

  const [likeSrc, setLikeSrc] = useState([false,likeDefault]);
  const [imagePopup, setImagePopup] = useState(false);
  const setCards = props.setCards;

  const ApiElement = props.ApiElement
  const cardObject = props.cardObject;
  const userObject = props.userObject;


  useEffect(() => {

    cardObject.likes.forEach((like) => {
      if (like._id === userObject._id) {
        setLikeSrc([true,likeActive]);
      }
    })
  }, [])

  const onLikeClick = () => {
    if (likeSrc[0]) setLikeSrc([false,likeDefault]);
    else setLikeSrc([true,likeActive]);
  };

  const onLikeHover = () => {
    if (likeSrc[0]===false) setLikeSrc([false, likeHover]);
  }
  const onLikeUnhover = () => {
    if (likeSrc[0]===false) setLikeSrc([false, likeDefault]);
  };

  const imageOpen = () => {
    setImagePopup(true);
    console.log("click");
  };

  const imageClose = () => {
    setImagePopup(false);
  };

  const likeFunction = () => {

    let card_id = cardObject._id;

    if (likeSrc[0]) {
      ApiElement.deleteLike(card_id)
      .then((data) => {
        setLikeSrc([false,likeDefault]);
        cardObject.likes = data.likes;
      })
      .catch((err) => {
        console.log(err);
      })
    }
    else {
      ApiElement.putLike(card_id)
      .then((data) => {
        setLikeSrc([true,likeActive]);
        cardObject.likes = data.likes;
      })
      .catch((err) => {
        console.log(err);
      })
    }

  }

  const handleTrashClick = () => {
    let card_id = cardObject._id;
    ApiElement.deleteCard(card_id)
    .then((data) => {
      // remove the card from the DOM
      // render again the cards
        setCards(data)
      })
    .catch((err) => {
      console.log(err);
    })
  }


  return (
    <>
      <div className="elements__card" data-user-id={cardObject._id}>

        {(cardObject.owner._id === userObject._id) &&
            <img className="elements__trash" onClick={handleTrashClick} src={trashIcon} alt="trash icon" />}

        <img onClick={imageOpen} className="elements__image" src={cardObject.link} alt="" />
        <div className="elements__info">
          <h2 className="elements__text">{cardObject.name}</h2>
          <button className="elements__like" onClick={onLikeClick} onMouseEnter={onLikeHover} onMouseLeave={onLikeUnhover}>
            <img onClick={likeFunction} className="elements__icon" src={likeSrc[1]} alt="like_icon" />
            <span className="elements__like-counter">{cardObject.likes.length}</span>
          </button>
        </div>
      </div>
      {imagePopup && (
        <>
          <div className="elements__popupContainer">
            <img onClick={imageClose} className="elements__close-button" src={closeIcon} alt="close button"/>
            <img className="elements__imagePopup" src={cardObject.link} alt="" />
          </div>

        </>
      )}
    </>
  );
};

export default ElementsCard;

