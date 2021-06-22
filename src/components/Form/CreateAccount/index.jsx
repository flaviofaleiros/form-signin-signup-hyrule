import React from "react";

const CreateAccount = ({SetOpenCard}) => {
    return (
            <>
                <form action="" className="login__create" id="login-up">
                    <h1 className="login__title">Create Account</h1>

                    <div className="label__box">
                        <i className='bx bx-user login__icon'></i>
                        <label className="login__label" htmlFor="login__input">Username</label>
                    </div>
                    <div className="login__box">
                        <input type="text" placeholder="Enter username" className="login__input"/>
                    </div>

                    <div className="label__box">
                        <i className='bx bx-at login__icon'></i>
                        <label className="login__label" htmlFor="login__input">Email</label>
                    </div>
                    <div className="login__box">
                        <input type="text" placeholder="Enter email" className="login__input"/>
                    </div>

                    <div className="label__box">
                        <i className='bx bx-lock login__icon'></i>
                        <label className="login__label" htmlFor="login__input">Password</label>
                    </div>
                    <div className="login__box">
                        <input type="password" placeholder="Enter password" className="login__input"/>
                    </div>

                    <p href="#" className="login__button">Sing In</p>

                    <div>
                        <span className="login__account">Already have an Account? </span>
                        <span className="login__signup" id="sign-in" onClick={() => SetOpenCard('LoginRegister')}>Sign In</span>
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
