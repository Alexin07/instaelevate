import React from "react";
import Card from "./Card";
import Dashboard from "./Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {

  const router = createBrowserRouter(
    [
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/",
        element: <Card />
      }
    ]
  )

  return (
    <RouterProvider router={router} />
  );
};

export default App;
