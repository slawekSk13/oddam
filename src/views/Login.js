import React from 'react';
import {Title} from "../components/Title/Title";
import {Center} from "../components/Center/Center";
import {Label} from "../components/Label/Label";
import {Input} from "../components/Input/Input";

import {useFormik} from "formik";
import * as Yup from 'yup';
import {Button} from "../components/Button/Button";
import {Link} from "react-router-dom";

const Login = ({handleLogin}) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Wprowadzono adres w niewłaściwym formacie').required('Musisz podać swój adres e-mail'),
            password: Yup.string().min(6, 'Hasło musi mieć minimum 6 znaków').required('Proszę podać hasło')
        }),
        onSubmit: values => {
            handleLogin(values.email, values.password);
        }
    });

    return (
        <Center height='100vh' width='100%' vertical>
            <div style={{width: '30%'}}>
            <Title text='Zaloguj się' />
            <form className='login-form'>
                <div className='form-group' style={{width: '100%'}}>
                <Label text='Email' id='email'/>
                <Input placeholder='' name='email' value={formik.values.email} type='email'
                       onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && formik.errors.email} />
                {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>
                <div className='form-group' style={{width: '100%'}}>
                <Label text='Hasło' id='password'/>
                <Input placeholder='' name='password' value={formik.values.password} type='password'
                       onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.password && formik.errors.password} />
                    {formik.touched.password && formik.errors.password ? <div className='error'>{formik.errors.password}</div> : null}
                </div>
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