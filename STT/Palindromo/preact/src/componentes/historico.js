import React, { useEffect, useState } from 'react';
import {
    Table,
    TableCell,
    TableContainer,
    TableRow,
    TableBody,
    TableHead,
    styled,
    Paper
} from '@mui/material';
//redux mapStatetoProcs
//outro componente de texto mapDispatchToProps

const ANSWER = 'answer'
const INPUT = 'input'

const Historico = () => {
    const [input, setInput] = useState([])
    const [answer, setAnswer] = useState([])

    useEffect(() => {
        if (localStorage.getItem(INPUT)) {
            setInput(JSON.parse(localStorage.getItem(INPUT)));
        };
    }, [localStorage.getItem(INPUT)]);

    const palavra = input.slice(answer.length - 10);

    const StyledTableCell = styled(TableCell)(({ theme }) => ({

        backgroundColor: theme.palette.action.hover,
        color: theme.palette.primary.main,
        fontSize: 20,
    }));

    return (
        <TableContainer component={Paper}>
            <Table arial-label='simple table' >
                <TableHead>
                </TableHead>
                <TableBody >
                    {palavra.map(row=> (

                    <TableRow>
                        <StyledTableCell align="center">{row.input}</StyledTableCell>
                        <StyledTableCell align="left">{row.anser}</StyledTableCell>
                    </TableRow>                            
                    ))}                    
                 </TableBody>
            </Table>
        </TableContainer >
    )
}

export default Historico;