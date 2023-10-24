import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';


const firebaseConfig = {
    apiKey: "AIzaSyCwqpYhJ_hUbAHZ_6fjwxr7dRQ2bSk-2l4",
    authDomain: "disneyplus-clone-d1ccc.firebaseapp.com",
    projectId: "disneyplus-clone-d1ccc",
    storageBucket: "disneyplus-clone-d1ccc.appspot.com",
    messagingSenderId: "254370883938",
    appId: "1:254370883938:web:cf4850ab6c5e486361243b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const storage = firebase.storage();
  
  export { auth, provider, storage };
  export default db;
