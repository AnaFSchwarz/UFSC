import {useState, useEffect} from 'react';
import * as React from 'react';
import {
  Grid,
  CssBaseline
} from '@mui/material';
import './Style.css';
import Input from './componentes/input';
import Left from './componentes/leftComponent';
import Verificador from './componentes/verificador';
import { Header } from './componentes/header.js';
import theme from './theme.ts';
import {ThemeProvider} from '@mui/system';
import {Provider} from 'react-redux';
import { Store } from './Store';
//separar componentes
//importar action no novo campo de texto
//connect, mapStatoToProps e mapDispatchToProps




const ANSWER = 'answer';
const INPUT= 'input';
//REdux no local de LocalStorage
function App() {
  const [input, setInput] = useState('');
  const [finalAnswer, setFinalAnswer] = useState('');
  const [errorMessage, setErrorMessage] = useState('');


  /*useEffect(() => {
    if (!localStorage.getItem(INPUT)) {
      localStorage.setItem(INPUT,JSON.stringify([]));
    };
  }, []);*/

  //Verfica se o campo foi preenchido
  
  /*const updateLocalStorage = (re) => {
    console.log(localStorage.getItem(ANSWER));
    const itens = JSON.parse(localStorage.getItem(INPUT));
    const itensAtualizados = [...itens,{input, anser: re}];
    localStorage.setItem(INPUT,JSON.stringify(itensAtualizados));
  };*/
  return ( 
    <Provider store = {Store}>
    <ThemeProvider theme = { theme }>
      <CssBaseline/>
        <Header/>
      <Grid container spacing = {2}>
        <Grid item xs={12} md={7}>  
          <Input/>
        </Grid>
        <Grid item xs={12} md={5}>
          <Left/> 
        </Grid>
      </Grid>
    </ThemeProvider>
    </Provider>
)};
export default App;

