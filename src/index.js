import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from "react-router-dom";
import './scss/App.scss';
import Home from './Pages/Home';
import Page from './Pages/Page';
import SubPage from './Pages/SubPage';



function App() {
    return (
        <div className="TMO">
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/page/:topic_no" component={Page} />                                                                                                                                                   
                    <Route path="/subpage/:id/:index_id" component={SubPage} />                                                                                               
                </div>
            </Router>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));