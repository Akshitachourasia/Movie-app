import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/home/home.tsx";
import MovieDetails from "./components/movie-details/movie-details.tsx";
import PageNotFound from "./components/page-not-found/page-not-found.tsx";
import { Provider } from "react-redux";
import { store } from "./store/store.tsx";
import LoginPage from "./pages/login/login.tsx";
import SignUpPage from "./pages/signup/signup.tsx";
import PrivateGuard from "./guards/private-guard.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateGuard>
            <HomePage />
          </PrivateGuard>
        ),
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "signup",
        element: <SignUpPage />,
      },
      {
        path: ":type/:imdbID",
        element: <MovieDetails />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
