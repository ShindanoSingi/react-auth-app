import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';

const Login = () => {

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const handleLogin = (email: string, password: string) => {

    // };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        onSubmit: (values) => {
            setLoading(true);
            handleLogin(values.email, values.password);
        },
        validationSchema: Yup.object({
            email: Yup.string().trim().required('Email'),
            password: Yup.string().trim().required('Password'),
        }),
    });

    return (
        <div className='h '>
            <div>

            </div>
        </div>
    )
}

export default Login
