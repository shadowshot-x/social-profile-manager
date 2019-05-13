import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage'
var firebaseConfig = {
    apiKey: "AIzaSyASffsyerGbKgZh3fJVYRzDdYSjLMULs4o",
    authDomain: "profile-manager-77fdd.firebaseapp.com",
    databaseURL: "https://profile-manager-77fdd.firebaseio.com",
    projectId: "profile-manager-77fdd",
    storageBucket: "profile-manager-77fdd.appspot.com",
    messagingSenderId: "724340909441",
    appId: "1:724340909441:web:2be206f97d737f56"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();
  firebase.storage();

  export default firebase;