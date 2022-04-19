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
document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";


function addRoom()
{
 room_name=document.getElementById("room_name").value;
 firebase.database().ref("/").child(room_name).update({
       purpose:"Adding room name!"
 });
 localStorage.setItem("Untrending_room",room_name);
 document.getElementById("room_name").value="";
 window.location="Kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("room name"+Room_names);
       row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML+=row; 
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
console.log("Notaroom name",name);
localStorage.setItem("room_name",name);
window.location="Kwitter_page.html";
}
 
function logout()
{
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
 window.location="index.html";
}