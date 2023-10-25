import { useState } from "react";
import styles from "../Components.module.css";

function CreateCard({ addCards }) {
  const [text, setText] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (text.length > 0) {
      addCards(text);
      setText("");
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.card}>
      <input
        type="text"
        className={styles.input}
        placeholder="New card"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </form>
  );
}

export default CreateCard;
