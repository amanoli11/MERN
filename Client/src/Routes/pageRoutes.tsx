import { useRoutes } from "react-router-dom";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import POSPage from "../Pages/POS/POS";

export const PageRoutes = () => {
  let routes = useRoutes([
    { path: "/dashboard", element: <POSPage /> },
    { path: "/pos", element: <POSPage /> },
    { path: "/inventory", element: <POSPage /> },
    { path: "*", element: <PageNotFound /> },
  ]);

  return routes;
};
