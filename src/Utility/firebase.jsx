
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth"
import "firebase/compat/firestore";
import "firebase/compat/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEQffF3eyPirwK0X1OlyB0bRbTwzswO5Y",
  authDomain: "clone-106fd.firebaseapp.com",
  projectId: "clone-106fd",
  storageBucket: "clone-106fd.appspot.com",
  messagingSenderId: "501509718387",
  appId: "1:501509718387:web:417be1a47b53169f3e8506"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db=app.firestore()