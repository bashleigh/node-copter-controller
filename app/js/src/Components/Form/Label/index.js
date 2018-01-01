import React from 'react';

export default (props) => (
    <label className="label" htmlFor={props.htmlFor ? props.htmlFor : ''}>{props.text}</label>
);