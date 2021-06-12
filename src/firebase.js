import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB3WIfCHb0G6YM48b8ZUogbGYb4YnBSiOo',
  authDomain: 'amzon-clone-yb.firebaseapp.com',
  projectId: 'amzon-clone-yb',
  storageBucket: 'amzon-clone-yb.appspot.com',
  messagingSenderId: '656515375971',
  appId: '1:656515375971:web:3ead144789af7587ad2956',
  measurementId: 'G-454QE1SQ78'
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
