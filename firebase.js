import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBOOxm1TBI3t8ChAkfeGvXuLa_d6rTz1jw",
    authDomain: "apponline-4fb6f.firebaseapp.com",
    databaseURL: "https://apponline-4fb6f-default-rtdb.firebaseio.com",
    projectId: "apponline-4fb6f",
    storageBucket: "apponline-4fb6f.appspot.com",
    messagingSenderId: "319782124073",
    appId: "1:319782124073:web:6328147b9f9780970f7a38",
    measurementId: "G-9C6YW3MWSM"
  };


  let app;

  if(firebase.apps.length === 0){
      app = firebase.initializeApp(firebaseConfig);
  }else{
      app.firebase.app();
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export{ db, auth };