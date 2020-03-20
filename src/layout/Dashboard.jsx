import React, { Component } from 'react'
import '../App.css'
import Menu from './Menu'
import Classes from './Classes'
import Students from './Students'
import StudentProfile from './StudentProfile'
import {BrowserRouter, Switch, Link, Route} from 'react-router-dom'
import LogIn from '../components/LogIn'
 




class Dashboard  extends Component {
    render() {
        return(
        <BrowserRouter>
         <div className="dashboard">              
                   <div className="sidenav">
                       <Menu/>
                    </div>
                    <Switch>
                    <div className="content">
                        <Route path = "/studentprofile" component = {StudentProfile}/>
                        <Route path  = "/login" component = {LogIn}/>
                        <Route path = "/Students" component = {Students}/>
                        <Route path = "/classes" component = {Classes}/>
                    </div>
                    </Switch>
        </div>
        </BrowserRouter>
        )
    }

}

export default Dashboard