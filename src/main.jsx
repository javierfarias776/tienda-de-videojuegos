import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./Main.css"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCYvZ0dHRSH6OH98Glfl2TNTfRmTiwlV9c",
    authDomain: "tienda-de-videojuegos-12669.firebaseapp.com",
    projectId: "tienda-de-videojuegos-12669",
    storageBucket: "tienda-de-videojuegos-12669.appspot.com",
    messagingSenderId: "1026467611154",
    appId: "1:1026467611154:web:b09ccef1080fecd21d8ecb"
  };

  initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  
    <App />
  
)
