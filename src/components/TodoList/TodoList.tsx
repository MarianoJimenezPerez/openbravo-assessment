import TodoItem from "../TodoItem/TodoItem";
import "./_styles.scss";

export interface TodoItemData {
  id: string;
  desc: string;
  isCompleted: boolean;
}

interface TodoListProps {
  todos: TodoItemData[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <section className="todo-list">
      <ul className="todo-list__list">
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
