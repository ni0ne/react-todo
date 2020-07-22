import firebase from "firebase";

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "AIzaSyCtDKsIVClwmwHoBlVz30mwbCsE2S0XOqA",
  authDomain: "react-todo-5d815.firebaseapp.com",
  databaseURL: "https://react-todo-5d815.firebaseio.com",
  projectId: "react-todo-5d815",
  storageBucket: "react-todo-5d815.appspot.com",
  messagingSenderId: "898449607629",
  appId: "1:898449607629:web:6a04394eba5c16934a5284"
});

var db = firebase.firestore();

export { db };