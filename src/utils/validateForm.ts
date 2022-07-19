interface FormValues {
    email: string;
    password: string;
}

const validate = (values: FormValues): object|FormValues => {
    const errors: FormValues = {email: '', password: ''};
    if (values.password.length < 6) {
        errors.password = 'Heslo musí být delší než 6 znaků';
    }

    //This regex could have been shorter but it was the most suitable I found
    if (!/^(?=[^@]{5,}@)([\w-]*[a-z0-9_]@[\w-]*[a-z0-9]\.[a-z][a-z]*[a-z])$/i.test(values.email)) {
        errors.email = 'Neplatné přihlašovací jméno';
    }

    if(!errors.email && !errors.password){
        return {}
    }

    return errors
};

export default validate