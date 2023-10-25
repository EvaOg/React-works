import { RiTodoFill } from "react-icons/ri";
import styles from "./TodoDiv.css";

function TodoDiv(props) {
  const { todo, index, deleteTodo } = props;
  return (
    <div className="todoDiv" onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className="todoIcon" />
      <div className="todoText">{todo}</div>
    </div>
  );
}

export default TodoDiv;
