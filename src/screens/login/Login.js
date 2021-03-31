import React from 'react';
import { connect } from 'react-redux';
import LoginForm from '../../components/login-form/LoginForm';
import http from '../../service/http';
import {setError} from "../../reduce/user"

const Login = ({setError,user}) => {
    
    const submit = (value) => {
        http.post('/auth/token/login/',value).then((res)=>{
            localStorage.setItem('token',res.data.token)
        }).catch(({response})=>{
            if (response && response.status === 400){
                setError(response.data.detail)
            }
        })
    }

    return (
        <div className="m-auto col-md-6 col-sm-8">
            <LoginForm error={user.error} onSubmit={submit}/>
        </div>
    );
};
const msp = ({user}) => {
    return {user}
}
export default connect(
    msp,{setError}
)(Login);