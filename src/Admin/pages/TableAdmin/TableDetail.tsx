/* Hooks */
import { useParams } from "react-router-dom";

import { useTable } from "@/Admin/hooks";

/* Components */
import { Detail } from "@/Admin/common";

/* Constants */
import { TABLES } from "@/Admin/constants";

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
