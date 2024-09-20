import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import HomePage from "./components/home/home.tsx";
import MovieDetails from "./components/movie-details/movie-details.tsx";
import PageNotFound from "./components/page-not-found/page-not-found.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import LoginPage from "./pages/login/login.tsx";
import SignUpPage from "./pages/signup/signup.tsx";
import PrivateGuard from "./guards/private-guard.tsx";
import PublicGuard from "./guards/public-guard.tsx";
import App from "./App.tsx";
import { Button } from "@mui/material";

export const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <h1>Welcome to Movie App</h1>
      <p>Explore the world of movies and series!</p>
      <br />
      <Button variant="contained" component={Link} to="/auth/login">
        Get Started...
      </Button>
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <WelcomePage />,
  },
  {
    path: "/auth",
    element: (
      <PublicGuard>
        <App />
      </PublicGuard>
    ),
    children: [
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateGuard>
        <App />
      </PrivateGuard>
    ),
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
  {
    path: ":type/:imdbID",
    element: <MovieDetails />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
