import { useEffect } from "react";

/* Libs */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

/* Components */
import {
  Button,
  Card,
  CardContent,
  Icon,
  Label,
  Popup,
  SemanticCOLORS,
} from "semantic-ui-react";
import {
  CardRoundedImg,
  CardCategoryInfo,
  QuantitySelector,
  CardInfoHeader,
} from "../../../../../../shared";

/* Hooks */
import { useOrderUpdate } from "../../../../../hooks";
import { useDeviceType, useQtySelector } from "../../../../../../hooks";

/* Interfaces */
import { IProductOrder } from "../../../../../interfaces";

/* Types */
import { EStatus } from "../../../../../types";

/* Constants */
import { PRODUCT_DETAIL as ADETAIL } from "../../../../../constants";
import { PRODUCT_DETAIL as CDETAIL } from "../../../../../../Client/constants";

// Load the relativeTime plugin
dayjs.extend(relativeTime);

const statusesColors: Record<string, SemanticCOLORS> = {
  pending: "blue",
  delivered: "orange",
  canceled: "red",
};

interface IProps {
  item: IProductOrder;
  tableCode: string;
  renderForAdmin: boolean;
}

export const OrderCard = ({ item, tableCode, renderForAdmin }: IProps) => {
  const isTabletOrMobile = useDeviceType();

  const { quantity, reset, handleQty } = useQtySelector({
    initialQty: item.quantity,
    maxQty: item.max_qty,
    minQty: item.min_qty,
  });

  const mutation = useOrderUpdate({
    orderCode: item.code,
    toRefetchTable: tableCode,
  });

  useEffect(() => {
    if (mutation.isError) reset();
  }, [item.quantity, mutation.isError, reset]);

  const handleDelivered = () => mutation.mutate({ status: EStatus.DELIVERED });

  const handleCancel = () => mutation.mutate({ status: EStatus.CANCELED });

  const handleOrderQty = (value: number): void => {
    const newValue = handleQty(value);
    // Change the quantity
    mutation.mutate({ quantity: newValue });
  };

  const isPending = mutation.isPending || item.status_label === "Canceled";

  return (
    <Card
      fluid
      color={statusesColors[item.status_label.toLowerCase()]}
      className="table-detail-card"
    >
      <Card.Content>
        {/* Image */}
        <CardRoundedImg image={item.product_image} />

        {/* Statuses */}
        <Card.Meta className="w-100 d-flex justify-content-between">
          <Popup
            key={item.code}
            content={"Unique order code."}
            trigger={<span className="primary-color">#{item.code}</span>}
          />
          <span className="text-end">
            <Label
              as="a"
              color={statusesColors[item.status_label.toLowerCase()]}
              ribbon="right"
            >
              {item.status_label}
            </Label>
          </span>
        </Card.Meta>

        {/* Product Info */}
        <CardInfoHeader
          targetId={item.product_id}
          toUrl={renderForAdmin ? ADETAIL : CDETAIL}
          name={item.product_name}
          price={item.product_price}
        />
        <CardCategoryInfo category={item.product_category} />

        {/* Order date */}
        <Card.Meta className="mt-4">
          <Popup
            key={item.created_at.toString()}
            content={dayjs(item.created_at).format("MM/DD/YYYY, hh:mm A")}
            trigger={
              <Label circular color="brown">
                <Icon name="time" className="mr-2" />
                {dayjs(item.created_at).fromNow()}
              </Label>
            }
          />

          {!renderForAdmin && (
            <Label circular color="grey">
              Quantity: {item.quantity}
            </Label>
          )}
        </Card.Meta>

        {/* Quantity handling */}
        {renderForAdmin && (
          <QuantitySelector
            targetId={item.code}
            maxQty={item.max_qty}
            minQty={item.min_qty}
            quantity={quantity}
            handleQty={handleOrderQty}
            disabled={isPending}
          />
        )}
      </Card.Content>

      {/* Actions */}
      {renderForAdmin && item.status_label === "Pending" && (
        <CardContent extra>
          <div className="text-end">
            <Button.Group fluid={isTabletOrMobile}>
              <Button
                color="blue"
                type="button"
                disabled={mutation.isPending}
                onClick={handleDelivered}
              >
                Mark as delivered
              </Button>
              <Button.Or />
              <Button
                color="red"
                onClick={handleCancel}
                disabled={mutation.isPending}
              >
                Cancel order
              </Button>
            </Button.Group>
          </div>
        </CardContent>
      )}
    </Card>
  );
};
