import React, { Component } from 'react'
import '../App.css'



class Menu extends Component {
    render() {
        return(
            <div className="menu">              
                    <div className="item1">
                    <h4> Students</h4>
                  </div>
                  <div className="item2">
                    <h4> Classes  </h4>
                  </div>
                  <div className="item3">
                    <h4>  Apps </h4>
                  </div>
                  <div className="item4">
                    <h4> Families </h4>
                  </div>    
                  <div className="item5">
                    <h4> Stats </h4>
                  </div>    
                 
             </div>
        )
    }

}

export default Menu