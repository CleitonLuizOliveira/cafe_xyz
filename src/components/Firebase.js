import firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: "cafe-xyz-9deba.firebaseapp.com",
    projectId: "cafe-xyz-9deba",
    storageBucket: "cafe-xyz-9deba.appspot.com",
    messagingSenderId: process.env.REACT_APP_SENDERID,
    appId: process.env.REACT_APP_APPID,
};

firebase.initializeApp(firebaseConfig);

export default firebase;