import withLogin from '../withLogin';
import Nav from './Nav';

function Homepage({ userName, logoutAction }) {
    return (
        <div>
            <Nav />
            <h1>
                Welcome to myVlog, {userName}!
            </h1>
            <button onClick={logoutAction}>Logout</button>
        </div>
    )
}

export default withLogin(Homepage);