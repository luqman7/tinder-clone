import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtvwcl8X8k6hocRJpoxqdocoV2pslrqGo",
  authDomain: "tinder-clone-be917.firebaseapp.com",
  projectId: "tinder-clone-be917",
  storageBucket: "tinder-clone-be917.appspot.com",
  messagingSenderId: "1001595361022",
  appId: "1:1001595361022:web:668ce8e4adec5a860837af",
  measurementId: "G-P1403MGLMG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
