/* Components */
import { Button } from "semantic-ui-react";

interface IProps {
  isActive: boolean;
  onClick: () => void;
}

export const RequestBillButton = ({ isActive, onClick }: IProps) => {
  return (
    <div className="d-flex justify-content-end">
      <Button
        size="small"
        className="my-3 request-bill"
        circular
        disabled={isActive}
        onClick={onClick}
      >
        Request the bill
      </Button>
    </div>
  );
};
