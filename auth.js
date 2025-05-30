// auth.js
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyBTpiMYGfO195wKO4mLiUBXNsY3ay-xE2E",
      authDomain: "casher-server.firebaseapp.com",
      projectId: "casher-server",
      storageBucket: "casher-server.firebasestorage.app",
      messagingSenderId: "1081383530558",
      appId: "1:1081383530558:web:ebc39c98e4a6495b61e16f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Check if the user is logged in
firebase.auth().onAuthStateChanged((user) => {
    if (!user) {
        // User is not logged in, redirect to login page
        window.location.href = "login.html";
    }
});
