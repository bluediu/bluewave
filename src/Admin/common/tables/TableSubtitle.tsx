import { IStylesProps } from "@/interfaces";

interface IProps extends IStylesProps {
  text: string;
}

export const TableSubtitle = ({ text, className, style }: IProps) => {
  return (
    <h3
      style={style}
      className={`${"fw-bold mb-5 text-primary-emphasis"} ${className ?? ""}`}
    >
      {text}
    </h3>
  );
};
