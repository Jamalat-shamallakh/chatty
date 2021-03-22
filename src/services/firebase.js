import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBUR4FDBTEv46xEf1jPLR3mzFsteJLL6Q4",
    authDomain: "chatty-4e43d.firebaseapp.com",
    projectId: "chatty-4e43d",
    storageBucket: "chatty-4e43d.appspot.com",
    messagingSenderId: "257534690701",
    appId: "1:257534690701:web:834af270c324d66b8d69c4",
    measurementId: "G-53EH8CWQSN"
  };
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth ;
  export const db = firebase.database();
  