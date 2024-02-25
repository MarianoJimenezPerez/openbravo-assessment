import { TodoItemData } from "../TodoList/TodoList";
import "./_style.scss";

interface TodoItemProps {
  todo: TodoItemData;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li className={`todo-item ${todo.isCompleted ? "active" : ""} `}>
      <div className="todo-item__description">
        <h3>{todo.desc}</h3>
      </div>
      <div
        className={`todo-item__status ${
          todo.isCompleted ? "active" : ""
        } active`}
      >
        <span className={`${todo.isCompleted ? "active" : ""} `}>Status: </span>
        <p className={`${todo.isCompleted ? "active" : ""} `}>
          {todo.isCompleted ? "COMPLETED" : "IN PROGRESS"}
        </p>
      </div>
    </li>
  );
};
export default TodoItem;
