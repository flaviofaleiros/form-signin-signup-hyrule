import React from "react";

const CreateAccount = ({SetOpenCard}) => {
    return (
            <>
                <form action="" className="login__create" id="login-up">
                    <h1 className="login__title">Criar Conta</h1>

                    <div className="label__box">
                        <i className='bx bx-user login__icon'></i>
                        <label className="login__label" htmlFor="login__input">Usuário</label>
                    </div>
                    <div className="login__box">
                        <input type="text" placeholder="Insira nome de usuário" className="login__input"/>
                    </div>

                    <div className="label__box">
                        <i className='bx bx-at login__icon'></i>
                        <label className="login__label" htmlFor="login__input">Email</label>
                    </div>
                    <div className="login__box">
                        <input type="email" placeholder="Insira o email" className="login__input"/>
                    </div>

                    <div className="label__box">
                        <i className='bx bx-lock login__icon'></i>
                        <label className="login__label" htmlFor="login__input">Senha</label>
                    </div>
                    <div className="login__box">
                        <input type="password" placeholder="Insira sua senha" className="login__input"/>
                    </div>

                    <p href="#" className="login__button">Confirmar</p>

                    <div>
                        <span className="login__account">Já tem uma conta? </span>
                        <span className="login__signup" id="sign-in" onClick={() => SetOpenCard('LoginRegister')}>Entrar</span>
                    </div>

                    <div className="login__social">
                        <p href="#" className="login__social-icon"><i className='bx bxl-facebook'></i></p>
                        <p href="#" className="login__social-icon"><i className='bx bxl-twitter'></i></p>
                        <p href="#" className="login__social-icon"><i className='bx bxl-google'></i></p>
                    </div>
                </form>
            </>
    );
};

export default CreateAccount;
