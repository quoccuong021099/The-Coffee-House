import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyDf3KyUzRprvJgADKi-qKb3z_TKVyCYLy8",
  authDomain: "otp-coffee-12f38.firebaseapp.com",
  projectId: "otp-coffee-12f38",
  storageBucket: "otp-coffee-12f38.appspot.com",
  messagingSenderId: "464243482267",
  appId: "1:464243482267:web:486830c0f8500c13e3703e",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
export { auth, db };
export default firebase;
