import React from "react";
import {Formik, Form as FormikForm} from 'formik'
import * as yup from 'yup'

import InputCustom from "../InputCuston";

const validations = yup.object().shape({
    email: yup.string().email('Informe um email válido!').required('O e-mail é obrigatório!'),
    password: yup.string().min(8, 'Sua senha deve ter no mínimo 8 dígitos!').required('A Senha é obrigatória!')
})

const initialValues = {
    email: '',
    password: ''
}

const LoginRegister = ({SetOpenCard}) => {

    const handleSubmit = event => {
        console.log('Login realizado com sucesso');

    }
    return (
        <>
            <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validations}>
                <FormikForm action="" className="login__registre" id="login-in">
                    <h1 className="login__title">Entrar no Dojo Hyrule</h1>

                    <InputCustom
                        id={'email'}
                        Label={'E-mail'}
                        type={'email'}
                        placeholder={'Insira seu email'}
                    />

                    <InputCustom
                        id={'password'}
                        Label={'Senha'}
                        type={'password'}
                        placeholder={'Insira sua senha'}

                    />

                    <p href="#" className="login__forgot">Esqueceu a senha?</p>

                    <p className="login__button" onClick={handleSubmit}>Conecte-se</p>

                    <div>
                        <span className="login__account">Não tem uma conta? </span>
                        <span className="login__signin" id="sign-up" onClick={() => SetOpenCard('CreateAccount')}>Inscrever-se</span>
                    </div>
                </FormikForm>
            </Formik>


        </>
    );
};

export default LoginRegister;
