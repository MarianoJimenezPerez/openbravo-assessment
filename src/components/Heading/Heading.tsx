import Title from "@/components/Title/Title";
import SearchBar from "../SearchBar/SearchBar";

const Heading: React.FC = () => {
  return (
    <section>
      <Title title="TODO list" />
      <SearchBar />
    </section>
  );
};
export default Heading;
