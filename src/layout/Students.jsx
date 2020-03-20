import React, { Component } from 'react'
import '../App.css'
import {Link} from 'react-router-dom'




class Students extends Component {
    render() {
        return(
            <div className="student-card">
                <div className="student-picture">

                </div>
                <div className="student-name">
                    <h4>David Bustamante</h4>
                </div>
                <div className="profile-button">
                     <Link to="/studentprofile" >
                     go to profile
                    </Link>
                </div>
            </div>
         )
    }

}

export default Students