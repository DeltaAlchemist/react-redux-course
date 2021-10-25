import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const PageOne = () => {
    return <div>Page One <br />
        <Link to="/pagetwo">Navigate to Page 2</Link>
    </div>
}

const PageTwo = () => {
    return <div>
        Page Two <br />
        <Link to="/">Navigate to Page 1</Link>
    </div>
}


const App = () => {
    return(
        <div>
            <BrowserRouter>
                <Route path="/" exact component={PageOne} />
                <Route path="/pagetwo" component={PageTwo} />
            </BrowserRouter>
        </div>
    )
}

export default App