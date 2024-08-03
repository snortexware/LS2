import * as React from "react";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import Stack from "@mui/joy/Stack";
import { motion, AnimatePresence } from "framer-motion";
import { FormControl, Button, Select, Option,  } from "@mui/joy";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";


interface BasicModalDialogProps {
  visible: boolean;
  onCancel: () => void;
  onOk: (data: {
    codigoBemTevi: string;
    nome: string;
    periodo: string;
    data: string;
    cidade: string;
    bairro: string;
  }) => void;
}

const BasicModalDialog: React.FC<BasicModalDialogProps> = ({
  visible,
  onCancel,
  onOk,
}) => {
  const [formData, setFormData] = React.useState({
    codigoBemTevi: "",
    nome: "",
    periodo: "",
    data: "",
    cidade: "",
    bairro: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string) => (e: any, value: any) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onOk(formData);
    console.log(formData)
  };

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

                <form onSubmit={handleSubmit}>
                  <Stack spacing={2}>
                    <FormLabel>Codigo BemTevi</FormLabel>
                    <Input
                      size="sm"
                      type="number"
                      name="codigoBemTevi"
                      value={formData.codigoBemTevi}
                      onChange={handleInputChange}
                      required
                    />
                    <FormLabel>Nome</FormLabel>
                    <Input
                      size="sm"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      autoFocus
                      required
                    />
                    <Stack direction="row" spacing={2}>
                      <FormControl>
                        <FormLabel>Periodo</FormLabel>
                        <Select
                          size="sm"
                          placeholder="Selecione o Periodo"
                          value={formData.periodo}
                          onChange={handleSelectChange("periodo")}
                        >
                          <Option value="Dia Inteiro">Dia Inteiro</Option>
                          <Option value="Manhã">Manhã</Option>
                          <Option value="Tarde">Tarde</Option>
                        </Select>
                      </FormControl>
                      <FormControl>
                        <FormLabel>Data</FormLabel>
                        <Input
                          size="sm"
                          type="date"
                          name="data"
                          value={formData.data}
                          onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Stack>
                    <Stack direction="row" spacing={2}>
                      <FormControl>
                        <FormLabel>Cidade</FormLabel>
                        <Select
                          size="sm"
                          placeholder="Selecione a Cidade"
                          value={formData.cidade}
                          onChange={handleSelectChange("cidade")}
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
                          size="sm"
                          name="bairro"
                          value={formData.bairro}
                          onChange={handleInputChange}
                          required
                        />
                      </FormControl>
                    </Stack>
                  </Stack>
                  <Button type="submit">Submit</Button>
                </form>
              </ModalDialog>
            </Stack>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  );
};

export default BasicModalDialog;
