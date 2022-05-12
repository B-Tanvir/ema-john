import React, { useState} from 'react';
import './Login.css'
import {Link, useLocation, useNavigate} from "react-router-dom";
import {useSignInWithEmailAndPassword} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()
    const location = useLocation()

    const from = location.state?.from?.pathname || '/shop'

    const handlePasswordBlur = (e) => {
      setPassword(e.target.value)
    }

    const handleEmailBlur = (e) => {
      setEmail(e.target.value)
    }

    if (user) {
        navigate(from, {replace:true})
    }

    const handleLogin = (e) => {
        e.preventDefault()
        signInWithEmailAndPassword(email, password)
    };

    return (
        <div className={'form-container'}>
            <div className={'input-field'}>
                <h4 className={'login-text'}>Login</h4>
                <form onSubmit={handleLogin}>
                    <div className={'input-group'}>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="" id="email" required/>
                    </div>

                    <div className={'input-group'}>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="" id="password" required/>
                    </div>
                    <p>{error?.message}</p>
                    <input className={'form-submit'} type="submit" value="Login"/>
                </form>
                <p>
                    New to Ema-john? <Link className={'form-link'} to={'/signup'}>Create New Account</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;