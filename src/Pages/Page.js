import React, { Component } from 'react';
import { Link } from "react-router-dom";
import data from '../assets/data'
import model from "./Models";

var items;
var t_no;
var content;
class Page extends Component {

    constructor(props) {
        super(props);
        items = [];
        const { topic_no } = this.props.match.params
        t_no = 0;
        this.state = { content,item }; 
        //models.setResult(); 
        //models.setContent();  
        //items = data.TMO[t_no].children;
        //items = models.getResult(topic_no); 
        //content = models.getContent(topic_no); 
        //console.log("content = " , content)
        //models.getResult(data.TMO[t_no])

        model.getListViewItems(_spPageContextInfo.webAbsoluteUrl, 'TMO%20Content', "?$filter=Title eq '"+ topic_no +"'", )
        .done(function (data) {
            content = data.d.results;
            console.log("content", content);
        })
        .fail(
            function (error) {
                console.log(JSON.stringify(error));
            });

        model.getListViewItems(_spPageContextInfo.webAbsoluteUrl, 'TMO_Capabilities', "?$filter=Group eq '"+ topic_no +"'", )
        .done(function (data) {
            items = data.d.results;
            console.log("items", items);
        })
        .fail(
            function (error) {
                console.log(JSON.stringify(error));
            });

    }

    render(){
    console.log("render = " , items)
    var children = [];
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        let item = <div className=" flex_25" key={index}>
            <Link to={"/subpage/"+element.GUID}>
                <div className="panel">
                    <div className={element.Title.toString().toLowerCase().split(" ").join("_")}>                      
                        <div className="item">
                            {element.Title}                                         
                        </div>
                    </div>
                </div>
               
            </Link>
           
        </div>
        children.push(item);
       
    }

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: content[0].Content }}></div>
            <div id="wrap"  className="flex">
                {children}
            </div>
        </div>
    );

    /*
    <div dangerouslySetInnerHTML={{ __html: data.TMO[t_no].image }}></div>
            <h2 dangerouslySetInnerHTML={{ __html: data.TMO[t_no].title }}></h2>
            <div dangerouslySetInnerHTML={{ __html: data.TMO[t_no].content }}></div>
            */
   
}

}
export default Page;


      