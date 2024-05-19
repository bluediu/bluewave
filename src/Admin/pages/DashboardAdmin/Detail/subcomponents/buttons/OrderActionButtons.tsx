/* Components */
import { Button } from "semantic-ui-react";
import { CreateBtn } from "../../../../../common";

interface IProps {
  disabled: boolean;
  canGenerateBill: boolean;
  onRegister: () => void;
  onGenerateBill: () => void;
}

export const OrderActionButtons = (props: IProps) => {
  const { disabled, canGenerateBill, onRegister, onGenerateBill } = props;

  return (
    <div className="text-end d-flex justify-content-end align-items-start">
      <CreateBtn onClick={onRegister} isLoading={disabled} />
      <Button
        size="small"
        color="yellow"
        className="my-3"
        disabled={disabled || !canGenerateBill}
        onClick={onGenerateBill}
      >
        Generate bill
      </Button>
    </div>
  );
};
