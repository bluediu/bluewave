/* Components */
import { Button, Icon } from "semantic-ui-react";

/* Module: Interface */
import { TChoice } from "../../../../Admin/interfaces";

/* Module: Hooks */
import { usePaymentRegister } from "../../../../Admin/hooks";

interface IProps {
  choices: TChoice[];
  code: string;
  onClose: () => void;
}

export const PaymentChoice = ({ choices, code, onClose }: IProps) => {
  // Mutation
  const mutation = usePaymentRegister(code);
  const { isPending, isError, isSuccess } = mutation;

  if (isSuccess || isError) onClose();

  return (
    <div className="text-center">
      <Button.Group fluid>
        <Button
          color="twitter"
          onClick={() =>
            mutation.mutate({
              table: code,
              type: choices[1].value.toUpperCase(),
            })
          }
          loading={isPending}
        >
          <Icon name="credit card" />
          {choices[1].text}
        </Button>
        <Button
          color="teal"
          onClick={() =>
            mutation.mutate({
              table: code,
              type: choices[2].value.toUpperCase(),
            })
          }
          loading={isPending}
        >
          <Icon name="money bill alternate" />
          {choices[2].text}
        </Button>
      </Button.Group>
    </div>
  );
};
