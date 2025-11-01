import MainLayout from "../common/layouts/MainLayout";
import HomePage from "../pages/client/home/HomePage";
import MovieDetailPage from "../pages/client/home/MovieDetailPage";
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
        path: "movie/:id", // 👈 route chi tiết phim
        element: <MovieDetailPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
];
