import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamEdit from './Streams/StreamEdit';
import StreamDelete from './Streams/StreamDelete';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import { Header } from './Header';
import history from '../redux/history';


const App = () => {
    return(
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/Streams/new" exact component={StreamCreate} />
                <Route path="/Streams/edit" exact component={StreamEdit} />
                <Route path="/Streams/delete" exact component={StreamDelete} />
                <Route path="/Streams/show" exact component={StreamShow} />
            </Router>
        </div>
    )
}

export default App