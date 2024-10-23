/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Chip from "@mui/joy/Chip";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Table from "@mui/joy/Table";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";
import DriveFileRenameOutlineIcon from "@mui/icons-material/DriveFileRenameOutline";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import SearchIcon from "@mui/icons-material/Search";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { motion, AnimatePresence } from "framer-motion";
import ModalInstalacao from "../../modals/modaInstalacao";
import Stack from "@mui/joy/Stack";
import { IconButton, iconButtonClasses } from "@mui/joy";

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

function RowMenu({ row, onDelete, onEdit }) {
  return (
    <Dropdown>
      <MenuButton
        slots={{ root: IconButton }}
        slotProps={{ root: { variant: "plain", color: "neutral", size: "sm" } }}
      >
        <DriveFileRenameOutlineIcon />
      </MenuButton>
      <Menu size="sm" sx={{ minWidth: 140 }}>
        <MenuItem onClick={() => onEdit(row)}>Editar</MenuItem>
        <Divider />
        <MenuItem onClick={() => onDelete(row.id)} color="danger">
          Deletar
        </MenuItem>
      </Menu>
    </Dropdown>
  );
}

const getColor = (periodo) => {
  switch (periodo) {
    case "Manhã":
      return "success";
    case "Tarde":
      return "warning";
    case "Dia Todo":
      return "danger";
    default:
      return "default";
  }
};

export default function TableInstalacao() {
  const [order, setOrder] = useState("desc");
  const [selected, setSelected] = useState([]);
  const [handleAbrir, setHandleAbrir] = useState(false);
  const [rows, setRows] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentRow, setCurrentRow] = useState(null);
  const [nextId, setNextId] = useState(1);
  const aberto = () => setHandleAbrir(true);
  const fechado = () => setHandleAbrir(false);
  const handleSave = (pedido) => {
    if (editMode) {
      const updatedRows = rows.map((row) =>
        row.id === currentRow.id ? { ...pedido, ...currentRow } : row
      );
      setRows(updatedRows);
    } else {
      const newEntry = { ...pedido, id: nextId };
      setRows([...rows, newEntry]);
      setNextId(nextId + 1);
    }

    setEditMode(false); // EditMode em falso para criação de nova ROw
    setHandleAbrir(false);
    setCurrentRow(null);
  };

  const handleEdit = (row) => {
    setCurrentRow(row);
    setHandleAbrir(true);
    setEditMode(true);
  };
  const handleDelete = (id) => {
   setRows(rows.filter((row) => row.id !== id))
  };

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
      <Stack
        direction={"rows"}
        sx={{
          justifyContent: "flex-start",
          alignItems: "center",
        }}
        columnGap={1}
        spacing={3}
      >
        <Typography level="h2" component="h1">
          AGENDAMENTO |
        </Typography>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <Typography level="h4" color="neutral">
            INSTALAÇÃO
          </Typography>
        </motion.div>
      </Stack>
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
            "@media (min-width: 1200px)": {
              overflowX: "auto",
              display: "block",
              margin: "0 auto",
            },
          }}
        >
          <Table
            aria-labelledby="tableTitle"
            stickyHeader
            hoverRow
            sx={{
              "--TableCell-headBackground":
                "var(--joy-palette-background-level1)",
              "--Table-headerUnderlineThickness": "1px",
              "--TableRow-hoverBackground":
                "var(--joy-palette-background-level1)",
              "--TableCell-paddingY": "8px",
              "--TableCell-paddingX": "10px",
              position: "relative",
              zIndex: 0,
              "@media (min-width: 1200px)": {
                display: "table",
                margin: "0 auto",
              },
            }}
          >
            <thead>
              <tr>
                <th
                  style={{
                    whiteSpace: "normal",
                    minWidth: 150,
                    padding: "15px 5px",
                    textAlign: "center", // Centraliza o texto do cabeçalho
                  }}
                >
                  Nome
                </th>
                <th
                  style={{
                    minWidth: 150,
                    padding: "15px 6px",
                    textAlign: "center", // Centraliza o texto do cabeçalho
                  }}
                >
                  Serviço
                </th>
                <th
                  style={{
                    minWidth: 150,
                    padding: "15px 6px",
                    textAlign: "center", // Centraliza o texto do cabeçalho
                  }}
                >
                  Data
                </th>
                <th
                  style={{
                    minWidth: 100,
                    padding: "15px 6px",
                    textAlign: "center", // Centraliza o texto do cabeçalho
                  }}
                >
                  Periodo
                </th>
                <th
                  style={{
                    minWidth: 50,
                    padding: "10px 6px",
                    textAlign: "center", // Centraliza o texto do cabeçalho
                    lineBreak: "anywhere",
                  }}
                >
                  QTD.
                  <br></br>
                  instalação
                </th>
                <th
                  style={{
                    minWidth: 130,
                    padding: "15px 6px",
                    textAlign: "center", // Centraliza o texto do cabeçalho
                  }}
                >
                  Bairro
                </th>

                <th
                  style={{
                    minWidth: 130,
                    padding: "15px 6px",
                    textAlign: "center", // Centraliza o texto do cabeçalho
                  }}
                >
                  Status
                </th>
                <th
                  style={{
                    width: 80,
                    padding: "15px 6px",
                    textAlign: "center",
                  }}
                >
                  Ação
                </th>
              </tr>
            </thead>
            <tbody>
              {[...rows].sort(getComparator(order, "id")).map((row) => (
                <tr key={row.id}>
                  <td style={{ textAlign: "center" }}>
                    <p>{row.nome}</p>
                  </td>

                  <td style={{ textAlign: "center" }}>
                    <p>{row.servico}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <p>{row.data}</p>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <Chip
                      sx={{ minWidth: 30 }}
                      variant="solid"
                      size="sm"
                      startDecorator={
                        {
                          "Dia Todo": <CheckRoundedIcon />,
                          Manhã: <CheckRoundedIcon />,
                          Tarde: <CheckRoundedIcon />,
                        }[row.periodo]
                      }
                      color={getColor(row.periodo)}
                    >
                      {row.periodo}
                    </Chip>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <div>
                      <p>{row.cidade}</p>
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <div>
                      <p>{row.bairro}</p>
                    </div>
                  </td>
                  <td style={{ textAlign: "center" }}>
                    <div style={{ color: "yellow" }}>{row.status}</div>
                  </td>
                  <td>
                    <RowMenu
                      row={row}
                      onEdit={handleEdit}
                      onDelete={handleDelete}
                    />
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
      <AnimatePresence initial={false} mode="wait" onExitComplete={() => null}>
        {handleAbrir && (
          <ModalInstalacao
          onSave={handleSave}
          sx={{ position: "absolute", zIndex: 1400 }}
          initialValues={editMode ? currentRow : {}}
          handleClose={fechado}
          />
        )}
      </AnimatePresence>
    </>
  );
}
