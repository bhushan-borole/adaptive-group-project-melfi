import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCBFvochGHJvZwHxQr33kBx_2wzodPxckY",
  authDomain: "dr-melfi.firebaseapp.com",
  projectId: "dr-melfi",
  storageBucket: "dr-melfi.appspot.com",
  messagingSenderId: "132095973399",
  appId: "1:132095973399:web:8abe2b4abdfeef4f066452",
  databaseURL: "https://dr-melfi-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(config);
export const auth = firebase.auth;
export const db = firebase.database();
