import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDJQXnjz-UHsy3WPgu4A7idStkdByCKy-E",
  authDomain: "ipod-a14b7.firebaseapp.com",
  projectId: "ipod-a14b7",
  storageBucket: "ipod-a14b7.appspot.com",
  messagingSenderId: "767423227046",
  appId: "1:767423227046:web:f1e17580f5311be5668067",
  measurementId: "G-Z5EDK7VMJV"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(<App />,document.getElementById('root'));

