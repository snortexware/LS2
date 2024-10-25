import {
  motion,
  AnimatePresence
} from "framer-motion";
import Backdrop from "./backdrop";
import Table from "@mui/joy/Table";
import Textarea from "@mui/joy/Textarea";
import * as React from "react";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import ModalDialog from "@mui/joy/ModalDialog";
import ModalClose from "@mui/joy/ModalClose";
import Stack from "@mui/joy/Stack";
import { FormControl, Button, Box, Typography } from "@mui/joy";
import ScheduleIcon from "@mui/icons-material/Schedule";
import moment from 'moment';

const ModalBoletos = ({ handleClose, onSave, initialValues = {} }) => {
  const data = new Date();

  const dataHoraFormatada = moment(initialValues.data).format('DD/MM/YYYY HH:mm:ss');
  const [status, setStatus] = React.useState("Processando")
  const [pedido, setPedido] = React.useState({
    codigo: initialValues.codigo || '',
    user: initialValues.user || 'Lucas',
    nome: initialValues.nome || '',
    data: initialValues.data || dataHoraFormatada,
    motivo: initialValues.motivo || '',
    mes: initialValues.mes || '',
    bairro: initialValues.bairro || '',
    id: initialValues.id || '',
    status: initialValues.status || status,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPedido({
      ...pedido,
      [name]: value
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
        dragConstraints={{ top: -200, left: -150, right: 300, bottom: 200 }}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Stack sx={{ minWidth: 600 }}>
          <ModalDialog sx={{ overflow: 'auto', minWidth: '400px', p: 3, bgcolor: 'background.paper' }}>
            <ModalClose onClick={handleClose} />
            <Typography endDecorator={<ScheduleIcon />}>Cadastrar BAIXA</Typography>

            <form onSubmit={handleSubmit}>
              <Stack spacing={4.5} sx={{ mt: 2 }}>
                <Stack direction="row" spacing={2} sx={{ height: 35 }}>
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

                <Stack direction="row" spacing={2} sx={{ height: 45 }}>
                  <FormControl>
                    <FormLabel>Observação</FormLabel>
                    <Textarea
                      sx={{ minWidth: 250 }}
                      size="sm"
                      required
                      placeholder="Comentario"
                      name="motivo" // Change to 'motivo'
                      value={pedido.motivo} // Change to 'motivo'
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Mês Referente</FormLabel>
                    <Input
                      size="sm"
                      required
                      color="primary"
                      variant="outlined"
                      type="number"
                      placeholder="Mês"
                      name="mes" // Change to 'mes'
                      value={pedido.mes} // Change to 'mes'
                      onChange={handleChange}
                      sx={{
                        width: 100,
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

export default ModalBoletos;
