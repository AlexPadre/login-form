import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../actions';

function LoginForm({ loginAction, userError, userEmail }) {
    const [details, setDetails] = useState({name: "", email: "", password: ""});

    const submitHandler = e => {
        e.preventDefault();

        loginAction(details.name, details.email, details.password);
    }
    console.log(userError);
    if (userEmail) {
        return <Navigate to="/" />;
    }
    return (
        <div className="w-full max-w-xs">
            <form onSubmit={submitHandler} className="bg-white rounded px-8 pt-6 pb-8 mb-4">
                <div>
                    {(userError != "") ? 
                        <p className="text-rose-600">
                            Oops. Incorrect password or/and email.
                        </p>
                    : ""}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2" >
                            Name:
                        </label>
                        <input 
                            onChange={e => setDetails({...details, name: e.target.value })}
                            value={details.name} type="text" name="name" id="name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2" >
                            Email:
                        </label>
                        <input 
                            onChange={e => setDetails({...details, email: e.target.value })}
                            value={details.email} type="email" name="email" id="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2" >
                            Password:
                        </label>
                        <input 
                            onChange={e => setDetails({...details, password: e.target.value })}
                            value={details.password} type="text" name="password" id="password"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"/>
                    </div>
                    <div className="flex items-center justify-between pt-5">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                            Sign In
                        </button>
                        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Go Home
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    loginAction: (name, email, password) => {
        dispatch(loginAction(name, email, password));
    }
});

const mapStateToProps = (state) => ({
    userEmail: state.email,
    userError: state.error
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);