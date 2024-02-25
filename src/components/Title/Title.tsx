import "./_styles.scss";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  return <div className="title">{title}</div>;
};
export default Title;
