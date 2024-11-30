/* Components */
import { Card } from "semantic-ui-react";
import { Fade } from "react-awesome-reveal";

export const PaymentDone = () => {
  return (
    <Fade>
      <Card fluid color="black" className="mb-5 ">
        <Card.Content header="Notification" />
        <Card.Content
          description={
            "Your bill has been generated. Please proceed to the " +
            "cash register to pay for your orders. "
          }
        />
      </Card>
    </Fade>
  );
};
