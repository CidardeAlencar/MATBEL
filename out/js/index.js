// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {getAuth,onAuthStateChanged,signInWithEmailAndPassword,signOut} from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBSBoUh707edxDcwYPoQqj9pp2p541o9xI",
  authDomain: "army-weapons-control-system.firebaseapp.com",
  projectId: "army-weapons-control-system",
  storageBucket: "army-weapons-control-system.appspot.com",
  messagingSenderId: "864207255926",
  appId: "1:864207255926:web:2a7392501ffef532b96257",
  measurementId: "G-3FLR4907CG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const auth = getAuth(app);

//Detect auth state
onAuthStateChanged(auth, user =>{
    if (user!=null){
        console.log('Usuario identificado');
    }else{
        console.log('No usuario');
    }
});
//LOGIN
function login(email,password) {
    console.log('email:', email);
    console.log('pass:', password);
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Usuario autenticado:', user.uid);
            window.location.href = 'main.html';
        })
        .catch((error) => {
            const errorMessage = error.message;
            const errorCode = error.code;
            //console.error('Error de autenticación:', errorMessage);
            if (errorCode === 'auth/wrong-password') {
                alert('Contraseña incorrecta.');
              } else {
                alert(errorMessage);
              }
        });
}
const loginCard = document.getElementById('loginCard');
if(loginCard){
    loginCard.addEventListener('submit', function(event) {
        event.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        login(email,password);
    });
}


//LOGOUT
function logout() {
    signOut(auth).then(() => {
        window.location.href = 'index.html';
    }).catch((error) => {
        console.error('Error al cerrar sesión:', error);
    });
}

const logoutBtn = document.getElementById('logoutBtn');
if(logoutBtn){
    logoutBtn.addEventListener('click', function(event) {
        event.preventDefault();
        logout();
    });
}











