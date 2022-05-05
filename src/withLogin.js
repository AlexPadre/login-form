import React from 'react';
import { connect } from 'react-redux';
import { logoutAction } from './actions';
import { Navigate } from "react-router-dom";

export default function withLogin(ChildComponent) {
  function ParentComponent({ userName, userEmail, logoutAction }) {
    return (
      <div>
        { userEmail !== "" ? (<ChildComponent userName={userName} logoutAction={logoutAction}/>) : <Navigate to="/login" /> }
      </div>
    )
  }
  const mapStateToProps = (state) => ({
    userName: state.name,
    userEmail: state.email
  })
  
  const mapDispatchToProps = {
    logoutAction: logoutAction
  }
  
  return connect(mapStateToProps, mapDispatchToProps)(ParentComponent);
}