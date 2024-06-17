import { ReactElement } from "react";

/* Components */
import { Card, Image } from "semantic-ui-react";

import "./CardLayout.scss";

interface IProps {
  image: string;
  children: ReactElement | ReactElement[];
  onClick?: () => void;
}

export const CardLayout = ({ image, children, onClick }: IProps) => {
  return (
    <Card className="card-layout">
      <Image
        className="card-layout__fit-image"
        src={`${import.meta.env.VITE_API_URL}/${image}`}
        wrapped
        ui={false}
        onClick={onClick}
      />
      {children}
    </Card>
  );
};
