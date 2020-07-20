import firebase from 'firebase/app';
import 'firebase/analytics';

import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBbyShBjGUwCAsVv5sY1yZeVrzyyNDN6i4",
    authDomain: "projectmanagement-98a79.firebaseapp.com",
    databaseURL: "https://projectmanagement-98a79.firebaseio.com",
    projectId: "projectmanagement-98a79",
    storageBucket: "projectmanagement-98a79.appspot.com",
    messagingSenderId: "650896092404",
    appId: "1:650896092404:web:5f743984413d27a74542a1",
    measurementId: "G-NK1NHDZTPF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

   // eslint-disable-next-line 
 
 firebase.analytics();

  export default firebase;