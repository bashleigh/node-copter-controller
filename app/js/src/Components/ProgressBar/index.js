import React from 'react';

export default (props) => (
    <progress
        className={`progress${props.value >= 70 && props.value < 90 ? ' is-warning' : (props.value >= 90) ? ' is-danger' : ' is-success'}`}
        value={props.value}
        max="100">
        {props.value}%
    </progress>
);