import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from "react-router-dom";
import './scss/App.scss';
import Home from './Pages/Home';
import Leadership from './Pages/Leadership';
import Enabler from './Pages/Enabler';
import Execution from './Pages/Execution';
import InnerLeadership from './Pages/InnerLeadership';

function App() {
    return (
        <div className="TMO">
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/home" component={Home} />
                    <Route path="/leadership" component={Leadership} /> 
                    <Route path="/innerleadership/:id" component={InnerLeadership} /> 
                    <Route path="/enabler" component={Enabler} />
                    <Route path="/execution" component={Execution} />
                </div>
            </Router>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));