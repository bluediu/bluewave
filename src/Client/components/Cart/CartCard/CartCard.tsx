/* Components */
import { Card } from "semantic-ui-react";
import {
  CardRoundedImg,
  CardCategoryInfo,
  CardInfoHeader,
  QuantitySelector,
} from "../../../../shared";

/* Hooks */
import { useQtySelector } from "../../../../hooks";

/* Interfaces */
import { ICartProduct } from "../../../interfaces";

/* Constants */
import { PRODUCT_DETAIL } from "../../../constants";

interface IProps {
  product: ICartProduct;
  toRemove: (productId: number) => void;
  toUpdate: (productId: number, newQty: number) => void;
}

export const CartCard = ({ product, toRemove, toUpdate }: IProps) => {
  const { quantity, handleQty } = useQtySelector({
    initialQty: product.productQty,
    maxQty: product.max_qty,
    minQty: product.min_qty,
  });

  const handleLSQty = (value: number) => {
    const newValue = handleQty(value);
    toUpdate(product.id, newValue);
  };

  return (
    <div>
      <Card fluid className="product-in-cart my-2">
        <Card.Content>
          {/* Image */}
          <CardRoundedImg image={product.image} />

          {/* Product Info */}
          <CardInfoHeader
            targetId={product.id}
            toUrl={PRODUCT_DETAIL}
            name={product.name}
            price={product.price}
          />
          <CardCategoryInfo category={product.category_name} />

          {/* Quantity handling */}
          <QuantitySelector
            targetId={product.id}
            quantity={quantity}
            maxQty={product.max_qty}
            minQty={product.min_qty}
            handleQty={handleLSQty}
            disabled={false}
          />

          {/* Actions */}
          <Card.Content extra>
            <div className="text-end mt-3">
              <span
                className="cart-remove-btn"
                onClick={() => toRemove(product.id)}
              >
                Remove
              </span>
            </div>
          </Card.Content>
        </Card.Content>
      </Card>
    </div>
  );
};
