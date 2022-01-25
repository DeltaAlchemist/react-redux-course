import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import { Header } from './Header';
import history from '../redux/history';


const App = () => {
    return(
        <div className="ui container">
            <Router history={history}>
                <Header />
                <Route path="/" exact component={StreamList} />
                <Route path="/Streams/new" exact component={StreamCreate} />
                <Route path="/Streams/edit/:id" exact component={StreamEdit} />
                <Route path="/Streams/delete" exact component={StreamDelete} />
                <Route path="/Streams/show" exact component={StreamShow} />
            </Router>
        </div>
    )
}

export default App