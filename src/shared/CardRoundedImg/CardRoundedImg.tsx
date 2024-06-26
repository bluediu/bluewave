/* Components */
import { Image } from "semantic-ui-react";

export const CardRoundedImg = ({ image }: { image: string }) => {
  return (
    <Image
      className="fit-image-size"
      floated="left"
      bordered
      circular
      size="small"
      src={`${import.meta.env.VITE_API_URL}/${image}`}
    />
  );
};
