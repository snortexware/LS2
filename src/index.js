import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { Route, Routes, RouteProvider } from "react-router-dom";
import {
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Typography from "@mui/joy/Typography";
import Sidebar from "./components/Sidebar";
import  TableManutencao  from "./components/Tabelas/agendamento tabelas/TableManutencao";
import TableInstalacao from "./components/Tabelas/agendamento tabelas/TableInstalacao";
import Header from "./components/Header";
import SimpleChart from "./components/charts/chart";
import Inicio from "./components/charts/inicio";
import TableBoletos from "./components/Tabelas/processos tabelas/TableBoletos";
import TableCancelamento from "./components/Tabelas/processos tabelas/TableCancelamento";
import TablePlano from "./components/Tabelas/processos tabelas/TablePlano";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Inicio />,
        
      },
      {
        path: "/inicio",
        element: <Inicio />,
        
      },
      {
        path: "/instalacao",
        element: <TableInstalacao />,
        
      },
      {
        path: "/manutencao",
        element: <TableManutencao />,
      },
      {
        path: "/boletosbaixa",
        element: <TableBoletos />,
      },
      {
        path: "/cancelamento",
        element: <TableCancelamento />,
      },
      {
        path: "/mudarplano",
        element: <TablePlano />,
      },
      {
        path: "/ordertable1",
        element: <TableManutencao />,
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
