// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase/app";

import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCBbdazT60gQXI_TbpKvWeVPSseOJVGQjM",
    authDomain: "hyperlocalecom.firebaseapp.com",
    projectId: "hyperlocalecom",
    storageBucket: "hyperlocalecom.appspot.com",
    messagingSenderId: "312586689284",
    appId: "1:312586689284:web:cfb5a42e6c41ea78a68e51",
    measurementId: "G-0NMCVRMGPQ"
};

firebase.initializeApp(firebaseConfig);

export default firebase;