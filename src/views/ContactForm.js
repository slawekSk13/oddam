import React, {useState} from "react";

import {Input} from '../components/Input/Input';
import {Label} from '../components/Label/Label';
import {Button} from "../components/Button/Button";
import {Title} from "../components/Title/Title";

import {useFormik} from "formik";
import * as Yup from 'yup';

import {postToAPI} from "../utilities/post";

const ContactForm = () => {
    const [success, setSuccess] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            name: Yup.string().matches(/^\S*$/, 'Imię nie może zawierać spacji').required('Muisz podać swoje imię'),
            email: Yup.string().email('Wprowadzono adres w niewłaściwym formacie').required('Muisz podać swój adres e-mail'),
            message: Yup.string().min(120, 'Wiadomość musi być dłuższa niż 120 znaków').required('Proszę wpisać wiadomość')
        }),
        onSubmit: values => {
            postToAPI(values);
            formik.resetForm();
            setSuccess(true);
           const timeout = setTimeout(() => {
                setSuccess(false);
                clearTimeout(timeout);
            }, 5000);
        }
    });

    return (
        success ? <Title text='Dziękujemy za kontakt!'/> :
    <>
        <Title text='Skontaktuj się z nami'/>
        <form onSubmit={formik.handleSubmit} style={{textAlign: 'right'}}>
            <div className='contact-form-group'>
                <div className='form-group'>
                    <Label text='Wpisz swoje imię' id='name'/>
                    <Input placeholder='Krzysztof' name='name' value={formik.values.name} type='text'
                           onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.name && formik.errors.name}/>
                    {formik.touched.name && formik.errors.name ? <div className='error'>{formik.errors.name}</div> : null}
                </div>
                <div className='form-group'>
                    <Label text='Wpisz swój email' id='email'/>
                    <Input placeholder='abc@xyz.pl' name='email' value={formik.values.email} type='email'
                           onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.email && formik.errors.email}/>
                    {formik.touched.email && formik.errors.email ? <div className='error'>{formik.errors.email}</div> : null}
                </div>
                <Label text='Wpisz swoją wiadomość' id='message'/>
                <Input
                    placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                    name='message' value={formik.values.message}
                    onChange={formik.handleChange} onBlur={formik.handleBlur} error={formik.touched.message && formik.errors.message} area/>
                {formik.touched.message && formik.errors.message ?
                    <div className='errorArea'>{formik.errors.message}</div> : null}
            </div>

            <Button text='Wyślij' width={'25%'} onClick={formik.handleSubmit} border/>
        </form>
        <div style={{position: 'absolute', width: '150%', right: '110px', textAlign: 'right'}}>



        </div>
    </>

    )
}

export {ContactForm}