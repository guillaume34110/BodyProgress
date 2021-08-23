
  import firebase from 'firebase/app'
  import "firebase/auth"
  import "firebase/database";
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const app = firebase.initializeApp({
    apiKey: "AIzaSyDYQiNUit-e1iLP9zoPs3Jt2zwMRNt3eD8",
    authDomain: "bodyprogression-44865.firebaseapp.com",
    databaseURL: "https://bodyprogression-44865-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bodyprogression-44865",
    storageBucket: "bodyprogression-44865.appspot.com",
    messagingSenderId: "741583337548",
    appId: "1:741583337548:web:9a58d54b82e79d56955ce9",
    measurementId: "G-E2XX8RK5NR"
  });




  export const auth = app.auth();
  export default app;