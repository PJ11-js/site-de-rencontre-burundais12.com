// Importation des modules Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// Configuration Firebase (remplace ce bloc par le tien si besoin)
const firebaseConfig = {
  apiKey: "AIzaSyCncnRlcKPH_AATgGKGSRF4y-NB-qrytV0",
  authDomain: "site-de-rencontre-burundais.firebaseapp.com",
  projectId: "site-de-rencontre-burundais",
  storageBucket: "site-de-rencontre-burundais.firebasestorage.app",
  messagingSenderId: "737249604208",
  appId: "1:737249604208:web:be1b93908d82bfbacfbab5",
  measurementId: "G-SDS4TEJLBL"
};

// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Gestion de l'inscription
document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Inscription réussie !");
    })
    .catch(error => {
      alert("Erreur inscription : " + error.message);
    });
});

// Gestion de la connexion
document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      alert("Connexion réussie !");
    })
    .catch(error => {
      alert("Erreur connexion : " + error.message);
    });
});

// Gestion de la déconnexion
document.getElementById('logout-btn').addEventListener('click', function() {
  signOut(auth)
    .then(() => {
      alert("Déconnexion réussie !");
    })
    .catch(error => {
      alert("Erreur déconnexion : " + error.message);
    });
});

// Affichage de l'état utilisateur
const userStateDiv = document.getElementById('user-state');
const logoutBtn = document.getElementById('logout-btn');

onAuthStateChanged(auth, (user) => {
  if (user) {
    userStateDiv.textContent = `Connecté en tant que : ${user.email}`;
    logoutBtn.style.display = "inline";
  } else {
    userStateDiv.textContent = "Aucun utilisateur connecté.";
    logoutBtn.style.display = "none";
  }
});
