import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
const firebaseConfig = {
  apiKey: "AIzaSyC0ePPEVc9veCyQ_VV1M6UyUfszp3JksR8",
  authDomain: "login-page-5247b.firebaseapp.com",
  projectId: "login-page-5247b",
  storageBucket: "login-page-5247b.firebasestorage.app",
  messagingSenderId: "814560106140",
  appId: "1:814560106140:web:c2f41e280870637979bf59"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const submit = document.getElementById("loginForm")
submit.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    // alert("Login is Successful");
    window.location.href="main.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert("account is not created")
  });
});