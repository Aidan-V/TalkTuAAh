// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoHlSvP-bhO0c-cs7hsjsWk7I_IGhDdR8",
  authDomain: "talktuaah.firebaseapp.com",
  projectId: "talktuaah",
  storageBucket: "talktuaah.firebasestorage.app",
  messagingSenderId: "425962632045",
  appId: "1:425962632045:web:8c2d9a1bb703e8dc182064"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



//submit
const submit = document.getElementById('submit');
submit.addEventListener('click', function(event) {
    event.preventDefault()
    //inputs
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        //signed up
        const user = userCredential.user;
        alert("Logging in...")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      })
})