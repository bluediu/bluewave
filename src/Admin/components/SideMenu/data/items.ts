/* Constants */
import { USERS, CATEGORIES, PRODUCTS, TABLES, ADMIN } from "../../../constants";

interface ISidebarItem {
  name: string;
  icon: string;
  path: string;
}

export const sidebarItems: ISidebarItem[] = [
  {
    name: "Dashboard",
    icon: "home",
    path: ADMIN,
  },
  {
    name: "Tables",
    icon: "table",
    path: TABLES,
  },
  {
    name: "Categories",
    icon: "folder",
    path: CATEGORIES,
  },
  {
    name: "Products",
    icon: "box",
    path: PRODUCTS,
  },
  {
    name: "Users",
    icon: "users",
    path: USERS,
  },
  {
    name: "Orders",
    icon: "clipboard list",
    path: "#",
  },
];
