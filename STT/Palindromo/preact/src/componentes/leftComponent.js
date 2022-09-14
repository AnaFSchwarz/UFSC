import React from "react";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Divider,
    Typography  
  } from '@mui/material';
import Theme from "../theme.ts";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Historico from "./historico";

const Left = () => {
    return (
        <>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header">
            <Typography variant='h6'>O que é um Palíndromo?</Typography>
          </AccordionSummary >
          <AccordionDetails>
            <Typography>Palídromo é uma palavra ou frase que 
              pode ser lida da direita para esquerda ou vice-versa.
            </Typography>
          </AccordionDetails>
        </Accordion>
          <Divider />
        <Accordion>
          <AccordionSummary 
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content">
            <Typography variant='h6'>Histórico</Typography>
          </AccordionSummary>
          <AccordionDetails>
              <Historico/>
            </AccordionDetails>
        </Accordion>
        </>
    )
}

export default Left;