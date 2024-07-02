/* Components */
import { Button, Card, Popup } from "semantic-ui-react";

/* Hooks */
import { useParams } from "react-router-dom";
import { useProductInCart } from "../../Client/hooks";

interface IProps {
  targetId: number | string;
  quantity: number;
  maxQty: number;
  minQty: number;
  disabled: boolean;
  handleQty: (value: number) => void;
}

export const QuantitySelector = (props: IProps) => {
  const { id = "0" } = useParams();
  const { isProductInCart } = useProductInCart({ productIdExists: +id });

  const { targetId, quantity, maxQty, minQty, disabled, handleQty } = props;

  return (
    <Card.Meta className="mt-4">
      <span>Quantity: </span>
      <Popup
        key={targetId}
        content={`Max. allowed ${maxQty}`}
        trigger={
          <Button
            circular
            size="mini"
            icon="plus"
            basic
            className="mr-1"
            onClick={() => handleQty(1)}
            disabled={
              disabled ? disabled : isProductInCart || quantity === maxQty
            }
          />
        }
      />
      <span className="fw-bold mx-1">{quantity}</span>
      <Button
        circular
        size="mini"
        icon="minus"
        basic
        className="ml-1"
        onClick={() => handleQty(-1)}
        disabled={disabled ? disabled : isProductInCart || quantity === minQty}
      />
    </Card.Meta>
  );
};
