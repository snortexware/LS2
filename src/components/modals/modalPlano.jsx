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
import PropTypes from 'prop-types';
import { NumericFormat } from 'react-number-format';

const ModalPlano = ({ handleClose, onSave }) => {
  const data = new Date();

// Options for formatting the time
const optionsHora = {
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
};

// Options for formatting the date
const optionsData = {
  year: 'numeric',
  month: '2-digit',
  day: '2-digit'
};

// Format the date and time
const dataFormatada = data.toLocaleDateString('pt-BR', optionsData);
const horaFormatada = data.toLocaleTimeString('pt-BR', optionsHora);

console.log('Data formatada:', dataFormatada);
console.log('Hora formatada:', horaFormatada);


const dataHoraFormatada = `${dataFormatada} ${horaFormatada}`;
  const [status, setStatus] = React.useState("Processando")
  const [pedido, setPedido] = React.useState({
    codigo: '',
    user: '',
    nome: '',
    data: dataHoraFormatada,
    motivo: '',
    mes: '',
    bairro: '',
    id:'',
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
  const NumericFormatAdapter = React.forwardRef(
    function NumericFormatAdapter(props, ref) {
      const { onChange, ...other } = props;
  
      return (
        <NumericFormat
          {...other}
          getInputRef={ref}
          onValueChange={(values) => {
            onChange({
              target: {
                name: props.name,
                value: values.value,
              },
            });
          }}
          thousandSeparator
          valueIsNumericString
          prefix="$"
        />
      );
    },
  );
  
  NumericFormatAdapter.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };
  

  const formattedDate = moment(pedido.data).format('DD/MM/YYYY');
  const today = new Date().toISOString().split("T")[0];
  console.log(pedido)
  const [value, setValue] = React.useState('1320');
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
        <Stack  sx={{ minWidth: 600 }}>
          <ModalDialog sx={{overflow: 'auto', minWidth: '400px', p: 3, bgcolor: 'background.paper'  }}>
            <ModalClose onClick={handleClose} />
            <Typography endDecorator={<ScheduleIcon />}>
              Cadastrar CANCELAMENTO
            </Typography>

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
                 <Box>
                  
                 </Box>
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
  <FormLabel>React number format</FormLabel>
  <Input
    value={value}
    onChange={(event) => setValue(event.target.value)
    }
    placeholder="Placeholder"
    slotProps={{
      input: {
        component: NumericFormatAdapter,
      },
    }}
  />
</FormControl>
                
                <FormControl>
                  <FormLabel >Motivo</FormLabel>
                  <Textarea
                  sx={{minWidth: 250}}
                    size="sm"
                    required
                    placeholder="Digite o Motivo"
                    name="Motivo"
                    value={pedido.motivo}
                    onChange={handleChange}
                  />
                </FormControl>
               
               
          

               

                

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