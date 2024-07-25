/* Libs components */
import { Button } from "semantic-ui-react";

interface IProps {
  isLoading: boolean;
  onClick: () => void;
}

export const SearchBtn = ({ isLoading, onClick }: IProps) => {
  return (
    <div className="text-end my-3">
      <Button size="small" color="blue" onClick={onClick} loading={isLoading}>
        New search
      </Button>
    </div>
  );
};
