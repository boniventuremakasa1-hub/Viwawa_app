// VIWAWA APP - CENTRAL CONFIGURATION
// Hii ndio kodi inayounganisha GitHub na Firebase yako

const firebaseConfig = {
    apiKey: "AIzaSyDBRoHCdSzu1g9LP9VBjYSeVU4N-wDd-8A",
    authDomain: "viwawa-app.firebaseapp.com",
    projectId: "viwawa-app",
    storageBucket: "viwawa-app.appspot.com",
    messagingSenderId: "238515321557",
    appId: "1:238515321557:web:e000c87895e54d588308d1"
};

// Kuanzisha Firebase (Initialize)
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

// Kurahisisha matumizi ya Database (Firestore)
const db = firebase.firestore();

