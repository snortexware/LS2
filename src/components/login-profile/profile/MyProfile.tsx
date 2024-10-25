import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Textarea from '@mui/joy/Textarea';
import Stack from '@mui/joy/Stack';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Typography from '@mui/joy/Typography';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import { motion, AnimatePresence } from "framer-motion";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import VideocamRoundedIcon from '@mui/icons-material/VideocamRounded';
import InsertDriveFileRoundedIcon from '@mui/icons-material/InsertDriveFileRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DropZone from './DropZone';
import FileUpload from './FileUpload';
import CountrySelector from './CountrySelector';
import EditorToolbar from './EditorToolBar';

export default function MyProfile() {
    const [pedido, setPedido] = React.useState({
        codigo: "",
        sobrenome: "",
        email: '',
        nome: "",
        senha: "",
        id: '',
        status: '',
      });
    const Avatar = require('../../assets/open.jpg')

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setPedido({
          ...pedido,
          [name]: value
        });
    }
  return (
    <Box
     sx={{
    pb: { xs: 2, sm: 2, md: 0 },
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
     // Constrain max width to avoid breaking the layout
    marginLeft: "-40px", // Center the content horizontally
    gap: 1,
  }}
    >
      <Box>
      
        <Box sx={{ overflow: 'auto', px: { xs: 1, md: 2 } }}>
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
          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            Meu Perfil
          </Typography>
          </motion.div>
        
        </Box>
        <Tabs defaultValue={0} sx={{ bgcolor: 'transparent' }}>
          <TabList
            tabFlex={1}
            size="sm"
            sx={{
              pl: { xs: 0, md: 1 },
              justifyContent: 'left',
              [`&& .${tabClasses.root}`]: {
                fontWeight: '600',
                flex: 'initial',
                color: 'text.tertiary',
                [`&.${tabClasses.selected}`]: {
                  bgcolor: 'transparent',
                  color: 'text.primary',
                  '&::after': {
                    height: '2px',
                    bgcolor: 'primary.500',
                  },
                },
              },
            }}
          >
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={0}>
              Configurações
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={1}>
              Geral
            </Tab>
            <Tab sx={{ borderRadius: '6px 6px 0 0' }} indicatorInset value={2}>
              Inativos
            </Tab>
            
          </TabList>
        </Tabs>
      </Box>
      <Stack
        spacing={4}
        sx={{
          display: 'flex',
          maxWidth: '800px',
          mx: 'auto',
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
        }}
      >
       
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Dados pessoais</Typography>
            <Typography level="body-sm">
              Costumize seu perfil de usuário
            </Typography>
          </Box>
          <Divider />
          <Stack
            direction="row"
            spacing={3}
            sx={{ display: { xs: 'none', md: 'flex' }, my: 1 }}
          >
            <Stack direction="column" spacing={1}>
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
              >
                <img
                  src={Avatar}
                  srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  bgcolor: 'background.body',
                  position: 'absolute',
                  zIndex: 2,
                  borderRadius: '50%',
                  left: 100,
                  top: 170,
                  boxShadow: 'sm',
                }}
              >
                <EditRoundedIcon />
              </IconButton>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <Stack spacing={1}>
                <FormLabel>Nome</FormLabel>
                <FormControl
                  sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}
                >
                  <Input
                  name="nome" 
                  value={pedido.nome}
                  onChange={handleChange}
                  size="sm" placeholder="Primeiro name" />
                  <Input size="sm"
                  name="sobrenome" 
                  value={pedido.sobrenome}
                  onChange={handleChange}
                  placeholder=" Sobrenome" 
                  sx={{ flexGrow: 1 }} />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl sx={{ flexGrow: 1 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    name="email"
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    placeholder="Email"
                    value={pedido.email}
                    onChange={handleChange}
                    sx={{ flexGrow: 1 }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Senha</FormLabel>
                  <Input 
                  name="senha"
                  value={pedido.senha}
                  onChange={handleChange}
                  size="sm" type="password" />
                </FormControl>
              </Stack>
           
             
            </Stack>
          </Stack>
          <Stack
            direction="column"
            spacing={2}
            sx={{ display: { xs: 'flex', md: 'none' }, my: 1 }}
          >
            <Stack direction="row" spacing={2}>
              <Stack direction="column" spacing={1}>
                <AspectRatio
                  ratio="1"
                  maxHeight={108}
                  sx={{ flex: 1, minWidth: 108, borderRadius: '100%' }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
                    srcSet="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286&dpr=2 2x"
                    loading="lazy"
                    alt=""
                  />
                </AspectRatio>
                <IconButton
                  aria-label="upload new picture"
                  size="sm"
                  variant="outlined"
                  color="neutral"
                  sx={{
                    bgcolor: 'background.body',
                    position: 'absolute',
                    zIndex: 2,
                    borderRadius: '50%',
                    left: 85,
                    top: 180,
                    boxShadow: 'sm',
                  }}
                >
                  <EditRoundedIcon />
                </IconButton>
              </Stack>
              <Stack spacing={1} sx={{ flexGrow: 1 }}>
                <FormLabel>Name</FormLabel>
                <FormControl
                  sx={{
                    display: {
                      sm: 'flex-column',
                      md: 'flex-row',
                    },
                    gap: 2,
                  }}
                >
                  <Input size="sm" placeholder="First name" />
                  <Input size="sm" placeholder="Last name" />
                </FormControl>
              </Stack>
            </Stack>
            <FormControl>
              <FormLabel>Role</FormLabel>
              <Input size="sm" defaultValue="UI Developer" />
            </FormControl>
            <FormControl sx={{ flexGrow: 1 }}>
              <FormLabel>Email</FormLabel>
              <Input
                size="sm"
                type="email"
                startDecorator={<EmailRoundedIcon />}
                placeholder="email"
                defaultValue="siriwatk@test.com"
                sx={{ flexGrow: 1 }}
              />
            </FormControl>
            
            
          </Stack>
          <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
            <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button onClick={()=>
                {let valor = pedido.nome + " " +  pedido.sobrenome + " " +   pedido.email + " " + pedido.senha 
                    alert(valor)}}type="submit" size="sm" variant="solid">
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
       
        
      </Stack>
      
    </Box>
  );
}

