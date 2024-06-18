/* Hooks */
import { useParams } from "react-router-dom";
import { useTable } from "../../hooks";

/* Components */
import { Detail } from "../../common";

/* Constants */
import { TABLES } from "../../constants";

export const TableDetail = () => {
  const { id = "0" } = useParams();
  const { table } = useTable(+id);

  const fields = [
    { label: "Code", value: "code" },
    { label: "Active", value: "is_active" },
  ];

  return (
    <Detail
      data={table}
      title="Table detail"
      fields={fields}
      goBackUrl={TABLES}
    />
  );
};
