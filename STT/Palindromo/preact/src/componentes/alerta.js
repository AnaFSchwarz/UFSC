import {useState, useEffect} from 'react';
import * as React from 'react';
import {
    Dialog,
    Button,
    DialogContent,
    DialogActions,
    DialogContentText,
    DialogTitle,
    Typography
} from '@mui/material';

function Alerta() {

    const [open, setOpen] = React.useState(true);
       
      const handleClose = () => {
        setOpen(false);
      };

    return (<div>
        <Dialog
            open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Alerta de campo vazio"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Necessário preencher o campo!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Fechar</Button>
          </DialogActions>
        </Dialog>
      </div>)
};

export default Alerta;
