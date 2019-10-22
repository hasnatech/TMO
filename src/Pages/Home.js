import React, { Component } from 'react';
import { Link } from "react-router-dom";
import model  from "./Models";
import service from "./Service";

class Home extends Component {


   
    constructor()
    {
        super();

        
        //var _spPageContextInfo = undefined;
         if(_spPageContextInfo != undefined){
            //console.log(_spPageContextInfo);
          /*  model.getListViewItems(_spPageContextInfo.webAbsoluteUrl, 'TMO_Capabilities', '')
            .done(function (data) {
                var items = data.d.results;
                model.setResult(items);
            })
            .fail(
                function (error) {
                    console.log(JSON.stringify(error));
                });
        */
            //model.getListViewItems(_spPageContextInfo.webAbsoluteUrl, 'TMO%20Content', "?$filter=LinkTitle eq 'Home'", )
            model.getListViewItems(_spPageContextInfo.webAbsoluteUrl, 'TMO%20Content', "?$filter=Title eq 'Home'", )
            .done(function (data) {
                var items = data.d.results;
                console.log("content", items);
                model.setContent(items);
                //console.log(items[0])
            })
            .fail(
                function (error) {
                    console.log(JSON.stringify(error));
                });
        }
        
    }
    render() {
        
        return (
            <div>
                
                <div className="home_banner">
                </div>

                <h2>
                    We’re elevating our capabilities to enable transformation at Cargill.
            </h2>
                <p>Learn more about our teams, the way we work and the value we will deliver.</p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                    est
            laborum.</p>

                <p>Click below title to learn more</p>

                <div className="flex">
                    <div className="flex_50">
                        <Link to="/page/Transformational Leadership">
                            <div className="card leader_img" >
                                <div className="title">
                                    Transformational Leadership
                            </div>
                            </div>
                        </Link>
                    </div>
                    <div className="flex_50">
                        <div className="flex_col">
                            <div className="flex_100">
                                <Link to="/page/Transformational Enabler">
                                    <div className="card enabler_img">
                                        <div className="title">
                                            Transformational Enabler
                                    </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="flex_100">
                                <Link to="/page/Transformational Execution">
                                    <div className="card execution_img">
                                        <div className="title">
                                            Transformational Execution
                                    </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default Home;