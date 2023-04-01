import { lazy } from "react";
import { useRoutes } from "react-router-dom";
import { ROLE } from "../enums/Roles";
import Permission from "../Helper/Permission";
const CreateItemCategories = lazy(
  () => import("./ItemCategories/CreateItemCategories")
);
const EditItemCategory = lazy(
  () => import("./ItemCategories/EditItemCategory")
);
const ItemCategoriesDetails = lazy(
  () => import("./ItemCategories/ItemCategoriesDetails")
);
const ItemCatgoriesList = lazy(
  () => import("./ItemCategories/ItemCategoriesList")
);
const PageNotFound = lazy(() => import("./PageNotFound/PageNotFound"));
const POSPage = lazy(() => import("./POS/POS"));
const CreateUOM = lazy(() => import("./UOM/CreateUOM"));
const UomDetails = lazy(() => import("./UOM/UomDetails"));
const UOMList = lazy(() => import("./UOM/UOMList"));
const CreateItem = lazy(() => import("./Item/CreateItem"));

export const PageRoutes = () => {
  let routes = useRoutes([
    { path: "/dashboard", element: <POSPage /> },
    { path: "/pagenotfound", element: <PageNotFound /> },
    { path: "*", element: <PageNotFound /> },

    { path: "/pos", element: <POSPage /> },

    // Menu Categories
    {
      path: "/itemCategory",
      element: (
        <Permission
          roles={[ROLE.SalesPerson, ROLE.SalesManager]}
          children={<ItemCatgoriesList />}
        />
      ),
    },
    { path: "/itemCategory/create", element: <CreateItemCategories /> },
    { path: "/itemCategory/details/:id", element: <ItemCategoriesDetails /> },
    { path: "/itemCategory/edit/:id", element: <EditItemCategory /> },

    { path: "/uom", element: <UOMList /> },
    { path: "/uom/create", element: <CreateUOM /> },
    { path: "/uom/details/:id", element: <UomDetails /> },

    { path: "/item/create", element: <CreateItem /> },
  ]);

  return routes;
};
