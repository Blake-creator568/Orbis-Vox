importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyC7G1h3vJ0bx16GtZq7g7a0MyVGWlH1UWU",
  authDomain: "orbis-vox-notify.firebaseapp.com",
  projectId: "orbis-vox-notify",
  messagingSenderId: "870786934797",
  appId: "1:870786934797:web:be0c82a3c08684637a0d44"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/Logo.png",
    data: { url: payload.notification.click_action }
  });
});

self.addEventListener("notificationclick", event => {
  event.notification.close();
  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
