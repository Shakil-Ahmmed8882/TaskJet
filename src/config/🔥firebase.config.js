// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpyJtnkKZnP_SVR8rhjjnwO5CCbodC3x0",
  authDomain: "tasklet-7db26.firebaseapp.com",
  projectId: "tasklet-7db26",
  storageBucket: "tasklet-7db26.appspot.com",
  messagingSenderId: "942845905289",
  appId: "1:942845905289:web:bdbec9238d3e39a1b6f958"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth