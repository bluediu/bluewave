import { ReactElement } from "react";

/* Libs components */
import { Loader, Table } from "semantic-ui-react";

interface IProps {
  isLoadingTable: boolean;
  count: number | undefined;
  scope: string;
  children: ReactElement | ReactElement[];
}

export const BasicTable = (props: IProps) => {
  const { isLoadingTable, count, scope, children } = props;

  return (
    <>
      {isLoadingTable ? (
        <Loader
          size="large"
          content={`Loading ${scope}`}
          active
          inline="centered"
        />
      ) : (
        <>
          <div className="text-end">
            <span className="text-secondary">{count ?? "---"} records</span>
          </div>
          <Table className="standard-table table-hover" celled>
            {children}
          </Table>
        </>
      )}
    </>
  );
};
