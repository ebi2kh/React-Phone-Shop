import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout";
import NotMatch from "./not-match";
import RentPage from "./rent";
import BuyPage from "./buy";
import SellPage from "./sell";
import HomePage from "./home";
import NewsPage from "./news";
import Mortgage from "./mortgage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotMatch />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "rent",
        element: <RentPage />,
      },
      {
        path: "buy",
        element: <BuyPage />,
      },
      {
        path: "sell",
        element: <SellPage />,
      },
      {
        path: "news",
        element: <NewsPage />,
      },
      {
        path: "mortgage",
        element: <Mortgage />,
      },
    ],
  },
]);
export default router;
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//     <App />
//   </React.StrictMode>
// );
