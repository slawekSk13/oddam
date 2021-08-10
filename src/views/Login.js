import React from 'react';
import {Title} from "../components/Title/Title";
import {Center} from "../components/Center/Center";
import {Label} from "../components/Label/Label";
import {Input} from "../components/Input/Input";

import {useFormik} from "formik";
import * as Yup from 'yup';
import {Button} from "../components/Button/Button";
import {Link} from "react-router-dom";

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Wprowadzono adres w niewłaściwym formacie').required('Muisz podać swój adres e-mail'),
            password: Yup.string().min(6, 'Hasło musi mieć minimum 6 znaków').required('Proszę podać hasło')
        }),
        onSubmit: values => {
            console.log(values)
        }
    });

    return (
        <Center height='100vh' width='100%' vertical>
            <div>
            <Title text='Zaloguj się' />
            <form className='login-form'>
                <Label text='EMAIL' id='email'/>
                <Input placeholder='' name='email' value={formik.values.email} type='email'
                       onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                <Label text='HASŁO' id='password'/>
                <Input placeholder='' name='password' value={formik.values.password} type='password'
                       onChange={formik.handleChange} onBlur={formik.handleBlur}/>
            </form>
                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Link to='/rejestracja' ><Button text='Załóż konto' /> </Link>
                    <Button text='Zaloguj się' border onClick={formik.handleSubmit}/>
                </div>
            </div>
        </Center>
    );
};

export {Login};