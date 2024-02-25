import Button from "@/components/Button/Button";
import Heading from "@/components/Heading/Heading";
import TodoList from "@/components/TodoList/TodoList";
import "./_styles.scss";
import { useTodoContext } from "@/hooks/useTodoContext";

const Home: React.FC = () => {
  const { todos, deleteAllCompletedTodos } = useTodoContext();

  return (
    <main className="home-page">
      <Heading />
      <TodoList todos={todos} />
      <Button
        content="Remove completed"
        onClickFn={() => deleteAllCompletedTodos()}
      />
    </main>
  );
};
export default Home;
