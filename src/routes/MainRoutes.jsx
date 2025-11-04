import AuthLayout from "../common/layouts/AuthLayout";
import MainLayout from "../common/layouts/MainLayout";
import LoginPage from "../pages/client/auth/LoginPage";
import RegisterPage from "../pages/client/auth/RegisterPage";
import HomePage from "../pages/client/home/HomePage";
import ShowtimePage from "../pages/client/home/ShowtimePage"; // 👈 thay trang mới
import NotFoundPage from "../pages/NotFoundPage";

export const MainRoutes = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        index: true, // "/" → HomePage
        element: <HomePage />,
      },
      {
        path: "/showtime/:movieId/:showtimeId",
        element: <ShowtimePage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <RegisterPage />,
      },
      {
        path: "login",
        element : <LoginPage />
      }
    ],
  },
];