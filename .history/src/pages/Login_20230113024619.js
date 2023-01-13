import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router';
import * as Yup from 'yup';

const Login = () => {

    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    // const dispatch = useDispatch();
    // const navigate = useNavigate();

    const handleLogin = (email: string, password: string) => {

    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },

        onSubmit: (values) => {
            setLoading(true);
            handleLogin(values.email, values.password);
            console.log(values)
        },
        validationSchema: Yup.object({
            email: Yup.string().trim().required('Email'),
            password: Yup.string().trim().required('Password'),
        }),
    });

    return (
        <div className='h-[100%] grid '>
            <div className="w-full max-w-md bg-white self-center rounded-lg border border-primaryBorder shadow-default py-10 px-16 bg-blue-300">
                <h1 className="text-2xl font-medium text-primary mt-4 mb-12 text-center">
                    Log in to your account 🔐
                </h1>
                <form onSubmit={formik.handleSubmit}>
                    <div className="space-y-4">
                        {formik.errors.email ? <div>{formik.errors.email} </div> : null}
                        <input
                            className="border-b border-gray-300 w-full px-2 h-8 rounded focus:border-blue-500"
                            id="email"
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.errors.password ? (
                            <div>{formik.errors.password} </div>
                        ) : null}
                        <input
                            className="border-b border-gray-300 w-full px-2 h-8 rounded focus:border-blue-500"
                            id="password"
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    <div className="text-danger text-center my-2" hidden={false}>
                        {message}
                    </div>

                    <div className="flex justify-center items-center mt-6">
                        <button
                            type="submit"
                            disabled={loading}
                            className="rounded border-gray-300 p-2 w-32 bg-blue-700 hover:bg-blue-500 text-white"
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
