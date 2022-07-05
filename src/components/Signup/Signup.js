import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import auth from "../../firebase.init";
import {useCreateUserWithEmailAndPassword} from "react-firebase-hooks/auth";

const Signup = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const [createUserWithEmailAndPassword, user] =  useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleEmailBlur = (e) => {
      setEmail(e.target.value)
    }

    const handlePasswordBlur = (e) => {
      setPassword(e.target.value)
    }

    const handleConfirmPasswordBlur = (e) => {
      setConfirmPassword(e.target.value)
    }

    if (user) {
        navigate('/shop')
    }

    const handleCreateUser = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setError('Password does not match')
            return
        }
        if (password < 6) {
            setError('password is too short')
            return;
        }

        createUserWithEmailAndPassword(email, password)

    };
    return (
        <div className={'form-container'}>
            <div className={'input-field'}>
                <h4 className={'login-text'}>Login</h4>
                <form onSubmit={handleCreateUser}>
                    <div className={'input-group'}>
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
                    </div>

                    <div className={'input-group'}>
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
                    </div>

                    <div className={'input-group'}>
                        <label htmlFor="confirm-password">Confirm password</label>
                        <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id=""/>
                    </div>
                    {
                        error && <p style={{color: 'red'}}>{error}</p>
                    }
                    <input className={'form-submit'} type="submit" value="Sign up" required/>
                </form>
                <p>
                    Already have an account? <Link className={'form-link'} to={'/login'}>Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;