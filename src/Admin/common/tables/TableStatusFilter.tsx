/* Libs components */
import { Select } from "semantic-ui-react";

/* Types */
import { TFilter } from "@/Admin/types";

const filterOptions = [
  { key: "ALL", value: "all", text: "All" },
  { key: "ACTIVES", value: "actives", text: "Actives" },
  { key: "INACTIVES", value: "inactives", text: "Inactives" },
];

interface IProps {
  isLoading: boolean;
  onChange: (value: TFilter) => void;
}

export const TableStatusFilter = ({ isLoading, onChange }: IProps) => {
  return (
    <div>
      <small className="d-block text-secondary my-1 ">Filter options</small>
      <Select
        defaultValue="actives"
        options={filterOptions}
        onChange={(_, data) => onChange(data.value as TFilter)}
        loading={isLoading}
      />
    </div>
  );
};
