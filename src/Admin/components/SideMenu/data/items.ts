/* Constants */
import { USERS, CATEGORIES, PRODUCTS, TABLES } from "../../../constants/paths";

interface ISidebarItem {
  name: string;
  icon: string;
  path: string;
}

export const sidebarItems: ISidebarItem[] = [
  {
    name: "Orders",
    icon: "clipboard list",
    path: "#",
  },
  {
    name: "Tables",
    icon: "table",
    path: TABLES,
  },
  {
    name: "Users",
    icon: "users",
    path: USERS,
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
];
