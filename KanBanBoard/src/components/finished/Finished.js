function Finished({ inProgressCards, addFinished }) {
  return inProgressCards.map((el) => (
    <ul>
      <li
        key={el.id}
        onClick={() => {
          addFinished(el.id);
        }}
      >
        {el.text}
      </li>
    </ul>
  ));
}

export default Finished;
