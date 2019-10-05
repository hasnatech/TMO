import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Additional extends Component{
    render(){
        return(
            <div>
               
               <div className="enabler_banner">  </div>
              
          
                        <h2 id="des">Transformational Leadership</h2>
                        <div className="flex">           
                        <div className="flex_25">   

                                <h2 id="des2">What is Transformational Leadership</h2>   
                                <p>At vero eos et accusamus et iusto odio dignissimos 
                                    ducimus qui blanditiis praesentium voluptatum deleniti
                                    atque corrupti quos dolores et quas molestias excepturi 
                                    sint occaecati cupiditate non provident, similique sunt in 
                                    culpa qui officia deserunt mollitia animi, id est laborum 
                                    et dolorum fuga. </p>
                            
                            </div>
                            <div className="flex_25">   
                                    <h2 >Resources</h2>
                                   <p> <a href="https://www.cargill.com/">Cargil</a></p>                 
                                   <p>  <a href="https://www.google.com/">Google</a></p>
                            </div>
                    </div>           
                    
                                    
                            <h2  id="des2">Why is Transformational Leadership important</h2>
                            <p>At vero eos et accusamus et iusto odio dignissimos
                                ducimus qui blanditiis praesentium voluptatum <span>
                                     deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati
                                cupiditate non provident,</span><span> similique sunt in culpa qui
                                officia deserunt mollitia animi, 
                                id est laborum et dolorum fuga.</span> </p>
                           
                       
                  
                            
                            
                            
                                <div className="flex">
                                <div className="flex_col">         
                                    <h2>Whom to contact </h2>  
                                    
                                    <div className="flex">
                                     <div className="flex_10">       
                                    <a href="mcader@hasnatech.com">M Cader mcader@hasnatech.com</a>
                                    </div>
                                    <div className="flex_10">
                                    <a href="sabeer@hasnatech.com">Mohamed Ahamed Sabeer S sabeer@hasnatech.com</a>
                                    </div>
                                    </div>
                                    </div>
                                </div>
                      
            </div> 
        );

        
    }
}
export default Additional;