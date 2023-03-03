import { useRoutes } from "react-router-dom";
import CreateItem from "../Pages/Item/CreateItem";
import CreateItemCategories from "../Pages/ItemCategories/CreateItemCategories";
import ItemCatgoriesList from "../Pages/ItemCategories/ItemCategoriesList";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import POSPage from "../Pages/POS/POS";

export const PageRoutes = () => {
  let routes = useRoutes([
    { path: "/dashboard", element: <POSPage /> },
    { path: "*", element: <PageNotFound /> },

    { path: "/pos", element: <POSPage /> },

    // Menu Categories
    { path: "/itemCategory", element: <ItemCatgoriesList /> },
    { path: "/itemCategory/create", element: <CreateItemCategories /> },

    { path: "/item/create", element: <CreateItem /> },
  ]);

  return routes;
};
