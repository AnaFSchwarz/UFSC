import React, { useEffect, useState } from 'react';
import {
    Table,
    TableCell,
    TableContainer,
    TableRow,
    TableBody,
    TableHead,
    styled,
    Paper,
    Button
} from '@mui/material';
import { connect  } from 'react-redux';
import historicoRespostas from '../Redux/Actions'
//redux mapStatetoProcs
//outro componente de texto mapDispatchToProps

const ANSWER = 'answer'
const INPUT = 'input'

const Historico = ({remove, historico}) => {

    const StyledTableCell = styled(TableCell)(({ theme }) => ({

            backgroundColor: theme.palette.action.hover,
            color: theme.palette.primary.main,
            fontSize: 20,
        }));
    
        const handleAlterate = (id) =>{
            remove({id});
            return true;
        }

        const itens = historico.slice(historico.length - 10);

    /*const [input, setInput] = useState([])
    const [answer, setAnswer] = useState([])
    useEffect(() => {
        if (localStorage.getItem(INPUT)) {
            setInput(JSON.parse(localStorage.getItem(INPUT)));
        };
    }, [localStorage.getItem(INPUT)]);

    const palavra = input.slice(answer.length - 10);*/
    return (
        <TableContainer component={Paper}>
            <Table arial-label='simple table' >
                <TableHead>
                </TableHead>
                <TableBody >
                    {itens.map (row => (
                    <TableRow key={row.id}>
                        <StyledTableCell align="center">{row.input}</StyledTableCell>
                        <StyledTableCell align="left">{row.anser}</StyledTableCell>
                        <StyledTableCell>
                        <Button type='submit' className="button" color="secondary" variant="contained" 
                             onClick={() => handleAlterate(row.id)}>
                            Remover</Button>
                        </StyledTableCell>                      
                    </TableRow>                            
                    ))}                    
                 </TableBody>
            </Table>
        </TableContainer >
    )
};

const mapStateToProp = state => {
    return {historico: state.index.historico}
 }//retorna JSON

const mapDispatchToProps = dispatch => ({
  remove: historico => dispatch(historicoRespostas.remove(historico))
})

export default connect (mapStateToProp, mapDispatchToProps)(Historico);