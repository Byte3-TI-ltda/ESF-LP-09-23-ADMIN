import { initializeApp } from "firebase/app";

import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCCJvayXwAMq4ufD-wAKN6pHGqKF3PgS4I",
    authDomain: "teste-fire-bc751.firebaseapp.com",
    projectId: "teste-fire-bc751",
    storageBucket: "teste-fire-bc751.appspot.com",
    messagingSenderId: "543372910777",
    appId: "1:543372910777:web:6be853992190fed14cfb68"
};

// const app = firebase.initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth };