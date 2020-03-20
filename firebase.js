import firebase from "firebase"


const firebaseConfig = {
    apiKey: "AIzaSyDoN4JLA19mB2ZM27oYWrie2uxdidkyH4A",
    authDomain: "hello-world-afb0d.firebaseapp.com",
    databaseURL: "https://hello-world-afb0d.firebaseio.com",
    projectId: "hello-world-afb0d",
    storageBucket: "hello-world-afb0d.appspot.com",
    messagingSenderId: "820633598100",
    appId: "1:820633598100:web:e870df5cb1bdfca2fc1c81",
    measurementId: "G-L7N9RJP4H7"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase 

  