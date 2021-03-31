import React from 'react';
import LoginForm from '../../components/login-form/LoginForm';
import http from '../../service/http';

const Login = () => {

    const submit = (value) => {
        http.post('/auth/token/login/',value).then((res)=>{
            localStorage.setItem('token',res.data.token)
        })
    }

    return (
        <div className="m-auto col-md-6 col-sm-8">
            <LoginForm onSubmit={submit}/>
        </div>
    );
};

export default Login;