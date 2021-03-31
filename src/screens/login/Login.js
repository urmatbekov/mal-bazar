import React from 'react';
import LoginForm from '../../components/login-form/LoginForm';

const Login = () => {

    const submit = (value) => {
        console.log(value)
    }

    return (
        <div className="m-auto col-md-6 col-sm-8">
            <LoginForm onSubmit={submit}/>
        </div>
    );
};

export default Login;