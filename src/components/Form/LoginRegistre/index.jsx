import React from "react";
import InputCustom from "../InputCuston";

const LoginRegister = ({SetOpenCard}) => {
    return (
        <>
            <form action="" className="login__registre" id="login-in">
                <h1 className="login__title">Sign In</h1>

                <InputCustom
                    id={'Username'}
                    Label={'Username'}
                    type={'text'}
                    placeholder={'Enter name'}

                />

                <InputCustom
                    id={'Password'}
                    Label={'Password'}
                    type={'password'}
                    placeholder={'Enter password'}

                />

                <p href="#" className="login__forgot">Forgot password?</p>

                <p href="#" className="login__button">Sign In</p>

                <div>
                    <span className="login__account">Don't have an Account? </span>
                    <span className="login__signin" id="sign-up" onClick={() => SetOpenCard('CreateAccount')}>Sign Up</span>
                </div>
            </form>
        </>
    );
};

export default LoginRegister;
