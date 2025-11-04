import { createBrowserRouter, RouterProvider } from "react-router";
import { MainRoutes } from "./MainRoutes";
<<<<<<< HEAD
import NotfoundPage from "../pages/NotFoundPage";
=======
import NotFoundPage from "../pages/NotFoundPage";
>>>>>>> e5630f279c3d9fdcd346102dc3affe1c714e1d2e
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