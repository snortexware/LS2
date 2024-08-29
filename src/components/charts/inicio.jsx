import SimpleChart from "./chart";
import CardInvertedColors from "./card";
import { Stack } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import { useState } from "react";
import Box from "@mui/joy/Box";
import { ReactTyped } from "react-typed";


const Inicio = () => {


    const [user, setUser] = useState({dev: 'Lucas', usuario: '', })


   

    return (
        
        <>
        <Stack spacing={5}>
        <h1>Teste {""} </h1>
        <ReactTyped
          strings={[user.dev]}
          typeSpeed={100}
          
          backSpeed={20}
          cursorChar=">"
          showCursor={true}
        />
        <CardInvertedColors></CardInvertedColors> 
        </Stack>
          
            <SimpleChart/>

        </>
    )
}

export default Inicio