import { createBrowserRouter, RouterProvider } from "react-router";
import { MainRoutes } from "./MainRoutes";
import NotFoundPage from "../pages/NotFoundPage";
import { AdminRoutes } from "./AdminRoutes";

const routes = createBrowserRouter([
  ...MainRoutes,
  ...AdminRoutes,
  {
    path: "*",
    element: <NotfoundPage />,
  },
]);
export const AppRoutes = () => {
  return <RouterProvider router={routes} />;
};
