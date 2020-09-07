import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBu63R8L2wQcMbNu_44yJ2Os9ikU8YiYBE",
  authDomain: "firegram-69475.firebaseapp.com",
  databaseURL: "https://firegram-69475.firebaseio.com",
  projectId: "firegram-69475",
  storageBucket: "firegram-69475.appspot.com",
  messagingSenderId: "83631857258",
  appId: "1:83631857258:web:12445f57ddf9d98631f413",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
