import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBUPBR4f43O5Rpt98ptTyFem-mKbBNAyS0",
    authDomain: "apeiron-webdev.firebaseapp.com",
    projectId: "apeiron-webdev",
    storageBucket: "apeiron-webdev.appspot.com",
    messagingSenderId: "222145153245",
    appId: "1:222145153245:web:b752d244ce40fb862e7334",
    measurementId: "G-VG2SEWTNCJ"
  };

  firebase.initializeApp(firebaseConfig)