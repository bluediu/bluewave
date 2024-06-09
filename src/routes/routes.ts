import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";

const routes = [
  ...routesAdmin,
  ...routesClient,
  // TODO: Add 404 page and basic layout
];

export default routes;
