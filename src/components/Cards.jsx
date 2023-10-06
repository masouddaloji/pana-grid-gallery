import { useState } from "react";
//components
import Card from "./card";

const Cards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const myCards = [
    {
      id: "card_1",
      title: "title 1",
      subTitle: "sub title 1",
      caption:
        "This is the detailed information for card 1.This is the detailed information for card 1.This is the detailed information for card 1.This is the detailed information for card 1.This is the detailed information for card 1.This is the detailed information for card 1.This is the detailed information for card 1.This is the detailed information for card 1.This is the detailed information for card 1.This is the detailed information for card 1.This is the detailed information for card 1.This is the detailed information for card 1.",
    },
    {
      id: "card_2",
      title: "title 2",
      subTitle: "sub title 2",
      caption: "This is the detailed information for card 2.",
    },
    {
      id: "card_3",
      title: "title 3",
      subTitle: "sub title 3",
      caption: "This is the detailed information for card 3.",
    },
    {
      id: "card_4",
      title: "title 4",
      subTitle: "sub title 4",
      caption: "This is the detailed information for card 4.",
    },
    {
      id: "card_5",
      title: "title 5",
      subTitle: "sub title 5",
      caption: "This is the detailed information for card 5.",
    },
    {
      id: "card_6",
      title: "title 6",
      subTitle: "sub title 6",
      caption: "This is the detailed information for card 6.",
    },
    {
      id: "card_7",
      title: "title 7",
      subTitle: "sub title 7",
      caption: "This is the detailed information for card 7.",
    },
    {
      id: "card_8",
      title: "title 8",
      subTitle: "sub title 8",
      caption: "This is the detailed information for card 8.",
    },
  ];

  const clickHandler = (index) => {
    if (selectedCard === index) {
      setSelectedCard(null);
    } else {
      setSelectedCard(index);
    }
  };
  return (
    <div
      className={`cards ${
        (selectedCard === null || selectedCard === "") && "cards__empty"
      }`}
    >
      {myCards.map((item, index) => (
        <Card
          key={item.id}
          {...item}
          isSelected={selectedCard === index}
          handleToggleInfo={() => clickHandler(index)}
          isEmptySelected={selectedCard}
        />
      ))}
    </div>
  );
};

export default Cards;
