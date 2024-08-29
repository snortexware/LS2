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
import { Rowing } from "@mui/icons-material";

const ModalInstalacao = ({ handleClose, onSave }) => {
  
  const [status, setStatus] = React.useState("Processando")
  const [pedido, setPedido] = React.useState({
    codigo: '',
    nome: '',
    data: '',
    periodo: '',
    cidade: '',
    bairro: '',
    comentario: '',
    id:'',
    ponto: '',
    servico: '',
    tecnico: '',
    auxiliar: '',
    status: status,
    
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

  
 
    onSave(pedido); // Passa os dados para o componente pai
    handleClose(); // Fecha o modal
  };
  
  const formattedDate = moment(pedido.data).format('DD/MM/YYYY');
  const today = new Date().toISOString().split("T")[0];
  console.log(pedido)
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
        <Stack spacing={2} sx={{  }} >
          <ModalDialog   sx={{overflow: 'auto', maxWidth: '700px', p: 3, bgcolor: 'background.paper'  }}>
            <ModalClose onClick={handleClose} />
           
            <form onSubmit={handleSubmit}>
           
              <Stack spacing={4} sx={{ mt: 0 }}>
              <Typography endDecorator={<ScheduleIcon />}>
              Cadastrar INSTALAÇÃO
            </Typography>
                <Stack direction="row" spacing={2} >
                <FormLabel>Segundo Ponto/Cabeamento:</FormLabel>
                <FormControl>
                    <Select
                      required
                      sx={{ minWidth: 110 }}
                      size="sm"
                      placeholder="Sim ou Não?"
                      slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                      name="periodo"
                      value={pedido.ponto}
                      onChange={(e, value) => handleSelectChange("ponto", value)}
                    >
                      <Option value="Sim">Sim</Option>
                      <Option value="Não">Não</Option>
                      
                    </Select>
                  </FormControl>
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
                <FormControl>
                <FormLabel>Serviços</FormLabel>
                    <Select
                      required
                      sx={{ minWidth: 110 }}
                      size="sm"
                      placeholder="Selecione o Serviço?"
                      slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                      name="periodo"
                      value={pedido.servico}
                      onChange={(e, value) => handleSelectChange("servico", value)}
                    >
                      <Option value="Migração">Migração</Option>
                      <Option value="Instalação Rádio">Instalação Rádio</Option>
                      <Option value="Mudança de Endereço">Mudança de Endereço</Option>
                      <Option value="Instalação Fibra">Instalação Fibra</Option>
                      <Option value="Manutenção">Manutenção</Option>
                      
                    </Select>
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
                      size="sm"
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
                      sx={{  minWidth: 170 }}
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
                <Stack direction="row" spacing={2}>
                  <FormControl>
                    <FormLabel>Técnico</FormLabel>
                    <Select
                      required
                      sx={{  minWidth: 170 }}
                      size="sm"
                      placeholder="Selecione a Cidade"
                      slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                      name="cidade"
                      value={pedido.tecnico}
                      onChange={(e, value) => handleSelectChange("tecnico", value)}
                    >
                      <Option value="Wagner">Wagner</Option>
                      <Option value="Paulo">Paulo</Option>
                      <Option value="Ilhota">Ilhota</Option>
                      <Option value="Luiz Alves">Luiz Alves</Option>
                    </Select>
                  </FormControl>
                  <FormControl>
                    <FormLabel>Auxiliar</FormLabel>
                    <Select
                      required
                      sx={{  minWidth: 170 }}
                      size="sm"
                      placeholder="Selecione a Cidade"
                      slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                      name="cidade"
                      value={pedido.auxiliar}
                      onChange={(e, value) => handleSelectChange("auxiliar", value)}
                    >
                      <Option value="Lucas">Lucas</Option>
                      <Option value="Francislano">Francislano</Option>
                      <Option value="Ilhota">Ilhota</Option>
                      <Option value="Luiz Alves">Luiz Alves</Option>
                    </Select>
                  </FormControl>
                  
                </Stack>

                <Stack direction={"row"} spacing={5}>
                  
                  </Stack>

                <FormControl >
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

                <Stack>
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

export default ModalInstalacao;