
//ADD YOUR FIREBASE LINKS HERE
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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0
      });
      document.getElementById("msg").value="";
}