import React, { Component } from 'react'
import '../App.css'
import ProfilePic from '../components/ProfilePic'



class StudentProfile extends Component {
    render() {
        return(
            <div className="student-profile">     
                <div className="student-profile-pic"> 
                    <ProfilePic/>
                  </div>         
                <div className="stat-1">
                    <h4>number</h4>
                    <h3>55</h3>
                </div>
                <div className="stat-2">
                    <h4>number</h4>
                    <h3>55</h3>
                </div>
                <div className="stat-3">
                  <h4>number</h4>
                  <h3>55</h3>
                </div>
              </div>
        )
    }

}

export default StudentProfile