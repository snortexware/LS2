import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TableManutencao from "./components/Tabelas/agendamento tabelas/TableManutencao";
import TableInstalacao from "./components/Tabelas/agendamento tabelas/TableInstalacao";
import Inicio from "./components/charts/inicio";
import TableBoletos from "./components/Tabelas/processos tabelas/TableBoletos";
import TableCancelamento from "./components/Tabelas/processos tabelas/TableCancelamento";
import TablePlano from "./components/Tabelas/processos tabelas/TablePlano";
import TableTitular from "./components/Tabelas/processos tabelas/TableTitular";
import JoySignInSideTemplate from "./components/login-profile/sign-in";
import JoyOrderDashboardTemplate from "./components/login-profile/profile/MyProfile"
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
        path: "/mudartitular",
        element: <TableTitular />,
      },
      {
        path: "/config",
        element: <JoyOrderDashboardTemplate />
      }
    ],
  },
  // Sign-in route defined at the same level as the root path
  {
    path: "/entrar",
    element: <JoySignInSideTemplate />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
