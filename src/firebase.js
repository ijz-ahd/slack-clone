import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBix_uUcmRBaXP5B_t4ajev1hr6xDpMiHw",
  authDomain: "slack-clone-bee8d.firebaseapp.com",
  projectId: "slack-clone-bee8d",
  storageBucket: "slack-clone-bee8d.appspot.com",
  messagingSenderId: "185410519605",
  appId: "1:185410519605:web:ce8e13b08e3d3159fc277c",
  measurementId: "G-8YKNXY19ZD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
