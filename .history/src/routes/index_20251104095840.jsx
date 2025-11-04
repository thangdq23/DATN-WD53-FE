import { createBrowserRouter, RouterProvider } from "react-router";
import { MainRoutes } from "./mainRoutes";
import NotfoundPage from "../pages/NotfoundPage";
import { AdminRoutes } from "./AdminRoutes";
import { App } from "antd";

const routes = createBrowserRouter([
  ...MainRoutes,
  ...AdminRoutes,
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
export const AppRoutes = () => {
  return (
    <App>
      <RouterProvider router={routes} />
    </App>
  );
};