import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Impresion } from "./router/3d.jsx";
import { Gym } from "./router/gym.jsx";
import { Order } from "./components/pedido.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <h1>error</h1> },
  {
    path: "/3d",
    element: (
      <>
        <Impresion />
      </>
    ),
  },
  {
    path: "/gym",
    element: (
      <>
        <Gym />
      </>
    ),
  },
  {
    path: "/order",
    element: (
      <div>
        <Order />
      </div>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
