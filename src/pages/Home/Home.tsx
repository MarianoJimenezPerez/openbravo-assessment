import Button from "@/components/Button/Button";
import Heading from "@/components/Heading/Heading";
import TodoList, { TodoItemData } from "@/components/TodoList/TodoList";
import "./_styles.scss";

const Home: React.FC = () => {
  const TODOS: TodoItemData[] = [
    { id: "dsadsadsadasd", desc: "first task", isCompleted: false },
    { id: "dasdsa", desc: "first task", isCompleted: true },
    { id: "dsadasdsa", desc: "first task", isCompleted: true },
    { id: "23112asda", desc: "first task", isCompleted: false },
    { id: "231412312312asd", desc: "first task", isCompleted: true },
  ];
  return (
    <main className="home-page">
      <Heading />
      <TodoList todos={TODOS} />
      <Button content="Remove completed" />
    </main>
  );
};
export default Home;
