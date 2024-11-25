import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Statistics from "./components/Statistics/Statistics.jsx";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import ProductDetails from "./components/ProductDetails/ProductDetails.jsx";
import Login from "./Login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/gadgetsData.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
      },
      {
        path: "/product-details/:productId",
        element: <ProductDetails />,
        loader: () => fetch("/gadgetsData.json"),
      },
      {
        path: "/dashboard/:currentTab",
        element: <Dashboard />,
        loader: () => fetch("/gadgetsData.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
