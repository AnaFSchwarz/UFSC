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
import { MapStateToProp, connect  } from 'react-redux';
import { useSelector, useDispatch } from "react-redux";
//import { index } from '../Redux';
//redux mapStatetoProcs
//outro componente de texto mapDispatchToProps

const ANSWER = 'answer'
const INPUT = 'input'

const Historico = () => {
    const [input, setInput] = useState([])
    const [answer, setAnswer] = useState([])

    const historico = useSelector((state) => state.historico)
    
    const dispatch = useDispatch();

    const StyledTableCell = styled(TableCell)(({ theme }) => ({

            backgroundColor: theme.palette.action.hover,
            color: theme.palette.primary.main,
            fontSize: 20,
        }));
    /*useEffect(() => {
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
                    {historico.map(row=> (
                    <TableRow key={row}>
                        <StyledTableCell align="center">{row.input}</StyledTableCell>
                        <StyledTableCell align="left">{row.anser}</StyledTableCell>
                         <StyledTableCell>
                            <Button type='submit' className="button" color="secondary" variant="contained" >
                            Remover</Button>
                        </StyledTableCell>
                    </TableRow>                            
                    ))}                    
                 </TableBody>
            </Table>
        </TableContainer >
    )
};

export default Historico;