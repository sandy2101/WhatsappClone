import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHa7vWna4zOho2lM6illnu9wnGBu7zstE",
  authDomain: "whatsapp-8ecaa.firebaseapp.com",
  projectId: "whatsapp-8ecaa",
  storageBucket: "whatsapp-8ecaa.appspot.com",
  messagingSenderId: "343584581574",
  appId: "1:343584581574:web:61fb02299ab0d25ea334c7",
  measurementId: "G-K67M5DLLDW"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;