import React from 'react';
import {
    reduxForm,
} from 'redux-form';
import {
    Field as Wrap,
    Submit,
} from './../../Components/Form';
import {connect} from 'react-redux';

const form = (props) => {
    console.log(props);
    return (
        <form onSubmit={props.handleSubmit}>
            <Wrap>
                <Submit class={`button is-primary${props.calibrate.loading ? ' is-loading' : ''}`} value="Start"/>
            </Wrap>
        </form>
    );
}

export default connect(
    state => (state),
)(reduxForm({
    form: 'calibrate',
})(form));