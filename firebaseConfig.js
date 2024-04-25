import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyDRLXEHBoUu8ZIf_IXOJs7K3jVYdc8D-Ik",
  authDomain: "weather-4972b.firebaseapp.com",
  databaseURL: "https://weather-4972b-default-rtdb.firebaseio.com",
  projectId: "weather-4972b",
  storageBucket: "weather-4972b.appspot.com",
  messagingSenderId: "411657349926",
  appId: "1:411657349926:web:561d9be2b614f3c5132fe7",
}

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app)
export { app, auth, db };