import * as React from 'react';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Stack } from '@mui/joy';
import RouterIcon from '@mui/icons-material/Router';
import BlockIcon from '@mui/icons-material/Block';
import ConstructionIcon from '@mui/icons-material/Construction';
import SyncAltIcon from '@mui/icons-material/SyncAlt';
import {Link as RouterLink} from "react-router-dom"


export default function CardInvertedColors() {
  return (
    <Stack  direction={"row"} spacing={5}>
      
      <Card
  component={RouterLink}
  to="/instalacao"
  variant="solid"
  color="success"
  invertedColors
  sx={{
    textDecoration: 'none', // Add this to remove underline
    textAlign: 'center',
    alignItems: 'center',
    width: 343,
    '--icon-size': '100px',
    width: 170
  }}
>
  <CardContent orientation="vertical">
    <CardContent>
      <Stack alignItems="center" spacing={1}>
        <RouterIcon />
        <Typography  level="body-lg">
          Instalações
        </Typography>
      </Stack>
      <Typography level="h2">
        432.6M
      </Typography>
    </CardContent>
  </CardContent>
</Card>


  
    <Card component={RouterLink} to="/cancelamento" variant="solid" color="danger" invertedColors sx={{textDecoration: 'none', textAlign: 'center',
        alignItems: 'center',
        maxWidth: 343,
        '--icon-size': '100px', width: 180}}>
      <CardContent orientation="vertical" sx={{alignItems: 'center',justifyContent: "center"}}>
        <CardContent>
          <Stack  alignItems="center" spacing={1}>
            <BlockIcon/>
          <Typography level="body-md">Cancelamentos</Typography>
          </Stack>
          <Typography level="h2" sx={{ alignItems: 'center', justifyContent: "center"}}>50</Typography>
        </CardContent>
      </CardContent>
    
    </Card>
    
    <Card component={RouterLink} to="/manutencao" variant="solid" color="primary" invertedColors sx={{ textDecoration: 'none',textAlign: 'center',
        alignItems: 'center',
        width: 343,
        '--icon-size': '100px',width: 180}}>
      <CardContent orientation="vertical">
        
        <CardContent>
        <Stack  alignItems="center" spacing={1}>
            <ConstructionIcon/>
          <Typography level="body-lg">Manutenções</Typography>
          </Stack>
          <Typography level="h2">30</Typography>
        </CardContent>
      </CardContent>
    
    </Card>
    <Card component={RouterLink} to="/mudarplano" variant="solid" color="primary" invertedColors sx={{textDecoration: 'none',textAlign: 'center',
        alignItems: 'center',
        '--icon-size': '100px',width: 180, backgroundColor: "#20615b"}}>
      <CardContent orientation="vertical">
        
        <CardContent>
        
        <Stack  alignItems="center"spacing={1}>
        <SyncAltIcon/>
          <Typography level="body-md">Mudanças de Plano</Typography>
          </Stack>
          <Typography level="h2">10</Typography>
        </CardContent>
      </CardContent>
    
    </Card>
    <Card component={RouterLink} to="/mudarplano" variant="solid" invertedColors sx={{textDecoration: 'none',textAlign: 'center',
        alignItems: 'center',
        width: 343,
        '--icon-size': '100px',width: 180, backgroundColor:"#f16821"}}>
      <CardContent orientation="vertical">
        <CardContent>
        <Stack  alignItems="center"spacing={1}>
        <SyncAltIcon/>
          <Typography level="body-md">Mudanças de Titularidade</Typography>
          </Stack>
          <Typography level="h2">10</Typography>
        </CardContent>
      </CardContent>
    
    </Card>
    
    </Stack>
  );
}
