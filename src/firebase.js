import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA1nlAPRBQRaiPi7vP_JLWu9d2w3Du_pYw",
    authDomain: "linkcademy.firebaseapp.com",
    projectId: "linkcademy",
    storageBucket: "linkcademy.appspot.com",
    messagingSenderId: "539411994095",
    appId: "1:539411994095:web:6d1e78622baab74c83d21a",
    measurementId: "G-7850E56NED"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };