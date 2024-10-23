import MultiAxisLineChart from "./chart";
import CardInvertedColors from "./card";
import { Stack } from "@mui/joy";
import { useState } from "react";
import Typewriter from './typed';
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import PieChart from "./chartpie";

const Inicio = () => {
    const [user, setUser] = useState({ dev: 'Lucas', usuario: '' });
    const horario = new Date().getHours();
    let saudacao = '';

    switch (true) {
        case horario >= 0 && horario < 6:
            saudacao = "Tenha uma boa madrugada";
            break;
        case horario >= 6 && horario < 12:
            saudacao = "Tenha um bom dia";
            break;
        case horario >= 12 && horario < 18:
            saudacao = "Tenha uma boa tarde";
            break;
        default:
            saudacao = "Tenha uma boa noite";
    }

    return (
        
        
            <Box alignItems={"center"}sx={{
                
                flexDirection: "column",
    
}}>
            <Stack alignItems="center" direction={"column"} spacing={3}>
                <Typography level="h1" style={{height: '2em' }}>
                    <Typewriter text={saudacao + " " + user.dev} delay={40} />
                </Typography>
                <CardInvertedColors />
                <Stack alignItems="center" spacing={7} direction="row">
                <PieChart/>
                <MultiAxisLineChart />
            </Stack>
            </Stack>
           

            </Box>
          
         
    );
}

export default Inicio;
