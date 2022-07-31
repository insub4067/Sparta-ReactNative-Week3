import firebase from "firebase/compat/app";

// 사용할 파이어베이스 서비스 주석을 해제합니다
//import "firebase/compat/auth";
import "firebase/compat/database";
//import "firebase/compat/firestore";
//import "firebase/compat/functions";
import "firebase/compat/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjJE0ku5IywIT4X1JBekWRouaiPh8EECE",
  authDomain: "sparta-reactnative-week3.firebaseapp.com",
  databaseURL: "https://sparta-reactnative-week3-default-rtdb.asia-southeast1.firebasedatabase.app/",
  databaseURL: "https://sparta-reactnative-week3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sparta-reactnative-week3",
  storageBucket: "sparta-reactnative-week3.appspot.com",
  messagingSenderId: "681273780376",
  appId: "1:681273780376:web:e35c3048b3cf8c943308ed",
  measurementId: "G-SFSWHJSN9G"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const firebase_db = firebase.database()