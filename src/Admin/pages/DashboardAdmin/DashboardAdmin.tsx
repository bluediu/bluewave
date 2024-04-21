/* Component */
import { ListTables, TableLegends } from "../../components/Dashboard";
import { TableTitle } from "../../common";

/* Hooks */
import { useDynamicPageTitle } from "../../../hooks";

export const DashboardAdmin = () => {
  useDynamicPageTitle("Dashboard | Tables");

  return (
    <main>
      <TableTitle text="Dashboard" />
      <TableLegends />
      <ListTables />
    </main>
  );
};
