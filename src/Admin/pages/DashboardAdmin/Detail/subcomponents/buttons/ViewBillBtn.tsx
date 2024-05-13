/* Components */
import { Button } from "semantic-ui-react";

interface IProps {
  onClick: () => void;
  disabled: boolean;
}

export const ViewBillBtn = ({ onClick, disabled }: IProps) => {
  return (
    <div className="text-end my-3">
      <Button size="small" color="violet" onClick={onClick} disabled={disabled}>
        View the bill
      </Button>
    </div>
  );
};
