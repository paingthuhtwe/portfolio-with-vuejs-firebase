import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import {
  getStorage,
  ref as storageReference,
  uploadBytes,
} from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDK2lbi_Qf2Pa9ViRBYdvp9Wb9S-XzwJj0",
  authDomain: "paingthuhtwe-portfolio.firebaseapp.com",
  projectId: "paingthuhtwe-portfolio",
  storageBucket: "paingthuhtwe-portfolio.appspot.com",
  messagingSenderId: "401113805888",
  appId: "1:401113805888:web:7f33c819e77adfbf9cdba5",
  measurementId: "G-NSJT7FHM4R",
};

let app = firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;
let storage = getStorage(app);

export { db, auth, timestamp, storage, storageReference, uploadBytes };
