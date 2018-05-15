import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyD4W5msPdl8ValduFQaQlcIO7OW3IWqqSQ",
    authDomain: "meet-eat-e4264.firebaseapp.com",
    databaseURL: "https://meet-eat-e4264.firebaseio.com",
    projectId: "meet-eat-e4264",
    storageBucket: "meet-eat-e4264.appspot.com",
    messagingSenderId: "363758651893"
  };
  firebase.initializeApp(config);
  export const provider = new firebase.auth.GoogleAuthProvider();
  export const auth = firebase.auth();
  export default firebase;

  
