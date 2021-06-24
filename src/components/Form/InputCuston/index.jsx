import React from "react";
import PropTypes from 'prop-types';
import {ErrorMessage, Field} from "formik";

const InputCustom = ({id, Label, type, placeholder}) => {
    return (
        <>
            <div className="label__box">
                <i className='bx bx-user login__icon'/>
                <label className="login__label" htmlFor="login__input">{Label}</label>
            </div>

            <div className="login__box">
                <Field className="login__input" name={id} placeholder={placeholder} type={type}/>
            </div>
            <ErrorMessage className="Form-Error" component="span" name={id}/>

            {/*<div className="login__box">*/}
            {/*    <input id={id} type={type} placeholder={placeholder} className="login__input"/>*/}
            {/*</div>*/}
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
