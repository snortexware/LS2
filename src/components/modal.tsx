import * as React from "react";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import { motion, AnimatePresence } from "framer-motion";
import { varSlideInUp } from "./anima";
import { FormControl, Textarea, Button, Box } from "@mui/joy";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import Grid from "@mui/material/Unstable_Grid2";

import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";

interface BasicModalDialogProps {
  visible: boolean;
  onCancel: () => void;
  onOk: () => void;
}

const BasicModalDialog: React.FC<BasicModalDialogProps> = ({
  visible,
  onCancel,
  onOk,
}) => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  return (
    <AnimatePresence>
      {visible && (
        <Modal
          open={visible}
          onClose={onCancel}
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "table-column",
            placeItems: "center",
            justifyContent: "center",
            alignItems: "center",
            height: "90vh",
            width: "100vw",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <Stack spacing={2} sx={{ minWidth: 400 }}>
              <ModalDialog>
                <DialogTitle>Cadastrar SUPORTE</DialogTitle>

                <form
                  onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    onOk();
                  }}
                >
                  <Stack spacing={2}>
                    <FormLabel>Codigo BemTevi</FormLabel>
                    <Input
                    size="sm"
                      type="number"
                      defaultValue={"Codigo BemTevi"}
                      slotProps={{
                        input: {
                          ref: inputRef,
                          min: 1,
                          max: 5,
                          step: 0.1,
                        },
                      }}
                    />
                    <FormLabel>Nome</FormLabel>
                    <Input size="sm" autoFocus required />


                    <Stack direction="row" spacing={2}>
                      <FormControl>
                        <FormLabel>Periodo</FormLabel>
                        <Select
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
                        <Select
                          size="sm"
                          placeholder="Selecione o Periodo"
                          slotProps={{ button: { sx: { whiteSpace: "nowrap" } } }}
                        >
                          <Option value="paid">Dia Inteiro</Option>
                          <Option value="pending">Manhã</Option>
                          <Option value="refunded">Tarde</Option>
                        </Select>
                      </FormControl>
                    </Stack>

                    <Stack direction="row" spacing={2}>
                      <FormControl>
                        <FormLabel>Cidade</FormLabel>
                        <Select
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
                        <Input size="sm" required />
                      </FormControl>
                    </Stack>
                  </Stack>
                </form>
                <Button type="submit">Submit</Button>
              </ModalDialog>
            </Stack>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default BasicModalDialog;
