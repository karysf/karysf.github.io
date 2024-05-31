import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Welcome } from "./pages/WelcomePage/Welcome.tsx";
import { Layout } from "./components/Layout/Layout.tsx";
import { Catalog } from "./pages/Catalog/index.ts";
import { Contacts } from "./pages/Contacts/Contacts.tsx";
import { Cart } from "./pages/Cart/Cart.tsx";
import { RecoilRoot } from "recoil";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";

const router = createBrowserRouter(
  [
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
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]
  // { basename: import.meta.env.DEV ? "/" : "/pipefitting/" }\
  //
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <PrimeReactProvider>
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </RecoilRoot>
  </React.StrictMode>
);
