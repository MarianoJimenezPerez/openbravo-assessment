import Title from "@/components/Title/Title";
import AddTodoBar from "../AddTodoBar/AddTodoBar";

const Heading: React.FC = () => {
  return (
    <section>
      <Title title="TODO list" />
      <AddTodoBar />
    </section>
  );
};
export default Heading;
