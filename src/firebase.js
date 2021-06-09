import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyB6VWMjeH2P4vyZZOqRhGk6S2bX23UNWw8",
    authDomain: "mario-plan-1730e.firebaseapp.com",
    projectId: "mario-plan-1730e",
    storageBucket: "mario-plan-1730e.appspot.com",
    messagingSenderId: "92140782435",
    appId: "1:92140782435:web:3fcde6ae6049fddd2d8956",
    measurementId: "G-P80C28Y6EK"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()
  const analytics = firebase.analytics();

  export { auth, provider, db, analytics }