import firebase from 'firebase';
const firebaseApp = firebase.initializeApp ({

    apiKey: "AIzaSyDoT5ZeS24sqPD6Nv9JcAi9OFmHyQBh0Do",
    authDomain: "my-solo-project-f4632.firebaseapp.com",
    projectId: "my-solo-project-f4632",
    storageBucket: "my-solo-project-f4632.appspot.com",
    messagingSenderId: "568982496731",
    appId: "1:568982496731:web:9607aa8a408d8bd9c673fe",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};