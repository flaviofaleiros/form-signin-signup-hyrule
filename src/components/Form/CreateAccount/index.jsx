import React, { useState } from "react";
import {Formik, Form as FormikForm, Field, ErrorMessage} from 'formik';
import * as yup from "yup";
import TextError from "../TextError";

const CreateAccount = ({SetOpenCard}) => {

    const initialValues = {
        name: '',
        age: '',
        email: ''
    }

    const validations = yup.object().shape({
        user: yup.string().required('Usuário é obrigatório!'),
        email: yup.string().email('Informe um e-mail válido!').required('O e-mail é obrigatório!'),
        password: yup.string().min(8, 'Sua senha deve ter no mínimo 8 dígitos!').required('A Senha é obrigatória!')
    })

    const [list, setList] = useState([])

    const handleSubmit = values => {
        setList([...list, values])
    }

    return (
            <>
                <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
                    <FormikForm className="login__create" id="login-up">
                        <h1 className="login__title">Criar Conta</h1>

                        <div className="label__box">
                            <i className='bx bx-user login__icon'></i>
                            <label className="login__label" htmlFor="login__input">Usuário</label>
                        </div>
                        <div className="login__box">
                            <Field id="user" name="user" placeholder="Nome do usuário" className="login__input"/>
                            <ErrorMessage component={TextError} name={'user'} />
                        </div>


                        <div className="label__box">
                            <i className='bx bx-at login__icon'></i>
                            <label className="login__label" htmlFor="login__input">Email</label>
                        </div>
                        <div className="login__box">
                            <Field id="email" name="email" type="email" placeholder="Insira o email" className="login__input"/>
                            <ErrorMessage component={TextError} name={'email'} />
                        </div>


                        <div className="label__box">
                            <i className='bx bx-lock login__icon'></i>
                            <label className="login__label" htmlFor="login__input">Senha</label>
                        </div>
                        <div className="login__box">
                            <Field id="password" name="password" placeholder="Insira sua senha" className="login__input"/>
                            <ErrorMessage component={TextError} name={'password'} />
                        </div>


                        <p onClick={() => console.log('funfou')} className="login__button">Confirmar</p>

                        <div>
                            <span className="login__account">Já tem uma conta? </span>
                            <span className="login__signup" id="sign-in" onClick={() => SetOpenCard('LoginRegister')}>Entrar</span>
                        </div>
                    </FormikForm>
                </Formik>
            </>
    );
};

export default CreateAccount;
