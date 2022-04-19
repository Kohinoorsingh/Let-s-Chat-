// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDfJTp9wFyHhG5qD-LNi-_nRGTG_JulxqY",
      authDomain: "Twittter-71c0b.firebaseapp.com",
      databaseURL: "https://Twittter-71c0b-default-rtdb.firebaseio.com",
      projectId: "Twittter-71c0b",
      storageBucket: "Twittter-71c0b.appspot.com",
      messagingSenderId: "50744358383",
      appId: "1:50744358383:web:c005b77ab6ae7cab25b21a"
    };
    
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}


function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
