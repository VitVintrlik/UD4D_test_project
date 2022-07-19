import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import {createTheme, ThemeProvider} from "@mui/material/styles";

export interface PopupProps {
    content: string;
    setContent(data: string): void;
}

/**
 * Popup takes string content and displays it.
 * Would be great if popups were displayed by some global hook, dispatcher or Redux
 * but for our small project I think this method is sufficient
 * @param props
 * @constructor
 */
export default function Popup(props: PopupProps) {
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
