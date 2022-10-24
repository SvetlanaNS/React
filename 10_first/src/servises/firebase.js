import firebase from "firebase/compat/app";
import "firebase/compat/database";
import "firebase/compat/auth";

const firebaseConfig = {
apiKey: "AIzaSyBT_N19WGmrn_7Kol1kJRWgczFcG6ZOiPc",
authDomain: "lesson9-59980.firebaseapp.com",
projectId: "lesson9-59980",
storageBucket: "lesson9-59980.appspot.com",
messagingSenderId: "977508823012",
appId: "1:977508823012:web:7c67601b4605b619da61f1"
};

const firebaseDB =firebase.initializeApp(firebaseConfig);
export const db =firebaseDB.database().ref()
export const auth= firebase.auth();