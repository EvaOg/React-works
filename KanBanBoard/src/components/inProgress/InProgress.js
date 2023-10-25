function InProgress({ readyCards, addtoInProgress }) {
  return readyCards.map((el) => (
    <ul>
      <li
        key={el.id}
        onClick={() => {
          addtoInProgress(el.id);
        }}
      >
        {el.text}
      </li>
    </ul>
  ));
}

export default InProgress;
