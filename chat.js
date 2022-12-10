// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyB0xewmrck9QwalhnAPgwKtdpzct-GKxYk",
  authDomain: "kwitter-4f0a3.firebaseapp.com",
  databaseURL: "https://kwitter-4f0a3-default-rtdb.firebaseio.com",
  projectId: "kwitter-4f0a3",
  storageBucket: "kwitter-4f0a3.appspot.com",
  messagingSenderId: "66748495535",
  appId: "1:66748495535:web:a1ae39895c9094abc0465a",
  measurementId: "G-7FBT4TCKYC"
}; 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



