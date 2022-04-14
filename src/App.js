import React, { useState } from 'react';
import LoginForm from './components/LoginForm';

function App() {
  const admin = {
    email: "admin@admin.com",
    password: "admin123"
  }

  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const Login = details => {
    console.log(details);

    if (details.email == admin.email && details.password == admin.password) {
      console.log("Logged In");
      setUser({
        name: details.name,
        email: details.email
      });
    } else {
      console.log("Details don't match");
      setError("Details don't match.");
    }
  }

  const Logout = () => {
    console.log("Logout");
    setUser({
      name: "",
      email: ""
    });
  }

  return (
    <div className="App">
      {(user.email != "") ? (
        <div>
          <h2>Welcome, <span>{user.name}</span></h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : <LoginForm Login={Login} error={error} />}
    </div>
  );
}

export default App;
