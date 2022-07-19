import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {createTheme, ThemeProvider} from "@mui/material/styles";

export interface Popup {
    content: string;

    setContent(data: string): void;
}

export default function SimpleDialog(props: Popup) {
    const handleClose = () => {
        props.setContent('');
    };

    return (
        <ThemeProvider theme={createTheme({palette: {mode: 'dark',}})}>
            <Dialog onClose={handleClose} open={true}>
                <DialogContent>
                    <DialogContentText>
                        {props.content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} autoFocus>
                        OK
                    </Button>
                </DialogActions>
            </Dialog>
        </ThemeProvider>
    );
}
