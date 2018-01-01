import React from 'react';

export default (props) => (
    <div>
        <input name={props.name ? props.name : 'submit'}
               type="submit" className={props.className ? props.className : 'button is-primary'}
               value={props.value ? props.value : 'Submit'}
        />
    </div>
);

