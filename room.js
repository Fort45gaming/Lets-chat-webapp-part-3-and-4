var firebaseConfig = {
    apiKey: "AIzaSyAs10rxBKRoWLBjKq4yU8g2oc0J8g99eNc",
    authDomain: "kwitter-1c2dd.firebaseapp.com",
    databaseURL: "https://kwitter-1c2dd-default-rtdb.firebaseio.com",
    projectId: "kwitter-1c2dd",
    storageBucket: "kwitter-1c2dd.appspot.com",
    messagingSenderId: "690238511273",
    appId: "1:690238511273:web:7b2b8f00958162421571b8",
    measurementId: "G-9E8PHHLY98"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
getData();

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome"+user_name+"!";

function addRoom(){
room_name = document.getElementById("room_name").value;
firebase.database().ref("/").child(room_name).update({
purpose : "adding room name"
});
localStorage.setItem("room_name",room_name);
window.location="kwitter_page.html";
}

function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html"

}