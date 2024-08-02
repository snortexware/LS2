import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, RouteProvider } from "react-router-dom";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import OrderTable from "./components/OrderTable";
import OrderList from "./components/OrderList";
import Header from "./components/Header";
import OrderTable2 from "./components/OrderTable2";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/inicio",
        element: <OrderTable />,
      },
      {
        path: "/instalacao",
        element: <OrderTable2 />,
      },
      {
        path: "/manutencao",
        element: <OrderTable />,
      },
      {
        path: "/alteracao_plano",
        element: <OrderTable />,
      },
      {
        path: "/ordertable1",
        element: <OrderTable />,
      },
      {
        path: "/ordertable1",
        element: <OrderTable />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
