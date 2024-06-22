import { ReactElement } from "react";

/* Components */
import { Fade } from "react-awesome-reveal";
import { CardGroup } from "semantic-ui-react";

/* Hooks */
import { useDeviceType } from "../../../hooks";

interface IProps {
  children: ReactElement | ReactElement[];
}

export const CardGroupLayout = ({ children }: IProps) => {
  const isTabletOrMobile = useDeviceType();

  return (
    <Fade cascade>
      <CardGroup itemsPerRow={!isTabletOrMobile ? 4 : 1}>{children}</CardGroup>
    </Fade>
  );
};
