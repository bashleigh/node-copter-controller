import React from 'react';
import {
    reduxForm,
    Field,
} from 'redux-form';
import {
    Input,
    Field as Wrap,
    Submit,
    Validation,
} from './../../Components/Form';
import {connect} from 'react-redux';

const form = (props) => (
    <form onSubmit={props.handleSubmit}>
        <Wrap>
            <Field
                label="Copter name"
                name="copter.name"
                type="text"
                component={Input}
                validate={Validation.required}
            />
        </Wrap>
        <Wrap>
            <Field
                label="ESCs"
                name="copter.ESCs"
                type="number"
                component={Input}
                validate={Validation.required}
            />
        </Wrap>
        <Wrap>
            <Submit value="Save"/>
        </Wrap>
    </form>
);

export default connect(
    state => ({
        initialValues: state.settings,
    }),
)(reduxForm({
    form: 'settings',
})(form));