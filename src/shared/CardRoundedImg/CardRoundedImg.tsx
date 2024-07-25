/* Components */
import { Image } from "semantic-ui-react";

interface IProps {
  image: string;
  small?: boolean;
}

export const CardRoundedImg = ({ image, small = false }: IProps) => {
  return (
    <Image
      className={`${small ? " fit-image-size-sm" : "fit-image-size"}`}
      floated="left"
      bordered
      circular
      size="small"
      src={`${import.meta.env.VITE_API_URL}/${image}`}
    />
  );
};
