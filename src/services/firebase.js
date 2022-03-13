import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCzaKOsk7yzgzJex276vTuHf7A_xbtriD4",
  authDomain: "dr-melfi-7d7f7.firebaseapp.com",
  projectId: "dr-melfi-7d7f7",
  storageBucket: "dr-melfi-7d7f7.appspot.com",
  messagingSenderId: "620752523869",
  appId: "1:620752523869:web:d9087907b790fb1c9933b4",
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
