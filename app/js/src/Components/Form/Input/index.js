import React from 'react';
import Label from './../Label';

export default ({
                    input,
                    label,
                    type,
                    meta: { touched, error, warning }
                }) => (
    <div>
        {label && label !== null ? <Label htmlFor={name} text={label}/> : null}
        <input {...input} placeholder={label} type={type} className={`input${touched && error ? ' is-danger' : ''}`} />

        {touched &&
        ((error && <p className="help is-danger">{error}</p>) ||
        (warning && <p className="help is-danger">{warning}</p>))}
    </div>
);

