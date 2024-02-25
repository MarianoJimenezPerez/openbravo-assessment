import Button from "../Button/Button";
import "./_styles.scss";

interface SearchBarProps {
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
    <form className="search-bar" aria-label="Search input">
      <input
        type="text"
        className="search-bar__input"
        placeholder={placeholder ? placeholder : ""}
      />
      <Button content="Add Todo" />
    </form>
  );
};
export default SearchBar;
