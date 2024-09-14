import MultiAxisLineChart from "./chart";
import CardInvertedColors from "./card";
import { Stack } from "@mui/joy";
import Typography from "@mui/joy/Typography";
import { useState } from "react";
import React, { useEffect } from 'react';
import Typewriter from './typed';
import Box from "@mui/joy/Box";
import Input from "@mui/joy/Input";
import MediaCover from "./tp";
import { Spotify } from "react-spotify-embed";
import Button from "@mui/joy/Button"; // Importing Button component

const Inicio = () => {
    const [user, setUser] = useState({ dev: 'Lucas', usuario: '' });
    const [musica, setMusica] = useState("https://open.spotify.com/playlist/2jPKoO6gvIAurDEI0VTGly?si=fe73b177a8c84ae6");
    const [playlistUrl, setPlaylistUrl] = useState(''); // State for the new playlist URL

    const horario = new Date().getHours();
    let saudacao = '';

    // Greeting logic
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

    // Function to update the Spotify playlist
    const handlePlaylistChange = () => {
        if (playlistUrl) {
            setMusica(playlistUrl); // Update playlist URL
        }
    };

    return (
        <div style={{ maxWidth: "100%" }}>
            <Stack alignItems="flex-start" direction={"column"} spacing={4}>
                <h1>
                    <Typewriter text={saudacao + " " + user.dev} delay={40} />
                </h1>
                <CardInvertedColors />
                <Box sx={{ maxWidth: "60%", minWidth: "60%" }}>
                    <MultiAxisLineChart />
                </Box>
                <Input
                    variant="outlined"
                    placeholder="Digite o URL da Playlist"
                    size="sm"
                    required
                    value={playlistUrl}
                    onChange={(e) => setPlaylistUrl(e.target.value)} // Set the new URL
                />
                <Button onClick={handlePlaylistChange} variant="solid">Mudar Playlist</Button>
                
                <Spotify wide link={musica} />
            </Stack>
        </div>
    );
}

export default Inicio;
