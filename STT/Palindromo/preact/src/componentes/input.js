import React, { useEffect, useState } from 'react';
import theme from '../theme.ts';
import Alerta from './alerta';
import Verificador from './verificador';
import {Box, Button, TextField, Typography} from '@mui/material';
import { useSelector, useDispatch, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import historicoRespostas from '../Redux/Actions'

const ANSWER = 'answer';
const INPUT= 'input';

const Input = ({add}) => {

  const [input, setInput] = useState('');
  const [finalAnswer, setFinalAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

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
    add({input, anser: resposta, id: new Date().getTime()});
    setFinalAnswer(input + resposta);
    setInput('');
    return true;
  };

  
  /*const updateLocalStorage = (re) => {
    console.log(localStorage.getItem(ANSWER));
    const itens = JSON.parse(localStorage.getItem(INPUT));
    const itensAtualizados = [...itens,{input, anser: re}];

    localStorage.setItem(INPUT,JSON.stringify(itensAtualizados));
  };
  useEffect(() => {
    if (!localStorage.getItem(INPUT)) {
      localStorage.setItem(INPUT,JSON.stringify([]));
    };
  }, []);

  const historico = useSelector((state) => state.notes);
  const dispatch = useDispatch();

  const addHistorico = (finalAnswer) => {
    dispatch(historicoRespostas(finalAnswer));
  };*/

  return (
      <div>
      {errorMessage && (<Alerta/>)}<br/>   
      <div className="input"style={{textAlign: 'center', margin: theme.spacing(5)}}>
        <Box sx= {{alignItems: 'center'}}>
          <TextField className='input'
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

const mapDispatchToProps = dispatch => ({
  add: historico => dispatch(historicoRespostas.add(historico))
});

export default connect(null, mapDispatchToProps)(Input);