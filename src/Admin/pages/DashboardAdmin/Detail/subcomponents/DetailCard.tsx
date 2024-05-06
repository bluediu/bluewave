import { useEffect, useState } from "react";

/* Libs */
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

import {
  Button,
  Card,
  CardContent,
  Icon,
  Image,
  Label,
  Popup,
  SemanticCOLORS,
} from "semantic-ui-react";

/* Hooks */
import { useDeviceType } from "../../../../../hooks";
import { useOrderUpdate } from "../../../../hooks";

/* Interfaces */
import { IProductOrder } from "../../../../interfaces";

/* Utils */
import { convertCentToDolar } from "../../../../utils/functions";

/* Types */
import { EStatus } from "../../../../types";

import "./DetailCard.scss";

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
}

export const DetailCard = ({ item, tableCode }: IProps) => {
  const isTabletOrMobile = useDeviceType();

  const [quantity, setQuantity] = useState(item.quantity);

  const mutation = useOrderUpdate({
    orderCode: item.code,
    toRefetchTable: tableCode,
  });

  useEffect(() => {
    if (mutation.isError) setQuantity(item.quantity);
  }, [item.quantity, mutation.isError]);

  const handleDelivered = () => mutation.mutate({ status: EStatus.DELIVERED });

  const handleCancel = () => mutation.mutate({ status: EStatus.CANCELED });

  const handleQty = (value: number): void => {
    const newValue = Math.min(
      Math.max(quantity + value, item.min_qty),
      item.max_qty,
    );
    // Change the quantity
    mutation.mutate({ quantity: newValue });

    setQuantity(newValue);
  };

  const isPending = mutation.isPending || item.status_label === "Canceled";

  return (
    <Card
      fluid
      color={statusesColors[item.status_label.toLowerCase()]}
      className="table-detail-card"
    >
      <Card.Content>
        <Image
          className="fit-image-size"
          floated="left"
          bordered
          circular
          size="small"
          src={`${import.meta.env.VITE_API_URL}/${item?.product_image}`}
        />

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

        <Card.Header className="mt-3 mb-4">
          {item.product_name}
          <Label as="a" className="ml-5" tag size="tiny">
            <Icon name="dollar" />
            {convertCentToDolar(item.product_price)} USD
          </Label>
        </Card.Header>

        <Card.Meta>
          <Label horizontal>Category: {item.product_category}</Label>
        </Card.Meta>

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
        </Card.Meta>
        {/* className="mt-4 text-center" */}
        <Card.Meta className={`mt-4 ${isTabletOrMobile && "text-center"}`}>
          <span>Quantity: </span>
          <Button
            circular
            size="mini"
            icon="plus"
            className="m-0"
            basic
            onClick={() => handleQty(1)}
            disabled={isPending || quantity === item.max_qty}
          />
          <span className="fw-bold mx-1">{quantity}</span>
          <Button
            circular
            size="mini"
            icon="minus"
            basic
            onClick={() => handleQty(-1)}
            disabled={isPending || quantity === item.min_qty}
          />
          <small>(Max. allowed {item.max_qty})</small>
        </Card.Meta>
      </Card.Content>

      {item.status_label === "Pending" && (
        <CardContent extra>
          <div className="text-end">
            {/* fluid */}
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
                // type="submit"
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
