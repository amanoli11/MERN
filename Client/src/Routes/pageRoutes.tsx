import { useRoutes } from "react-router-dom";
import CreateMenuCategories from "../Pages/MenuCategories/CreateMenuCategories";
import MenuCatgoriesList from "../Pages/MenuCategories/MenuCategoriesList";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import POSPage from "../Pages/POS/POS";

export const PageRoutes = () => {
  let routes = useRoutes([
    { path: "/dashboard", element: <POSPage /> },
    { path: "*", element: <PageNotFound /> },

    { path: "/pos", element: <POSPage /> },

    // Menu Categories
    { path: "/menuCategory", element: <MenuCatgoriesList /> },
    { path: "/menuCategory/create", element: <CreateMenuCategories /> },
  ]);

  return routes;
};
