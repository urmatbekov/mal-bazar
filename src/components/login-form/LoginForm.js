import React from 'react';
import {Field,reduxForm} from "redux-form"

const LoginForm = ({handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <Field className="form-control" name="username" component="input" type="text"/>
            </div>
            <div className="form-group">
                <Field className="form-control" name="password" component="input" type="password"/>
            </div>
            <div className="form-group text-right">
                <button className="btn btn-primary">Login</button>
            </div>
        </form>
    );
};

export default reduxForm({
    form:"login-form"
})(LoginForm);