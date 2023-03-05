import { useRoutes } from "react-router-dom";
import CreateItem from "../Pages/Item/CreateItem";
import CreateItemCategories from "../Pages/ItemCategories/CreateItemCategories";
import EditItemCategory from "../Pages/ItemCategories/EditItemCategory";
import ItemCategoriesDetails from "../Pages/ItemCategories/ItemCategoriesDetails";
import ItemCatgoriesList from "../Pages/ItemCategories/ItemCategoriesList";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import POSPage from "../Pages/POS/POS";
import CreateUOM from "../Pages/UOM/CreateUOM";
import UOMList from "../Pages/UOM/UOMList";

export const PageRoutes = () => {
  let routes = useRoutes([
    { path: "/dashboard", element: <POSPage /> },
    { path: "*", element: <PageNotFound /> },

    { path: "/pos", element: <POSPage /> },

    // Menu Categories
    { path: "/itemCategory", element: <ItemCatgoriesList /> },
    { path: "/itemCategory/create", element: <CreateItemCategories /> },
    { path: "/itemCategory/details/:id", element: <ItemCategoriesDetails /> },
    { path: "/itemCategory/edit/:id", element: <EditItemCategory /> },

    { path: "/uom", element: <UOMList /> },
    { path: "/uom/create", element: <CreateUOM /> },

    { path: "/item/create", element: <CreateItem /> },
  ]);

  return routes;
};
