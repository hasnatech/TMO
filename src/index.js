import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from "react-router-dom";
import './scss/App.scss';
import Home from './Pages/Home';
import Leadership from './Pages/Leadership';
import Enabler from './Pages/Enabler';
import Execution from './Pages/Execution';
import InnerLeadership from './Pages/InnerLeadership';
import Digital from './Pages/Digital';
import IBP from './Pages/IBP';
import Additional from './Pages/Additional';
import SupplyChain from "./Pages/SupplyChain";
import RD from './Pages/RD';
import OpModel from './Pages/OpModel';
import Commercial from './Pages/Commercial';
import CSSP from "./Pages/CSSP";
import CBS from "./Pages/CBS";
import Manufacturing from "./Pages/Manufacturing";



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
                    <Route path="/digital" component={Digital} />
                    <Route path="/ibp" component={IBP} />
                    <Route path="/supply" component={SupplyChain} />
                    <Route path="/rd" component={RD} />
                    <Route path="/opmodel" component={OpModel} />
                    <Route path="/commercial" component={Commercial} />
                    <Route path="/cssp" component={CSSP} />
                    <Route path="/cbs" component={CBS} />
                    <Route path="/manufacturing" component={Manufacturing} />
                    <Route path="/additional" component={Additional} />              
                </div>
            </Router>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("app"));