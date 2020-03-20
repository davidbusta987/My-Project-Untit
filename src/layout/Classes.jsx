import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import firebase from '../firebase/firebase';

class Classes extends Component {
  constructor(props) {
    super(props);
     this.state = {
      lessons: []
    };
     let ref = firebase.firestore().collection("lessons").doc("SqYGqJRXFfMWE4CWKlpIwUmbeBQ2");
     ref.onSnapshot(doc => {
          this.setState({
            lessons: doc.data()
         })
     })
   }
       
     

    render() {
        return(
            <div className="classes" >
             <h1 className="card-1">{this.state.lessons.lesson1}</h1>
             <h1 className="card-2" >{this.state.lessons.lessons2}</h1>
             <h1 className="card-3" >{this.state.lessons.lessons3}</h1>
            </div>
        )
        }
    }

export default Classes
