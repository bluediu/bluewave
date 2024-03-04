/* Libs components */
import { Button } from "semantic-ui-react";

interface IProps {
  isLoading: boolean;
  onClick: () => void;
}

export const CreateBtn = ({ isLoading, onClick }: IProps) => {
  return (
    <div className="text-end my-3">
      <Button size="small" color="teal" onClick={onClick} loading={isLoading}>
        Create
      </Button>
    </div>
  );
};
