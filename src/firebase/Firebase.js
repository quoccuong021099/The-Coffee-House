import firebase from "firebase";
import "firebase/auth";
var firebaseConfig = {
  apiKey: "AIzaSyDktpqILTA4vMcvT8ppAuwk_yy6mp_o9JM",
  authDomain: "otp-coffee-14a6a.firebaseapp.com",
  projectId: "otp-coffee-14a6a",
  storageBucket: "otp-coffee-14a6a.appspot.com",
  messagingSenderId: "920061102773",
  appId: "1:920061102773:web:3d1abf061b2e013ba14cfc",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
