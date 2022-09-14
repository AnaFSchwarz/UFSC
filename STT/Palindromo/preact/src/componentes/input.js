import React, { useEffect, useState } from 'react';
import theme from '../theme.ts';
import Alerta from './alerta';
import Verificador from './verificador';
import {Box, Button, TextField, Typography} from '@mui/material';


const ANSWER = 'answer';
const INPUT= 'input';

const Input = () => {
    
  const [input, setInput] = useState('');
  const [finalAnswer, setFinalAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (!localStorage.getItem(INPUT)) {
      localStorage.setItem(INPUT,JSON.stringify([]));
    };
  }, []);

  


  const handleSearch = () =>{
    if (input === '') {
      setErrorMessage ('erro');
      return false;
    }
    let resposta = ''
    if(Verificador(input)) {
      resposta = ' é um Palíndromo';   
    } else {
      resposta = ' não é um Palíndromo';        
    };
    updateLocalStorage(resposta);
    setFinalAnswer(input + resposta);    
    return true;
  };
      
  const updateLocalStorage = (re) => {
    console.log(localStorage.getItem(ANSWER));
    const itens = JSON.parse(localStorage.getItem(INPUT));
    const itensAtualizados = [...itens,{input, anser: re}];
    localStorage.setItem(INPUT,JSON.stringify(itensAtualizados));
  };

  return (
      <div>
      {errorMessage && (<Alerta/>)}<br/>   
      <div className="input"style={{textAlign: 'center', margin: theme.spacing(5)}}>
        <Box sx= {{alignItems: 'center'}}>
          <TextField fullwidth className='input'
            label="Digite uma palavra ou frase" 
            variant="standard" 
            sx={{ m: 1, width: '25ch' }}
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <Box sx={{ '& button': { m: 1 } }}>
            <Button type='submit' className="button" color="secondary" variant="contained" onClick={() => handleSearch()} >
              Enviar
            </Button>
          </Box>
        </Box>
      </div>       
      <div className='answer' style={{textAlign: 'center', margin: theme.spacing(5)}}>
        <Typography>{finalAnswer}</Typography>
      </div>                  
    </div>  
  );
};

export default Input;