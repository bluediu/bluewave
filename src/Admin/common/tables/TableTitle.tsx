import { IStylesProps } from "../../../interfaces";

interface IProps extends IStylesProps {
  text: string;
}

export const TableTitle = ({ text, className, style }: IProps) => {
  return (
    <h2
      style={style}
      className={`${"fw-bold text-primary-emphasis"} ${className ?? ""}`}
    >
      {text}
    </h2>
  );
};
