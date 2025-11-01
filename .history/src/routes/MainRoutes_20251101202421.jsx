import MainLayout from "../common/layouts/MainLayout";
import HomePage from "../pages/client/home/HomePage";
import ShowtimePage from "../pages/client/home/ShowtimePage"; // 👈 thay trang mới
import NotFoundPage from "../pages/NotFoundPage";

export const MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true, // "/" → HomePage
        element: <HomePage />,
      },
      {
        path: "showtime/:id",
        element: <ShowtimePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
