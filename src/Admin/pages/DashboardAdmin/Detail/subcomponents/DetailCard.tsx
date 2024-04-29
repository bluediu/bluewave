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

/* Interfaces */
import { IProductOrder } from "../../../../interfaces";

/* Utils */
import { convertCentToDolar } from "../../../../utils/functions";

import "./DetailCard.scss";

// Load the relativeTime plugin
dayjs.extend(relativeTime);

const statusesColors: Record<string, SemanticCOLORS> = {
  pending: "blue",
  delivered: "orange",
  canceled: "red",
};

export const DetailCard = ({ item }: { item: IProductOrder }) => {
  const isTabletOrMobile = useDeviceType();

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
          <Button circular size="mini" icon="plus" className="m-0" basic />
          <span className="fw-bold mx-1">{item.quantity}</span>
          <Button circular size="mini" icon="minus" basic />
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
                // disabled={isLoading}
                // onClick={onCloseModal}
              >
                Mark as delivered
              </Button>
              <Button.Or />
              <Button
                color="red"
                // disabled={isLoading}
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
