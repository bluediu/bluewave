/* Components */
import { Link } from "react-router-dom";
import { CardHeader, Icon, Label } from "semantic-ui-react";

/* Hooks */
import { useDeviceType } from "../../hooks";

/* Utils */
import { fn } from "../../utils";

interface IProps {
  targetId: number;
  toUrl: string;
  name: string;
  price: number;
}

export const CardInfoHeader = (props: IProps) => {
  const isTabletOrMobile = useDeviceType();

  const { targetId, toUrl, name, price } = props;

  return (
    <CardHeader className="mt-3 mb-4">
      <div className="d-flex align-items-center flex-wrap">
        <Link
          to={fn.generateUrl(toUrl, { id: targetId })}
          className="underline"
        >
          <span>{name}</span>
        </Link>
        <Label
          as="a"
          className={`${isTabletOrMobile ? "mt-3" : "ml-5"}`}
          tag
          size="tiny"
        >
          <Icon name="dollar" />
          {fn.convertCentToDolar(price)} USD
        </Label>
      </div>
    </CardHeader>
  );
};
