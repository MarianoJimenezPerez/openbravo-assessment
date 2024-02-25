import "./_styles.scss";

type ButtonType = "submit" | "button";

interface ButtonProps {
  content: string;
  onClickFn?: () => void;
  type?: ButtonType;
}

const Button: React.FC<ButtonProps> = ({
  content,
  onClickFn,
  type = "button",
}) => {
  const handleClick = () => {
    if (onClickFn) {
      onClickFn();
    }
  };

  return (
    <button type={type} onClick={handleClick} className="btn">
      {content}
    </button>
  );
};

export default Button;
