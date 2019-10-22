import React, { Component } from 'react';
import data from '../assets/data'
import { Link } from "react-router-dom";
var cap_id;

var items;
var inner_id;

class SubPage extends Component {
    constructor(props) {
        items = [];
        super(props);
        const { id,index_id } = this.props.match.params     
        cap_id=id; 
        inner_id=index_id;
        //console.log(index_id)        
       // console.log(id)
        //console.log(data.TMO[cap_id].children[inner_id])        
        
    }


    render() {  
                         
        return (
            
            <div>
              
                <div className="enabler_banner"> </div>              
                      {              
                    data.TMO.slice(0,1).map((t1, i) => {
                        return (
                            <div key={i}>
                                    <div>{t1.children.title}</div>
                               
                                <h2 id="des" dangerouslySetInnerHTML={{ __html: data.TMO[cap_id].children[inner_id].title }}></h2>
                                <div id='content' className="flex">
                                    <div className="flex_25">
                                        <div  dangerouslySetInnerHTML={{ __html: data.TMO[cap_id].children[inner_id].content }} ></div>
                                    </div>
                                    <div className="flex_25">
                                        <div dangerouslySetInnerHTML={{ __html: data.TMO[cap_id].children[inner_id].resource}}></div>
                                    </div>
                                </div>
                               
                                <div id="contact" className="flex ">
                                <div className="flex_50">
                                    <div className="flex_25">
                                        <div dangerouslySetInnerHTML={{ __html: data.TMO[cap_id].children[inner_id].contact }}></div>
                                    </div>
                                    <div className="flex_25">

                                    </div>  
                                    </div>   
                                </div>
                            </div>
                        );
                    })
                   
                }
            </div>

        );
    }
}
export default SubPage;



