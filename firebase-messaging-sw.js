importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Weka zile kodi zako za firebaseConfig hapa chini
const firebaseConfig = {
  apiKey: "WEKA_API_KEY_YAKO",
  authDomain: "WEKA_AUTH_DOMAIN_YAKO",
  projectId: "WEKA_PROJECT_ID_YAKO",
  storageBucket: "WEKA_STORAGE_BUCKET_YAKO",
  messagingSenderId: "WEKA_SENDER_ID_YAKO",
  appId: "WEKA_APP_ID_YAKO"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

// Hii sehemu ndiyo inapokea ujumbe wakati app imefungwa
messaging.onBackgroundMessage((payload) => {
  console.log('Ujumbe umepokelewa background: ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'Logo.png' // Icon itakayotokea juu ya screen
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
