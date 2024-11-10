import * as React from "react";
import GlobalStyles from "@mui/joy/GlobalStyles";
import Box from "@mui/joy/Box";
import Divider from "@mui/joy/Divider";
import IconButton, { IconButtonProps } from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, { listItemButtonClasses } from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import SupportRoundedIcon from "@mui/icons-material/SupportRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link as RouterLink } from "react-router-dom";
import ColorSchemeToggle from "./ColorSchemeToggle";
import { closeSidebar } from "../../utils";
import { useState } from "react";
import { useEffect } from "react";
import { motion } from "framer-motion";
import ContentPasteGoIcon from '@mui/icons-material/ContentPasteGo';
import { useColorScheme } from "@mui/joy";
import { useNavigate } from "react-router-dom";

function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={[
          {
            display: "grid",
            transition: "0.2s ease",
            "& > *": {
              overflow: "hidden",
            },
          },
          open ? { gridTemplateRows: "1fr" } : { gridTemplateRows: "0fr" },
        ]}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export default function Sidebar() {
  const {mode } = useColorScheme();
  const [logotema, setLogoTema] = useState(0);
  const logoWH = require("../assets/logo.png");
  const logoBK = require("../assets/logo2.png");
  const [trocar, setTrocar] = useState(0);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/entrar"); // Redirect to login
  };
  useEffect(() => {
   
    setLogoTema(mode === "dark" ? 0 : 1);
  }, [mode]);

  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: "fixed", md: "sticky" },
        transform: {
          xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))",
          md: "none",
        },
        transition: "transform 0.4s, width 0.4s",
        zIndex: 10000,
        height: "100dvh",
        width: "var(--Sidebar-width)",
        top: 0,
        p: 2,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        gap: 3,
        borderRight: "1px solid",
        borderColor: "divider",
      }}
    >
      <GlobalStyles
        styles={(theme) => ({
          ":root": {
            "--Sidebar-width": "220px",
            [theme.breakpoints.up("lg")]: {
              "--Sidebar-width": "240px",
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: "fixed",
          zIndex: 9998,
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          opacity: "var(--SideNavigation-slideIn)",
          backgroundColor: "var(--joy-palette-background-backdrop)",
          transition: "opacity 0.4s",
          transform: {
            xs: "translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))",
            lg: "translateX(-100%)",
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
        <IconButton component={RouterLink} to="/"> 
        <motion.div
      
      onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        
        transition={{ duration: 0.3, ease: "easeInOut" }}
    >
            <img style={{justifyContent:"center", width: "170px"}}src={logotema === 0 ? logoWH : logoBK} alt="Logo" />
          </motion.div>
        </IconButton>
        <ColorSchemeToggle
          onClick={() => {
            setLogoTema(logotema === 0 ? 0 : 1);
            setTrocar(trocar + 1);
          }}
        />
      </Box>

      <Box
        sx={{
          minHeight: 0,
          overflow: "hidden auto",
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          [`& .${listItemButtonClasses.root}`]: {
            gap: 0,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 1,
            "--List-nestedInsetStart": "30px",
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
            <ListItemButton component={RouterLink} to="/">
              <HomeRoundedIcon sx={{ marginRight: 1 }} />
              <ListItemContent>
                <Typography level="title-sm">Inicio</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <ContentPasteGoIcon sx={{ marginRight: 1 }} />

                  <ListItemContent>
                    <Typography level="title-sm">Contratos</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={[
                      open
                        ? {
                            transform: "rotate(180deg)",
                          }
                        : {
                            transform: "none",
                          },
                    ]}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
              <ListItem>
                  <ListItemButton>Mensal</ListItemButton>
                </ListItem>

                <ListItem>
                  <ListItemButton>Semanal</ListItemButton>
                </ListItem>
                <ListItem></ListItem>
              </List>
            </Toggler>
          </ListItem>
          
          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <AssignmentRoundedIcon sx={{ marginRight: 1 }} />

                  <ListItemContent>
                    <Typography level="title-sm">Agendamento</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={[
                      open
                        ? {
                            transform: "rotate(180deg)",
                          }
                        : {
                            transform: "none",
                          },
                    ]}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton component={RouterLink} to="/instalacao">
                    Instalação
                  </ListItemButton>
                </ListItem>

                <ListItem>
                  <ListItemButton component={RouterLink} to="/manutencao" >Manutenção</ListItemButton>
                </ListItem>
                <ListItem></ListItem>
              </List>
            </Toggler>
          </ListItem>

          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  <GroupRoundedIcon sx={{ marginRight: 1 }} />
                  <ListItemContent>
                    <Typography level="title-sm">Processos</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={[
                      open
                        ? {
                            transform: "rotate(180deg)",
                          }
                        : {
                            transform: "none",
                          },
                    ]}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                   
                    role="menuitem"
                    
                     component={RouterLink} to="/boletosbaixa"
                  >
                    Boletos Baixa
                  </ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component={RouterLink} to="/cancelamento">Cancelamento</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component={RouterLink} to="/mudarplano" >Mudança de Plano</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton component={RouterLink} to="/mudartitular" >Mudança de Titular</ListItemButton>
                </ListItem>
                <ListItem>
                  <ListItemButton>Controle de OS</ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>
        </List>
        <List
          size="sm"
          sx={{
            mt: "auto",
            flexGrow: 0,
            "--ListItem-radius": (theme) => theme.vars.radius.sm,
            "--List-gap": "10px",
            mb: 2,
           
          }}
        >
          <ListItem sx={{ mt: 0.5 }}>
            <ListItemButton onClick={handleLogout}>
              <SupportRoundedIcon  sx={{ marginRight: 1 }}/>
              Suporte
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton component={RouterLink} to="/config">
              <SettingsRoundedIcon sx={{ marginRight: 1 }} />
              Configurações
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
        <Box sx={{ minWidth: 0, flex: 1 }}></Box>
      </Box>
    </Sheet>
  );
}
