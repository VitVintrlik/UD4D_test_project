import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useFormik} from "formik";
import validate from "../../utils/validateForm";
import useFetch from "../../utils/useFetch"
import "./loginForm.scss";

interface LoginFormProps {
    setContent(data: string): void;
}

interface FormValues {
    email: string;
    password: string;
}

/**
 * Since Material UI was recommended I used to build this simple login form,
 * form handling is done by formik and validation is executed onSubmit
 * @param props
 * @constructor
 */
export default function LoginForm(props: LoginFormProps) {
    const initialValues: FormValues = {email: '', password: ''}

    const formik = useFormik({
        initialValues: initialValues,
        validate,
        validateOnChange: false,
        validateOnBlur: false,
        onSubmit: values => {
            useFetch('login', 'POST', values).then(response => {
                if (response.status) {
                    props.setContent('Přihlášení úspěšné')
                    return
                }

                props.setContent('Špatné přihlašovací jméno nebo heslo')
            })
        },
    });

    return (
        <ThemeProvider theme={createTheme({palette: {mode: 'dark',}})}>
            <CssBaseline/>
            <div className="loginFormContainer">
                <main>
                    <form onSubmit={formik.handleSubmit}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Přihlašovací jméno"
                            name="email"
                            autoComplete="email"
                            color="primary"
                            autoFocus
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            helperText={formik.errors.email}
                            error={!!(formik.errors.email && formik.errors.email.length > 0)}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Heslo"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            color="primary"
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            helperText={formik.errors.password}
                            error={!!(formik.errors.password && formik.errors.password.length > 0)}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            className="submitButton"
                            sx={{mt: 3, mb: 2}}
                        >
                            Přihlásit se
                        </Button>
                    </form>
                </main>
            </div>
        </ThemeProvider>
    );
}