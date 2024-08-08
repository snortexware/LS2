/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Checkbox from "@mui/joy/Checkbox";
import { ColorPaletteProp } from "@mui/joy/styles";
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BlockIcon from "@mui/icons-material/Block";
import AutorenewRoundedIcon from "@mui/icons-material/AutorenewRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import MoreHorizRoundedIcon from "@mui/icons-material/MoreHorizRounded";
import { motion, AnimatePresence } from "framer-motion";
import BasicModalDialog from "./modal";
import zIndex from "@mui/material/styles/zIndex";
import Stack from "@mui/joy/Stack";
import MenuOpen from "@mui/icons-material/MenuOpen";
const rows = [
  {
    id: "INV-1234",
    date: "20/08/2024",
    periodo: "Dia todo",
    customer: {
      initial: "O",
      name: "José cueca pinto da silva",
      bairro: "Margem Esqueda",
      codigo: "2300"
    },
  },
  {
    id: "INV-1233",
    date: "Feb 3, 2023",
    periodo: "Dia Todo",
    customer: {
      initial: "S",
      name: "Steve Hampton",
      bairro: "Coloninha",
      codigo: "2300"
    },
  },
  {
    id: "INV-1233",
    date: "Feb 3, 2023",
    periodo: "Dia Todo",
    customer: {
      initial: "S",
      name: "Steve Hampton",
      bairro: "Coloninha",
      codigo: "2300"
    },
  },
  {
    id: "INV-1233",
    date: "Feb 3, 2023",
    periodo: "Dia Todo",
    customer: {
      initial: "S",
      name: "Steve Hampton",
      bairro: "Coloninha",
      codigo: "2300"
    },
  },
  {
    id: "INV-1233",
    date: "Feb 3, 2023",
    periodo: "Dia Todo",
    customer: {
      initial: "S",
      name: "Steve Hampton",
      bairro: "Coloninha",
      codigo: "2300"
    },
  },
  {
    id: "INV-1233",
    date: "Feb 3, 2023",
    periodo: "Dia Todo",
    customer: {
      initial: "S",
      name: "Steve Hampton",
      bairro: "Coloninha",
      codigo: "2300"
    },
  }
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function RowMenu() {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "plain", color: "neutral", size: "sm" } }}
      >
        <MenuOpen />
      </MenuButton>
      <Menu size="sm" sx={{ minWidth: 140 }}>
        <MenuItem>Editar</MenuItem>
        <MenuItem>Renomear</MenuItem>
        <MenuItem>Mover</MenuItem>
        <Divider />
        <MenuItem color="danger">Deletar</MenuItem>
      </Menu>
    </Dropdown>
  );
}

const getColor = (status) => {
  switch (status) {
    case 'Manhã':
      return 'success';
    case '':
      return 'neutral';
    case 'Dia todo':
      return 'danger';
    default:
      return 'default'; // Provide a default color if needed
  }
};
export default function OrderTable() {
  const [order, setOrder] = useState("desc");
  const [selected, setSelected] = useState([]);
  const [handleAbrir, setHandleAbrir] = useState(false);

  const aberto = () => setHandleAbrir(true);
  const fechado = () => setHandleAbrir(false);

  const renderFilters = () => (
    <React.Fragment>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, minmax(100px, 1fr))",
        gap: 1,
        alignItems: "flex-end",
      }}
    >
      <Button
        sx={{ width: "100%", height: "0%", marginTop: "23%" }}
        size="sm"
        color="primary"
      >
        Filtrar
      </Button>
      <Button
        sx={{ width: "100%", height: "0%", marginTop: "23%" }}
        size="sm"
        color="success"
        endDecorator={<KeyboardArrowRightIcon />}
        onClick={() => (handleAbrir ? fechado() : aberto())}
      >
        Cadastrar
      </Button>
      
      
    </Box>
    </React.Fragment>
  );

  return (
    <>
    
   
      <Sheet
        className="SearchAndFilters-mobile"
        sx={{ display: { xs: "flex", sm: "none" }, my: 1, gap: 1 }}
      >
        <Input
          size="sm"
          placeholder="Search"
          startDecorator={<SearchIcon />}
          sx={{ flexGrow: 1 }}
        />
        <IconButton
          size="sm"
          variant="outlined"
          color="neutral"
          onClick={() => setHandleAbrir(true)}
        >
          <FilterAltIcon />
        </IconButton>
      </Sheet>
      <>
      <Box
        className="SearchAndFilters-tabletUp"
        sx={{
          borderRadius: "sm",
          py: 2,
          display: { xs: "none", sm: "flex" },
          flexWrap: "wrap",
          gap: 1.5,
          "& > *": {
            minWidth: { xs: "120px", md: "160px" },
          },
        }}
      >
        <FormControl sx={{ flex: "none", width: "30%" }} size="sm">
          <FormLabel>Procurar</FormLabel>
          <Input
            size="sm"
            placeholder="Search"
            startDecorator={<SearchIcon />}
          />
        </FormControl>
        {renderFilters()}
      </Box>
      <Sheet
        className="OrderTableContainer"
        variant="outlined"
        sx={{
          display: { xs: "none", sm: "initial" },
          width: "100%",
          borderRadius: "sm",
          flexShrink: 1,
          overflow: "auto",
          minHeight: 0,
          zIndex: 0,
          
        }}
      >
        <Table 
          aria-labelledby="tableTitle"
          stickyHeader
          hoverRow
          sx={{
            "--TableCell-headBackground": "var(--joy-palette-background-level1)",
            "--Table-headerUnderlineThickness": "1px",
            "--TableRow-hoverBackground": "var(--joy-palette-background-level1)",
            "--TableCell-paddingY": "8px",
            "--TableCell-paddingX": "10px",
            position:"relative",
            zIndex: 0,
          }}
        >
          <thead>
         
            <tr >
            
              <th style={{ width: 150, padding: "12px 25px", }}> Codigo Cliente</th>
              <th style={{ width: 200, padding: "12px 6px" }}>Nome</th>
              <th style={{ width: 110, padding: "12px 6px" }}>Data</th>
              <th style={{ width: 140, padding: "12px 6px" }}>Perido</th>
              <th style={{ width: 140, padding: "12px 6px" }}>Cidade</th>
              <th style={{ width: 110, padding: "12px 6px" }}>Bairro</th>
              <th style={{ width: 150, padding: "12px 6px" }}>Comentario</th>
             
              
            </tr>
          </thead>
          <tbody>
            {[...rows].sort(getComparator(order, "id")).map((row) => (
              <tr key={row.id}>
                <td style={{ gap: 2, textAlign: "center", width: 130 }}>
                <Typography
  color="success"
  level="title-md"
  noWrap
>{row.customer.codigo}</Typography>
                </td>
                
                <td>
                  <Typography size= "lg" level="title-sm">{row.customer.name}</Typography>
                </td>
                <td>
                  <Typography level="body-xs">{row.date}</Typography>
                </td>
                <td>
                  <Chip
                    variant="solid"
                    size="md"
                    startDecorator={
                      {
                        "DiaTodo": <CheckRoundedIcon />,
                        "Refunded": <AutorenewRoundedIcon />,
                        "Cancelled": <BlockIcon />,
                      }[row.periodo]
                    }
                    color={getColor(row.periodo)}
                  >
                    {row.periodo}
                  </Chip>
                </td>
                <td>
                  <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
                   
                    <div>
                      <Typography level="body-xs">{row.customer.name}</Typography>
                    </div>
                  </Box>
                </td>
                <td>
                  <Box sx={{ display: "flex", gap: 1, alignItems: "center",  borderRight: "solid px black"}}>
                    
                    <div>
                      
                      <Typography size="lg" level="body-xs">{row.customer.bairro}</Typography>
                    </div>
                  </Box>
                  
                </td>
                <td>
                  <Stack direction={ "row"} spacing={2}>
                  <Typography size="lg" level="body-xs">{row.customer.bairro}</Typography>
                  
                  <RowMenu />
                  </Stack>
                  
                </td>
               
                
              </tr>
            ))}
          </tbody>
        </Table>
      </Sheet>
      <Box
        className="Pagination-laptopUp"
        sx={{
          pt: 2,
          gap: 1,
          [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          startDecorator={<KeyboardArrowLeftIcon />}
        >
          Previous
        </Button>
        <Box sx={{ flex: 1 }} />
        {["1", "2", "3", "…", "8", "9", "10"].map((page) => (
          <IconButton
            key={page}
            size="sm"
            variant={Number(page) ? "outlined" : "plain"}
            color="neutral"
          >
            {page}
          </IconButton>
        ))}
        <Box sx={{ flex: 1 }} />
        <Button
          size="sm"
          variant="outlined"
          color="neutral"
          endDecorator={<KeyboardArrowRightIcon />}
        >
          Next
        </Button>
      </Box>
      </>
      <AnimatePresence 
      initial={false}
      mode='wait'
      onExitComplete={()=> null}
      >
      {handleAbrir && (
        <BasicModalDialog sx={{position: "absolute", zIndex: 1400}} handleAbrir={handleAbrir} handleClose={fechado} />
      )}
      </AnimatePresence>
    </>
  );
}
