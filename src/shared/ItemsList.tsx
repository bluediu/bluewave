import { ReactElement } from "react";

/* Components */
import { Loader } from "semantic-ui-react";

interface ItemListProps {
  isLoading: boolean;
  loadingMsg: string;
  children: ReactElement | ReactElement[];
}

export const ItemList = (props: ItemListProps) => {
  const { isLoading, loadingMsg, children } = props;

  return (
    <>
      {isLoading && (
        <Loader
          content={loadingMsg}
          active
          inline="centered"
          className="mt-5"
        />
      )}

      {children}
    </>
  );
};
