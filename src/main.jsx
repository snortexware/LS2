import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Breadcrumbs from "@mui/joy/Breadcrumbs";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";
import DownloadRoundedIcon from "@mui/icons-material/DownloadRounded";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import OrderTable from "./components/Tabelas/agendamento tabelas/TableManutencao";
import Header from "./components/Header";
import About from "./components/test";
import { useNavigate } from "react-router-dom";
import { InitColorSchemeScript } from "@mui/joy/styles";
import minecraft from "./mine.png";
import Meme from "./algo"
import SecretSoundPlayer from "./algo";

export default function App() {
  
  return (
    <CssVarsProvider disableTransitionOnChange>
      <CssBaseline />
      <Box
        sx={{
          display: "flex",
          minHeight: "100dvh",
        }}
      >
        <Header />

        <Sidebar style={{ cursor: "url(" + minecraft + ", auto)" }} />
        <Box
          component="main"
          className="MainContent"
          sx={{
            px: { xs: 2, md: 6 },
            pt: {
              xs: "calc(12px + var(--Header-height))",
              sm: "calc(12px + var(--Header-height))",
              md: 3,
            },
            pb: { xs: 2, sm: 2, md: 3 },
            flex: 1,
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
            height: "100dvh",
            gap: 1,
          }}
        >
          <Box
            sx={{
              marginBottom: 0,
              display: "flex",
              mb: 1,
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "start", sm: "center" },
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            
            
          </Box>
            <SecretSoundPlayer />
          
          <Outlet />
        </Box>
      </Box>
    </CssVarsProvider>
  );
}
