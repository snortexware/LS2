import React, { useState, useEffect } from 'react';
import { CssVarsProvider, useColorScheme } from '@mui/joy/styles';
import GlobalStyles from '@mui/joy/GlobalStyles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Divider from '@mui/joy/Divider';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Link from '@mui/joy/Link';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import Stack from '@mui/joy/Stack';
import { useNavigate } from 'react-router-dom'; // To handle redirection
import ColorSchemeToggle from '../sidebar-others/ColorSchemeToggle'; // Assuming you have this component

function SignInForm() {
  const { mode } = useColorScheme();
  const navigate = useNavigate(); // For redirection to home

  const [email, setEmail] = useState(""); // Store the email input
  const [password, setPassword] = useState(""); // Store the password input
  const [error, setError] = useState(""); // Error message state
  const [logo, setLogo] = useState(""); // Store the logo based on theme

  const darkBackground = require('../assets/dark.jpg');
  const lightBackground = require('../assets/dark.jpg');

  // Preset login credentials (simulated credentials)
  const presetEmail = "teste@test.com";
  const presetPassword = "123456";

  // Automatically update the logo based on the current theme
  useEffect(() => {
    const logoDark = require('../assets/logo.png');
    const logoLight = require('../assets/logo2.png');
    setLogo(mode === 'dark' ? logoDark : logoLight);
  }, [mode]);

  // Handle form submission and simulate login
  const handleSubmit = (event) => {
    event.preventDefault();

    // Check credentials
    if (email === presetEmail && password === presetPassword) {
      // Simulate login and redirect to home page "/"
      navigate('/');
    } else {
      // Show error if credentials are incorrect
      setError("Invalid email or password");
    }
  };

  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s',
          },
        }}
      />
      <Box
        sx={(theme) => ({
          width: { xs: '100%', md: '50vw' },
          transition: 'width var(--Transition-duration)',
          position: 'relative',
          display: 'flex',
          justifyContent: 'flex-end',
          backdropFilter: 'blur(12px)',
          backgroundColor: 'rgba(255 255 255 / 0.2)',
          [theme.getColorSchemeSelector('dark')]: {
            backgroundColor: 'rgba(19 19 24 / 0.4)',
          },
        })}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh',
            width: '100%',
            px: 2,
          }}
        >
          <Box
            component="header"
            sx={{ py: 3, display: 'flex', justifyContent: 'space-between' }}
          >
            <Box sx={{ gap: 2, display: 'flex', alignItems: 'center' }}>
              <img
                style={{ justifyContent: 'center', width: '170px' }}
                src={logo}
                alt="Logo"
              />
            </Box>
            <ColorSchemeToggle />
          </Box>

          {/* Login form */}
          <Box
            component="main"
            sx={{
              my: 'auto',
              py: 2,
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              width: 400,
              maxWidth: '100%',
              mx: 'auto',
              borderRadius: 'sm',
              '& form': {
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
              },
            }}
          >
            <Stack sx={{ gap: 4, mb: 2 }}>
              <Stack sx={{ gap: 1 }}>
                <Typography component="h1" level="h3">
                  Entrar
                </Typography>
                <Typography level="body-sm">
                  Novo na empresa?{' '}
                  <Link href="#replace-with-a-link" level="title-sm">
                    Peça seu cadastro!
                  </Link>
                </Typography>
              </Stack>
            </Stack>
            <Divider>ou</Divider>
            <Stack sx={{ gap: 4, mt: 2 }}>
              <form onSubmit={handleSubmit}>
                <FormControl required>
                  <FormLabel>Login</FormLabel>
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Digite seu email"
                  />
                </FormControl>
                <FormControl required>
                  <FormLabel>Senha</FormLabel>
                  <Input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Digite sua senha"
                  />
                </FormControl>
                {error && (
                  <Typography color="danger" level="body-sm">
                    {error}
                  </Typography>
                )}
                <Stack sx={{ gap: 4, mt: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox size="sm" label="Lembrar" />
                    <Link level="title-sm" href="#replace-with-a-link">
                      Esqueceu sua senha?
                    </Link>
                  </Box>
                  <Button type="submit" fullWidth>
                    Entrar
                  </Button>
                </Stack>
              </form>
            </Stack>
          </Box>

          <Box component="footer" sx={{ py: 3 }}>
            <Typography level="body-xs" sx={{ textAlign: 'center' }}>
              © Gr@mnet {new Date().getFullYear()}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Background image box */}
      <Box
        sx={(theme) => ({
          height: '100%',
          position: 'fixed',
          right: 0,
          top: 0,
          bottom: 0,
          left: { xs: 0, md: '50vw' },
          backgroundColor: 'background.level1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transition:
            'background-image var(--Transition-duration), left var(--Transition-duration) !important',
          transitionDelay: 'calc(var(--Transition-duration) + 0.1s)',
          backgroundRepeat: 'no-repeat',
          backgroundImage: `url(${darkBackground})`,
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage: `url(${lightBackground})`,
          },
        })}
      />
    </>
  );
}

export default function JoySignInSideTemplate() {
  return (
    <CssVarsProvider>
      <SignInForm />
    </CssVarsProvider>
  );
}
