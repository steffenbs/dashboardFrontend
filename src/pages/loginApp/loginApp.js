import React, { Fragment, useState } from 'react';
import './loginApp.css';

const LoginPage = ({setAuth}) => {

    const [inputs, setInputs] = useState({
        email: "",
        password: ""
    });

    const { email, password } = inputs

    const onChange = e => {
        setInputs({ ...inputs, [e.target.name]: e.target.value});
    };

    const onSubmitForm = async(e) => {
        e.preventDefault()
        try {
            const body = {email, password}

            const response = await fetch('http://localhost:5000/auth/login', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(body)

            });

            const parseRes = await response.json()
            
            localStorage.setItem('Authorization', parseRes.token);
            setAuth(true)

        } catch (err) {
            console.log('didnt work')
        }
    }

    return (
        <Fragment>
            <div id='test'>
            <div id="loginBox">
                <h1>Welcome!</h1>
                <span>Please login</span>
                <form onSubmit={onSubmitForm} id="loginForm">
                    <input type="email" name="email" placeholder="email" value={email} onChange={e => onChange(e)}/>
                    <input type="password" name="password" placeholder="password" value={password} onChange={e => onChange(e)}/>
                    <button >submit</button>
                </form>
                
            </div>
            </div>
        </Fragment>
    )
};

export default LoginPage