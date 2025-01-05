// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyjWL1WIofwiNnZCn6BzArB6BOg7K7p5A",
    authDomain: "fir-setup-e72d6.firebaseapp.com",
    projectId: "fir-setup-e72d6",
    storageBucket: "fir-setup-e72d6.firebasestorage.app",
    messagingSenderId: "902764090703",
    appId: "1:902764090703:web:32fec753592f4c0ade613a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export { app }