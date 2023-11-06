import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAkqh8r5kbivsjJvg-TTU1Lmi_qGcF1k6g",
    authDomain: "employee-9c9b7.firebaseapp.com",
    projectId: "employee-9c9b7",
    storageBucket: "employee-9c9b7.appspot.com",
    messagingSenderId: "797023380901",
    appId: "1:797023380901:web:ed5718487a61f3dff8744c",
    measurementId: "G-2XH7X0LTF0",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
