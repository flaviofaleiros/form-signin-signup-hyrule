import React, {useState} from "react";

import './style.css';
import image from '../../assets/img/Hylian-shield.png';
import LoginRegister from "../Form/LoginRegistre";
import CreateAccount from "../Form/CreateAccount";

const Login = () => {
    const [openCard, SetOpenCard] = useState('LoginRegister');

    return (
        <>
            <div className="login">
                <div className="login__content">

                    <div className="login__img">
                        <img src={image} alt="Escudo do Time Hyrule"/>
                    </div>

                    <div className="login__forms">
                        {openCard === 'LoginRegister' &&
                            <LoginRegister SetOpenCard={SetOpenCard} />
                        }
                        {openCard === 'CreateAccount' &&
                            <CreateAccount SetOpenCard={SetOpenCard} />
                        }
                    </div>

                </div>

            </div>
        </>
    );
};

export default Login;
