
import { CssVarsProvider } from "@mui/joy/styles";
import CssBaseline from "@mui/joy/CssBaseline";
import Box from "@mui/joy/Box";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar-others/Sidebar";
import Header from "./components/sidebar-others/Header";
import SecretSoundPlayer from "./components/sidebar-others/algo";

const App = () => {
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

      <Sidebar  />
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
  
};

export default App;
