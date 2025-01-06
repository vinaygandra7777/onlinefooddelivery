import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, FacebookAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
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
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    alert("Creation of account is Successful");
    window.location.href="index.html"
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error logging in:", error);
  });
});
document.getElementById("googleLogin").addEventListener("click", () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            alert(`Welcome, ${result.user.displayName}`);
            window.location.href="main.html"
        })
        .catch((error) => {
            alert(error.message);
        });
});
document.getElementById("facebookLogin").addEventListener("click", () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => {
            alert(`Welcome, ${result.user.displayName}`);
        })
        .catch((error) => {
            alert(error.message);
        });
});
const textElement = document.querySelector('.animated-text');
const textContent = textElement.textContent;
let index = 0;

textElement.textContent = '';

function typeWriterEffect() {
    if (index < textContent.length) {
        textElement.textContent += textContent.charAt(index);
        index++;
        setTimeout(typeWriterEffect, 50);
    }
}

window.addEventListener('load', typeWriterEffect);