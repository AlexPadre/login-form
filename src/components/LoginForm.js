import React, { useState } from 'react'

export default function LoginForm({ Login, name, email, password, error }) {
    // const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        Login(name, email, password);
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <h2>Login</h2>
                    {(error != "") ? (<div>{error}</div>) : ""}
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input 
                            onChange={e => ({ name: e.target.value })}
                            value={name} type="text" name="name" id="name"/>
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input 
                            onChange={e => ({email: e.target.value})}
                            value={email} type="email" name="email" id="email"/>
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input 
                            onChange={e => ({password: e.target.value})}
                            value={password}type="text" name="password" id="password"/>
                    </div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}
