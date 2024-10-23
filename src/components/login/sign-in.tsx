import * as React from 'react';
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
import ColorSchemeToggle from '../ColorSchemeToggle';
import { useEffect } from 'react';

// Import the local dark mode image
;

function SignInForm() {
  const { mode } = useColorScheme(); // Now within the CssVarsProvider context
  const [logo, setLogo] = React.useState("");
  const darkBackground = require('../assets/dark.jpg')
  const lightBackground = require('../assets/dark.jpg')
  // Update logo based on the current theme
  useEffect(() => {
    const logoDark = require('../assets/logo.png');
    const logoLight = require('../assets/logo2.png');
    setLogo(mode === 'dark' ? logoDark : logoLight);
  }, [mode]);

  return (
    <>
      <CssBaseline />
      <GlobalStyles
        styles={{
          ':root': {
            '--Form-maxWidth': '800px',
            '--Transition-duration': '0.4s', // set to `none` to disable transition
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

          {/* Form and other content */}
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
            <Divider>or</Divider>
            <Stack sx={{ gap: 4, mt: 2 }}>
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  const formData = new FormData(event.currentTarget);
                  const data = {
                    email: "john.c.calhoun@examplepetstore.com",
                    password: "123456",
                    persistent: formData.get('persistent') === 'on',
                  };
                  alert(JSON.stringify(data, null, 2));
                }}
              >
                <FormControl required>
                  <FormLabel>Login</FormLabel>
                  <Input type="email" name="email" />
                </FormControl>
                <FormControl required>
                  <FormLabel>Senha</FormLabel>
                  <Input type="password" name="password" />
                </FormControl>
                <Stack sx={{ gap: 4, mt: 2 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Checkbox size="sm" label="Remember me" name="persistent" />
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

      {/* Background Image Box */}
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
          backgroundImage: `url(${darkBackground})`, // Local image for light mode
          [theme.getColorSchemeSelector('dark')]: {
            backgroundImage:
              `url(${lightBackground})`, // Remote image for dark mode
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
