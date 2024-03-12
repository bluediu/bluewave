/* Libs components */
import { Icon } from "semantic-ui-react";

export const IsActiveCell = ({ isActive }: { isActive: boolean }) => {
  return (
    <>
      {isActive ? (
        <div className="active-color">
          <Icon name="check" />
          Yes
        </div>
      ) : (
        <div className="inactive-color">
          <Icon name="close" /> No
        </div>
      )}
    </>
  );
};
