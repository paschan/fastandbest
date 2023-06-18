import React from "react";

const Input = (props ) => {
    const{label,error,name,onChange,placeholder,type,disabled} =props
    const className = error? "form-control is-invalid":"form-control"
    return(
        <div className="form-input">
            <label className="form-labels">{label}</label>
            <input className={className} placeholder={placeholder} name={name} disabled={disabled} onChange={onChange} type={type} error="a"/>
            <div className="form--error-msg position-absolute">{error}</div>
        </div>
    )
}
export default Input;