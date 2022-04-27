import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import { connect } from 'react-redux';
import { loginAction } from './actions';
import { logoutAction } from './actions';

function App({ loginAction, logoutAction, userName, userEmail, userError }) {
  console.log(userName, userEmail, userError);
  return (
    <div className="App">
      {(userEmail != "") ? (
        <div>
          <h2>Welcome, <span>{userName}</span></h2>
          <button onClick={logoutAction}>Logout</button>
        </div>
      ) : <LoginForm loginAction={loginAction} error={userError} />}
    </div>
  );
}

const mapStateToProps = (state) => ({
  userName: state.name,
  userEmail: state.email,
  userError: state.error
})

const mapDispatchToProps = {
  loginAction: loginAction,
  logoutAction: logoutAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
