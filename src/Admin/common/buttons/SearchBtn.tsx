/* Libs components */
import { Button } from "semantic-ui-react";

/* Interfaces */
import { IButtonProps } from "@/Admin/interfaces";

export const SearchBtn = ({ isLoading, onClick }: IButtonProps) => {
  return (
    <div className="text-end my-3">
      <Button size="small" color="blue" onClick={onClick} loading={isLoading}>
        New search
      </Button>
    </div>
  );
};
