import React from 'react';

export default (props) => (
    <div className={`field${props.children.length >= 2 ? ' has-add-ons' : ''}`}>
        {React.Children.map(props.children, (field) => (
            <div className="control">
                {field}
            </div>
        ))}
    </div>
);