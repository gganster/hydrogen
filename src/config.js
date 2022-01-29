import firebase from 'firebase';

var config = {
  apiKey: "AIzaSyDRzIi1N0Xz1Duxwb6xJQK-j8xYgWBxYKA",
  authDomain: "myintra-dd450.firebaseapp.com",
  projectId: "myintra-dd450",
  storageBucket: "myintra-dd450.appspot.com",
  messagingSenderId: "768128850098",
  appId: "1:768128850098:web:004eab36343ad821fe11ab"
}

firebase.initializeApp(config);
firebase.firestore().settings({ignoreUndefinedProperties: true});
