/* Component */
import { TableTitle } from "@/Admin/common";
import { ListTables, TableLegends } from "@/Admin/components/Dashboard";

/* Hooks */
import { useDynamicPageTitle } from "@/hooks";

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
