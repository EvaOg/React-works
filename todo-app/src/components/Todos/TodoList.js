import TodoDiv from "./TodoDiv";

function TodoList({ todos, deleteTodo }) {
  return (
    <div className="todoListContainer">
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((el, index) => (
        <TodoDiv key={index} todo={el} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  );
}

export default TodoList;
