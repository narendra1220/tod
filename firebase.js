import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDmrSBW3LoDHg33Gd3dT7r2fOACcgRaDPU",
    authDomain: "todo-f75c4.firebaseapp.com",
    projectId: "todo-f75c4",
    storageBucket: "todo-f75c4.appspot.com",
    messagingSenderId: "1002740981148",
    appId: "1:1002740981148:web:cfb55d9fbd31e8668e3c59",
    measurementId: "G-TJP3K1GQTQ"
  };

  // Initialize Firebase
var app = initializeApp(firebaseConfig);
var analytics = getAnalytics(app);
var db = firebase.firestore();
var firebase = require("firebase");
require("firebase/firestore");