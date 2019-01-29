import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAtWZV5nSjHRH-_iveYQfNDORk0I-2N0yE",
    authDomain: "favoritewods.firebaseapp.com",
    databaseURL: "https://favoritewods.firebaseio.com",
});

export default firebaseApp;