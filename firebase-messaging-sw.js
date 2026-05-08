importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

const firebaseConfig = {
    apiKey: "AIzaSyDBRoHCdSzu1g9LP9VBjYSeVU4N-wDd-8A",
    authDomain: "viwawa-app.firebaseapp.com",
    projectId: "viwawa-app",
    storageBucket: "viwawa-app.appspot.com",
    messagingSenderId: "238515321557",
    appId: "1:238515321557:web:e000c87895e54d588308d1"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Inapokea ujumbe wakati mwanachama hatumii app (Background)
messaging.onBackgroundMessage((payload) => {
    console.log('Background Message:', payload);
    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'Logo.png'
    };
    self.registration.showNotification(notificationTitle, notificationOptions);
});
