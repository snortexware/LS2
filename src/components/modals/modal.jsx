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
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import { FormControl, Button, Box, Typography, ModalClose } from "@mui/joy";
import ScheduleIcon from "@mui/icons-material/Schedule";
import TextField from "@mui/joy/TextField";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import moment from 'moment';


const BasicModalDialog = ({ handleClose, onSave }) => {
  

  const [pedido, setPedido] = React.useState({
    codigo: '',
    nome: '',
    data: '',
    periodo: '',
    cidade: '',
    bairro: '',
    comentario: '',
    id:'',
    
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPedido({
      ...pedido,
      [name]: value
    });
  };

  const handleSelectChange = (name, value) => {
    setPedido((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const novoPedido = {
      id: `INV-${Math.floor(Math.random() * 10000)}`, // Gera um ID aleatório para o pedido
      date: formattedDate,
      periodo: pedido.periodo,
        codigo: pedido.codigo,
        name: pedido.nome,
        bairro: pedido.bairro,
        cidade: pedido.cidade,
        comentario: pedido.comentario,
      
    };
 
    onSave(novoPedido); // Passa os dados para o componente pai
    handleClose(); // Fecha o modal
  };
  
  const formattedDate = moment(pedido.data).format('DD/MM/YYYY');
  const today = new Date().toISOString().split("T")[0];
  console.log(pedido)
  return (
    <Backdrop onClick={handleClose}>
      <motion.div
       
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
      >
        <Stack spacing={3} sx={{ minWidth: 600 }}>
          <ModalDialog>
            <ModalClose onClick={handleClose} />
            <Typography endDecorator={<ScheduleIcon />}>
              Cadastrar SUPORTE
            </Typography>

            <form onSubmit={handleSubmit}>
              <Stack spacing={4} sx={{ mt: 2 }}>
                <Stack direction="row" spacing={2} sx={{ height: 40 }}>
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

                <Stack direction="row" spacing={2}>
                  <FormControl>
                    <FormLabel>Periodo</FormLabel>
                    <Select
                      required
                      sx={{ minWidth: 170 }}
                      size="sm"
                      placeholder="Selecione o Periodo"
                      slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                      name="periodo"
                      value={pedido.periodo}
                      onChange={(e, value) => handleSelectChange("periodo", value)}
                    >
                      <Option value="Dia Todo">Dia Todo</Option>
                      <Option value="Manhã">Manhã</Option>
                      <Option value="Tarde">Tarde</Option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Data</FormLabel>
                    <Input
                      sx={{ minWidth: 175 }}
                      required
                      type="date"
                      name="data"
                      value={pedido.data}
                      onChange={handleChange}
                      slotProps={{
                        input: {
                          min: today,
                          max: "2100-12-31",
                        },
                      }}
                    />
                  </FormControl>
                </Stack>

                <Stack direction="row" spacing={2}>
                  <FormControl>
                    <FormLabel>Cidade</FormLabel>
                    <Select
                      required
                      sx={{ mb: 3, minWidth: 170 }}
                      size="sm"
                      placeholder="Selecione a Cidade"
                      slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                      name="cidade"
                      value={pedido.cidade}
                      onChange={(e, value) => handleSelectChange("cidade", value)}
                    >
                      <Option value="Gaspar">Gaspar</Option>
                      <Option value="Blumenau">Blumenau</Option>
                      <Option value="Ilhota">Ilhota</Option>
                      <Option value="Luiz Alves">Luiz Alves</Option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Bairro</FormLabel>
                    <Input
                      name="bairro"
                      value={pedido.bairro}
                      onChange={handleChange}
                      placeholder="Digite Bairro"
                      size="sm"
                      sx={{ minWidth: 160 }}
                      required
                    />
                  </FormControl>
                </Stack>

                <FormControl>
                  <FormLabel>Observação</FormLabel>
                  <Textarea
                    size="md"
                    required
                    placeholder="Comentario"
                    name="comentario"
                    value={pedido.comentario}
                    onChange={handleChange}
                  />
                </FormControl>

                <Stack sx={{ mt: 3 }}>
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

export default BasicModalDialog;