
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpjN1D27a8C4nJX30E8-FDbBH0wa9rv3c",
  authDomain: "projec1-tech.firebaseapp.com",
  projectId: "projec1-tech",
  storageBucket: "projec1-tech.appspot.com",
  messagingSenderId: "482783758924",
  appId: "1:482783758924:web:5abd1c33f27fae815682e9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize authentication
const auth = getAuth();

const btnSignup = document.getElementById("btnSignup");

btnSignup.addEventListener("click", (event) => {
  event.preventDefault();

  // Obtain inputs from form fields
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Sign up the user with email and password
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
    
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User created successfully",
        showConfirmButton: false,
        timer: 2000
      }).then(() => {
        // Redirigir a otra página después de que la alerta se cierre
        window.location.href = "login.html"; 
      });
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: `${errorMessage}`,        
      });
      // ..
    });
});

//SIGN IN
const btnLogin = document.getElementById("btnSignIn");
btnLogin.addEventListener("click", (event) => {
    event.preventDefault();
  
    // Obtain inputs from form fields
    const emailLogin = document.getElementById("loginemail").value;
    const passwordLogin = document.getElementById("loginpass").value;
  
    // Sign IN the user with email and password
    signInWithEmailAndPassword(auth, emailLogin, passwordLogin)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
      
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Access granted ${emailLogin}`,
          showConfirmButton: false,
          timer: 2000
        }).then(() => {
          // Redirigir a otra página después de que la alerta se cierre
          window.location.href = "adm-panel.html"; 
        });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${errorMessage}`,        
        });
        // ..
      });
  });



