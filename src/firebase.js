import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyD4cnTRtMnTRs9iMI1LToW6ZnMSF9ikP0A",
    authDomain: "react-slack-clone-31984.firebaseapp.com",
    projectId: "react-slack-clone-31984",
    storageBucket: "react-slack-clone-31984.appspot.com",
    messagingSenderId: "643384720702",
    appId: "1:643384720702:web:3664dca747f5ce333fc06f",
    measurementId: "G-XYMMFHK2TP"
};

firebase.initializeApp(firebaseConfig);

export default firebase;