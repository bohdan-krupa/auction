import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDLzEeVGqbNBRtnJ9vZrqG_qDzeVi5yywI",
  authDomain: "aucfine.firebaseapp.com",
  databaseURL: "https://aucfine.firebaseio.com",
  projectId: "aucfine",
  storageBucket: "aucfine.appspot.com",
  messagingSenderId: "360920845145",
  appId: "1:360920845145:web:ef45394a14b9cda29c9a48"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}