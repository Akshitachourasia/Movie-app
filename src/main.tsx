import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/home/home.tsx";
import MovieDetails from "./components/movie-details/movie-details.tsx";
import PageNotFound from "./components/page-not-found/page-not-found.tsx";
import { Provider } from "react-redux";
import { store }from "./features/store.tsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "movie/:imdbID",
        element: <MovieDetails />,
      },
       {
    path: "*",
    element: <PageNotFound />,
  },
    ],
  },
  // {
  //   path: "*",
  //   element: <PageNotFound />,
  // },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
