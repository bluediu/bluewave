import { UseQueryResult } from "@tanstack/react-query";

/* Components */
import { Placeholder, Statistic } from "semantic-ui-react";

/* Interfaces */
import { IOrderState } from "../../../../interfaces";

/* Utils */
import { convertCentToDolar } from "../../../../../utils";

interface IProps {
  orderState: UseQueryResult<IOrderState, Error>;
}

export const DetailState = ({ orderState }: IProps) => {
  const isLoading = orderState.isPending;

  return (
    <div className="text-center">
      <Statistic size="tiny" color="blue">
        {isLoading ? (
          <PlaceHolder />
        ) : (
          <>
            <Statistic.Value>{orderState.data?.count_pending}</Statistic.Value>
            <Statistic.Label>PENDING</Statistic.Label>
          </>
        )}
      </Statistic>
      <Statistic size="small">
        {isLoading ? (
          <PlaceHolder />
        ) : (
          <>
            <Statistic.Value>
              ${convertCentToDolar(orderState.data!.total_price)}
            </Statistic.Value>
            <Statistic.Label>TOTAL</Statistic.Label>
          </>
        )}
      </Statistic>
      <Statistic size="tiny" color="orange">
        {isLoading ? (
          <PlaceHolder />
        ) : (
          <>
            <Statistic.Value>
              {orderState.data?.count_delivered}
            </Statistic.Value>
            <Statistic.Label>DELIVERED</Statistic.Label>
          </>
        )}
      </Statistic>
    </div>
  );
};

const PlaceHolder = () => {
  const placeholderSize = { width: "10.5rem", height: "4rem" };

  return (
    <div style={placeholderSize}>
      <Placeholder>
        <Placeholder.Header>
          <Placeholder.Line length="full" className="text-center" />
          <Placeholder.Line length="full" />
        </Placeholder.Header>
      </Placeholder>
    </div>
  );
};
