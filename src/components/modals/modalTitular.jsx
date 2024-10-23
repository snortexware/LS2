import { motion } from "framer-motion";
import Backdrop from "./backdrop";
import * as React from "react";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import ModalDialog from "@mui/joy/ModalDialog";
import Stack from "@mui/joy/Stack";
import { FormControl, Button, Box, Typography, ModalClose } from "@mui/joy";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { debounce } from "lodash";

const ModalTitular = ({ handleClose, onSave, initialValues = {} }) => {
  const data = new Date();

  // Options for formatting the time
  const optionsHora = {
    hour: "2-digit",
    minute: "2-digit",
  };

  // Options for formatting the date
  const optionsData = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };

  // Format the date and time
  const dataFormatada = data.toLocaleDateString("pt-BR", optionsData);
  const horaFormatada = data.toLocaleTimeString("pt-BR", optionsHora);
  const dataHoraFormatada = `${dataFormatada} ${horaFormatada}`;

  const [pedido, setPedido] = React.useState({
    id: initialValues.id || "",
    user: "Lucas",
    data: initialValues.data || dataHoraFormatada,
    codigoClienteAntigo: initialValues.codigoClienteAntigo || "",
    clienteAntigo: initialValues.clienteAntigo || "",
    codigoClienteNovo: initialValues.codigoClienteNovo || "",
    clienteNovo: initialValues.clienteNovo || "",
    id: initialValues.id || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPedido({
      ...pedido,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(pedido);
    handleClose();
  };

  return (
    <Backdrop onClick={handleClose}>
      <motion.div
        dragConstraints={{
          top: -200,
          left: -150,
          right: 300,
          bottom: 200,
        }}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Stack sx={{ minWidth: 600 }}>
          <ModalDialog
            sx={{
              overflow: "auto",
              minWidth: "400px",
              p: 3,
              bgcolor: "background.paper",
            }}
          >
            <ModalClose onClick={handleClose} />
            <Typography endDecorator={<ScheduleIcon />}>
              Cadastrar MUDANÇA DE TITULAR
            </Typography>

            <form onSubmit={handleSubmit}>
              <Stack spacing={5.5} sx={{ mt: 2 }}>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2.5}
                  sx={{ height: 35 }}
                >
                  <FormLabel sx={{ minWidth: "200px" }}>
                    Codigo bemTevi cliente antigo :
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoFocus
                      required
                      color="primary"
                      variant="outlined"
                      type="number"
                      placeholder="Codigo"
                      name="codigoClienteAntigo"
                      value={pedido.codigoClienteAntigo}
                      onChange={handleChange}
                      sx={{
                        width: 80,
                        "& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button":
                          {
                            WebkitAppearance: "none",
                            margin: 0,
                          },
                        "& input[type='number']": {
                          MozAppearance: "textfield",
                          appearance: "textfield",
                        },
                      }}
                    />
                  </FormControl>
                </Stack>
                <FormControl>
                  <FormLabel>Nome cliente antigo</FormLabel>
                  <Input
                    variant="outlined"
                    placeholder="Digite o Nome"
                    size="md"
                    required
                    name="clienteAntigo"
                    value={pedido.clienteAntigo}
                    onChange={handleChange}
                  />
                </FormControl>
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={2.5}
                  sx={{ height: 35 }}
                >
                  <FormLabel sx={{ minWidth: "200px" }}>
                    Codigo bemTevi cliente novo :
                  </FormLabel>
                  <FormControl>
                    <Input
                      autoFocus
                      required
                      color="primary"
                      variant="outlined"
                      type="number"
                      placeholder="Codigo"
                      name="codigoClienteNovo"
                      value={pedido.codigoClienteNovo}
                      onChange={handleChange}
                      sx={{
                        width: 80,
                        "& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button":
                          {
                            WebkitAppearance: "none",
                            margin: 0,
                          },
                        "& input[type='number']": {
                          MozAppearance: "textfield",
                          appearance: "textfield",
                        },
                      }}
                    />
                  </FormControl>
                </Stack>
                <FormControl>
                  <FormLabel>Nome cliente novo</FormLabel>
                  <Input
                    variant="outlined"
                    placeholder="Digite o Nome"
                    size="md"
                    required
                    name="clienteNovo"
                    value={pedido.clienteNovo}
                    onChange={handleChange}
                  />
                </FormControl>
                <Stack sx={{ mt: 4 }}>
                  <Button type="submit">Cadastrar</Button>
                </Stack>
              </Stack>
            </form>
          </ModalDialog>
        </Stack>
      </motion.div>
    </Backdrop>
  );
};

export default ModalTitular;
