import React from 'react';
import { connect } from 'react-redux';
import {Field,reduxForm} from "redux-form"

const LoginForm = ({handleSubmit,user }) => {
    return (
        <form onSubmit={handleSubmit}>
            {user.error !== null &&
            <span>{user.error}</span>
            }
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

const msp = ({user}) => {
    return {user}
}

export default reduxForm({
    form:"login-form"
})(connect(msp)(LoginForm));