import React from "react";
import PropTypes from 'prop-types';

const InputCustom = ({Id, Label, type, placeholder}) => {
    return (
        <>
            <div className="label__box">
                <i className='bx bx-user login__icon'/>
                <label className="login__label" htmlFor="login__input">{Label}</label>
            </div>

            <div className="login__box">
                <input id={Id} type={type} placeholder={placeholder} className="login__input"/>
            </div>
        </>
    );
};

InputCustom.propTypes = {
    Id: PropTypes.string,
    Label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};

export default InputCustom;
