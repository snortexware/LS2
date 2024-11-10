import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import Card from '@mui/joy/Card';
import CardActions from '@mui/joy/CardActions';
import CardOverflow from '@mui/joy/CardOverflow';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import Axios from 'axios';
import Cookies from 'js-cookie';  // Import js-cookie for cookie handling

export default function MyProfile() {
  const [pedido, setPedido] = React.useState({
    username: '',
    password: '',
    role: '',
    id: '',
  });
  
  const Avatar = require('../../assets/open.jpg');
  
  // Use the cookie to get the CSRF token
  const [csrfToken, setCsrfToken] = React.useState<string | null>(null);

  // Fetch the CSRF token on mount and store it in a cookie
  React.useEffect(() => {
    const fetchCsrfToken = async () => {
      try {
        // Make a request to the backend to fetch the CSRF token
        const response = await Axios.get('http://localhost:8080/api/csrf-token', { withCredentials: true });

        // If the backend responds with a CSRF token, set it in the state and store it in a cookie
        const token = response.data.token;
        setCsrfToken(token);
        Cookies.set('XSRF-TOKEN', token, { path: '', secure: true, sameSite: 'Strict' });  // Set the CSRF token in a cookie
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    };

    fetchCsrfToken();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setPedido({
      ...pedido,
      [name]: value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!csrfToken) {
      console.error('CSRF token is missing');
      return;
    }

    try {
      const response = await Axios.post(
        'http://localhost:8080/api/register',
        pedido,
        {
          headers: {
            'Content-Type': 'application/json',
            'X-XSRF-TOKEN': csrfToken,  
          },
          withCredentials: true,  
        }
      );
      console.log('User registered successfully:', response.data);
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <Box
      sx={{
        pb: { xs: 2, sm: 2, md: 0 },
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        marginLeft: "-40px",
        gap: 1,
      }}
    >
      <Box>
        <Box sx={{ overflow: 'auto', px: { xs: 1, md: 2 } }}>
          <Typography level="h2" component="h1" sx={{ mt: 1, mb: 2 }}>
            Meu Perfil
          </Typography>
        </Box>
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
              Customize seu perfil de usuário
            </Typography>
          </Box>
          <Divider />
          <Stack direction="row" spacing={3} sx={{ my: 1 }}>
            <Stack direction="column" spacing={1}>
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 120, borderRadius: '100%' }}
              >
                <img
                  src={Avatar}
                  loading="lazy"
                  alt="Avatar"
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
                <FormControl sx={{ display: { sm: 'flex-column', md: 'flex-row' }, gap: 2 }}>
                  <Input
                    name="username"
                    value={pedido.username}
                    onChange={handleChange}
                    size="sm"
                    placeholder="Nome"
                  />
                </FormControl>
              </Stack>
              <Stack direction="row" spacing={2}>
                <FormControl>
                  <FormLabel>Senha</FormLabel>
                  <Input
                    name="password"
                    value={pedido.password}
                    onChange={handleChange}
                    size="sm"
                    type="password"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Função</FormLabel>
                  <Input
                    name="role"
                    value={pedido.role}
                    onChange={handleChange}
                    size="sm"
                  />
                </FormControl>
              </Stack>
            </Stack>
          </Stack>
          <form onSubmit={handleSubmit}>
            <CardOverflow sx={{ borderTop: '1px solid', borderColor: 'divider' }}>
              <CardActions sx={{ alignSelf: 'flex-end', pt: 2 }}>
                <Button size="sm" variant="outlined" color="neutral">
                  Cancel
                </Button>
                <Button type="submit" size="sm" variant="solid">
                  Save
                </Button>
              </CardActions>
            </CardOverflow>
          </form>
        </Card>
      </Stack>
    </Box>
  );
}
