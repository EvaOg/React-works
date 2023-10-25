import { v4 as uuidv4 } from "uuid";
import { createContext, useState } from "react";
const CartContext = createContext();

export function CartProvider({ children }) {
  const [cards, setCards] = useState([]);
  const [finishedCards, setFinishedCards] = useState([]);

  const addCard = (text) => {
    const newCard = {
      text: text,
      id: uuidv4(),
    };
    setCards([...cards, newCard]);
  };

  const deleteCardHandler = (id) => {
    setCards(cards.filter((card) => card.id !== id));
  };

  function addCardtoFinished(inProgressCards, x) {
    const newFinishedCard = inProgressCards.find((card) => x === card.id);
    setFinishedCards([...finishedCards, newFinishedCard]);
  }

  const deleteFinishedCardHandler = (id) => {
    setFinishedCards(finishedCards.filter((card) => card.id !== id));
  };

  return (
    <CartContext.Provider
      value={{
        cards,
        setCards,
        addCard,
        deleteCardHandler,
        addCardtoFinished,
        finishedCards,
        deleteFinishedCardHandler,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
