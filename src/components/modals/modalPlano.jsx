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

const ModalPlano = ({ handleClose, onSave }) => {
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
    codigo: "",
    user: "Lucas",
    nome: "",
    data: dataHoraFormatada,
    clienteAntigo: "0,00",
    planoAntigo: "",
    valorNovo: "0,00",
    planoNovo: "",
    id: "",
  });

  const HandleDebouncedChange = debounce((name, value) => {
    setPedido((prevState) => ({
      ...prevState,
      [name]: formatarMoeda(value),
    }));
  }, 100);

  const handleChange = (e) => {
    const { name, value } = e.target;
    

    if (name === "valorAntigo" || name === "valorNovo") {
      const cleanedValue = value.replace(/\D/g, ""); 
      HandleDebouncedChange(name, cleanedValue);
    } else {
      setPedido({
        ...pedido,
        [name]: value,
      });
    }
  };

  const formatarMoeda = (valorInput) => {
    let cleanValue = valorInput;

  
    while (cleanValue.length < 3) {
      cleanValue = "0" + cleanValue;
    }

    let reais = cleanValue.slice(0, -2); 
    let centavos = cleanValue.slice(-2);

    return `${parseInt(reais, 10)},${centavos}`;
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
              Cadastrar MUDANÇA DE PLANO
            </Typography>

            <form onSubmit={handleSubmit}>
              <Stack spacing={5} sx={{ mt: 2 }}>
                <Stack direction="row" spacing={2} sx={{ height: 25 }}>
                  <FormLabel>Codigo BemTevi :</FormLabel>
                  <Input
                    autoFocus
                    required
                    color="primary"
                    variant="outlined"
                    type="number"
                    placeholder="Codigo"
                    name="codigo"
                    value={pedido.codigo}
                    onChange={handleChange}
                    sx={{
                      width: 80,
                      "& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                      "& input[type='number']": {
                        MozAppearance: "textfield",
                        appearance: "textfield",
                      },
                    }}
                  />
                  <Box></Box>
                </Stack>
                <FormControl>
                  <FormLabel>Nome</FormLabel>
                  <Input
                    variant="outlined"
                    placeholder="Digite o Nome"
                    size="sm"
                    required
                    name="nome"
                    value={pedido.nome}
                    onChange={handleChange}
                  />
                </FormControl>
                <Stack
                  direction="row"
                  spacing={10}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <FormControl sx={{ minWidth: "100px", maxWidth: "130px" }}>
                    <FormLabel>Valor plano Antigo</FormLabel>
                    <Input
                    size="sm"
                      name="valorAntigo"
                      variant="outlined"
                      value={pedido.valorAntigo}
                      onChange={handleChange}
                      placeholder="Valor do antigo plano"
                    />
                  </FormControl>
                  <FormControl sx={{ minWidth: "100px", maxWidth: "130px" }}>
                    <FormLabel>Valor plano Novo</FormLabel>
                    <Input
                    size="sm"
                      name="valorNovo"
                      value={pedido.valorNovo}
                      onChange={handleChange}
                      placeholder="Valor do novo plano"
                    />
                  </FormControl>
                </Stack>

                <Stack
                  direction="row"
                  spacing={10}
                  sx={{ justifyContent: "center", alignContent: "center" }}
                >
                  <FormControl>
                    <FormLabel>Plano Antigo</FormLabel>
                    <Input
                      sx={{ minWidth: "100px", maxWidth: "130px" }}
                      variant="outlined"
                      placeholder="Plano Antigo"
                      size="sm"
                      required
                      name="planoAntigo"
                      value={pedido.planoAntigo}
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Plano Novo</FormLabel>
                    <Input
                      sx={{ minWidth: "100px", width: "130px" }}
                      variant="outlined"
                      placeholder="Plano Novo"
                      size="sm"
                      required
                      name="planoNovo"
                      value={pedido.planoNovo}
                      onChange={handleChange}
                    />
                  </FormControl>
                </Stack>

                <Stack sx={{ mt: 4 }}>
                  <Button type="submit">Submit</Button>
                </Stack>
              </Stack>
            </form>
          </ModalDialog>
        </Stack>
      </motion.div>
    </Backdrop>
  );
};

export default ModalPlano;
