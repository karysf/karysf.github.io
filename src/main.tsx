import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Welcome } from "./pages/WelcomePage/Welcome.tsx";
import { Layout } from "./components/Layout/Layout.tsx";
import { Catalog } from "./pages/Catalog/index.ts";
import { Contacts } from "./pages/Contacts/Contacts.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "/catalog",
        element: <Catalog />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
