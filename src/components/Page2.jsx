import React from 'react'
import Nav from './Nav'
import withLogin from '../withLogin';

function Page2() {
    return (
        <div>
            <Nav />
            testeste
        </div>
    )
}

export default withLogin(Page2);
