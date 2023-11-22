import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home } from "./components/home.jsx";

const router = createBrowserRouter([
  { path: "/", element: <App />, errorElement: <h1>error</h1> },
  {
    path: "/products",
    element: (
      <>
        <Home />
      </>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
