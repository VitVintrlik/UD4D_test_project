interface FormValues {
    email: string;
    password: string;
}

const validate = (values: FormValues): object|FormValues => {
    const errors: FormValues = {email: '', password: ''};
    if (values.password.length < 6) {
        errors.password = 'Heslo musí být delší než 6 znaků';
    }

    //This regex could have been shorter but it was the most suitable i found
    if (!/^(?=[^@]{5,}@)([\w-]*[a-zA-Z0-9_]@[\w-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z]*[a-zA-Z])$/i.test(values.email)) {
        errors.email = 'Neplatné přihlašovací jméno';
    }

    if(!errors.email && !errors.password){
        return {}
    }

    return errors
};

export default validate