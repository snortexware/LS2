import {motion, AnimatePresence as AnimationPresence} from "framer-motion"
import Backdrop from "./backdrop"

import Table from '@mui/joy/Table';
import Textarea from '@mui/joy/Textarea';
import * as React from "react";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";

import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";


import { FormControl, Button, Box, Typography } from "@mui/joy";

import ScheduleIcon from '@mui/icons-material/Schedule';


import TextField from '@mui/joy/TextField'

import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import { Dialog } from "@mui/material";


const BasicModalDialog = ({handleClose, text}) => {

    const DISTANCE = 100;

    const TRANSITION_ENTER = {
      duration: 0.64,
      ease: [0.43, 0.13, 0.23, 0.96]
    };
    
    const TRANSITION_EXIT = {
      duration: 0.48,
      ease: [0.43, 0.13, 0.23, 0.96]
    };
    return (
          <AnimationPresence>
        <Backdrop onClick={handleClose}>
            <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 50 }}
         exit={{ opacity: 0, y: 50 }}
         transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                <Stack spacing={2} sx={{ minWidth: 400 }}>
              <ModalDialog>
              
              <Typography  endDecorator={<ScheduleIcon></ScheduleIcon>}>Cadastrar SUPORTE</Typography>

                <form
                 
                  
                >
                  <Stack spacing={4} sx={{mt: 5}}>
                    <Stack direction="row" spacing={2} sx={{height: 40}}>
                      
                      
                    <FormLabel>Codigo BemTevi :</FormLabel>
                    <Input
                    color="success"
                    variant="solid"
                    type="number"
                    placeholder="codigo"
                    sx={{
                      width: 80,
                      "& input::-webkit-inner-spin-button, & input::-webkit-outer-spin-button": {
                        WebkitAppearance: "none",
                        margin: 0,
                      },
                      "& input[type='number']": {
                        MozAppearance: "textfield",
                        appearance: "textfield", // Remove as setas em outros navegadores
                      },
                    }}
                      
                    />
                    </Stack>
                    <FormControl>
                    <FormLabel>Nome</FormLabel>
                    <Input size="sm" autoFocus required />
                    </FormControl>

                    <Stack direction="row" spacing={2}>
                      <FormControl>
                        <FormLabel>Periodo</FormLabel>
                        <Select
                        sx={{minWidth: 150}}
                          size="sm"
                          placeholder="Selecione o Periodo"
                          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                        >
                          <Option value="paid">Dia Inteiro</Option>
                          <Option value="pending">Manhã</Option>
                          <Option value="refunded">Tarde</Option>
                        </Select>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Data</FormLabel>
                       
                        
    
                      </FormControl>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                      <FormControl>
                        <FormLabel>Cidade</FormLabel>
                        <Select
                        sx={{mb: 3, minWidth: 150}}
                          size="sm"
                          placeholder="Selecione o Periodo"
                          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                        >
                          <Option value="paid">Gaspar</Option>
                          <Option value="pending">Blumenau</Option>
                          <Option value="refunded">Ilhota</Option>
                          <Option value="cancelled">Luiz Alves</Option>
                        </Select>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Bairro</FormLabel>
                        <Input size="sm" sx={{width: 170}}required />
                      </FormControl>
                    </Stack>
                  </Stack>
                  <Stack sx={{mt: 3}}>
                  <Button type="submit">Submit</Button>
                  </Stack>
                </form>
              
              </ModalDialog>
              </Stack>
            </motion.div>

        </Backdrop>
        </AnimationPresence>
    )
}
export default BasicModalDialog