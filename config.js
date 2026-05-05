// VIWAWA APP - FINAL STABLE CONFIGURATION
const firebaseConfig = {
    apiKey: "AIzaSyDBRoHCdSzu1g9LP9VBjYSeVU4N-wDd-8A",
    authDomain: "viwawa-app.firebaseapp.com",
    projectId: "viwawa-app",
    storageBucket: "viwawa-app.appspot.com",
    messagingSenderId: "238515321557",
    appId: "1:238515321557:web:e000c87895e54d588308d1"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // Ikishakuwepo itumie hiyo hiyo
}

const db = firebase.firestore();

// Hakikisha Database inatumia mpangilio wa tarehe wa kisasa
db.settings({
    timestampsInSnapshots: true
});
