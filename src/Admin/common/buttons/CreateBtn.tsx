/* Libs components */
import { Button } from "semantic-ui-react";

/* Interfaces */
import { IButtonProps } from "@/Admin/interfaces";

export const CreateBtn = ({ isLoading, onClick }: IButtonProps) => {
  return (
    <div className="text-end my-3">
      <Button size="small" color="teal" onClick={onClick} loading={isLoading}>
        Create
      </Button>
    </div>
  );
};
