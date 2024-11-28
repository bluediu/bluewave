/* Components */
import { Card, Icon, Label } from "semantic-ui-react";

import { CardRoundedImg } from "@/shared";

/* Hooks */
import { useDeviceType } from "@/hooks";

/* Interfaces */
import { IOrderPayment } from "@/Admin/interfaces";

/* Utils */
import { fn } from "@/utils";

export const HistoryProductCard = ({ product }: { product: IOrderPayment }) => {
  const isTabletOrMobile = useDeviceType();

  return (
    <Card fluid className="my-2">
      <Card.Content>
        {/* Image */}
        <article>
          <CardRoundedImg image={product.product_image} small={true} />
        </article>
        {/* Content */}
        <Card.Header className="mt-3 mb-4">
          <span>{product.product_name}</span>
        </Card.Header>
        <Card.Meta>
          <Label size="tiny" color="grey">
            Price: <Icon name="dollar" />
            {fn.convertCentToDolar(product.product_price)} USD
          </Label>
          <Label color="blue" size="tiny">
            <Icon name="folder" />
            <span>Category: {product.product_category}</span>
          </Label>
          <Label className={`${isTabletOrMobile ? "mt-3" : ""}`} size="tiny">
            <Icon name="food" />
            <span>Ordered: {product.quantity}</span>
          </Label>
        </Card.Meta>
      </Card.Content>
    </Card>
  );
};
