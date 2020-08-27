import React, { Fragment, useState, useEffect } from 'react';
import './mainApp.css';

const Main = ({ setAuth }) => {

    const [name, setName] = useState("")

    async function getName() {
        try {
            const response = await fetch('http://localhost:5000/dashboard/', {
                method: 'GET',
                headers: {Authorization: localStorage.Authorization },
            });

            const parseRes = await response.json()
            
            setName(parseRes.name)

        } catch (err) {
            console.log(err.message)
        }
    };

    const logout = (e) => {
        e.preventDefault()
        localStorage.removeItem('Authorization')
        setAuth(false)
    }


    useEffect(() => {
        getName()
    }, [])

    return (
        <Fragment>
            <div id="dashboard">
            <h1>Main page {name}</h1>
            <button onClick={e => logout(e)} >Logout</button>
            </div>
        </Fragment>
    )
}

export default Main