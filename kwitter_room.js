// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2H4Wa9Hcyy9vM_HBephROkEh96rdk2Jo",
    authDomain: "kwitter-project-1d98b.firebaseapp.com",
    databaseURL: "https://kwitter-project-1d98b-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-1d98b",
    storageBucket: "kwitter-project-1d98b.appspot.com",
    messagingSenderId: "961768694989",
    appId: "1:961768694989:web:1d34f5435199b62e1d7584"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("user");

document.getElementById("user").innerHTML = "welcome " + username + "!";

function addroom()
{
      room_name = document.getElementById("room").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  row = "<div class='room_name' id= "+ Room_names+"onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
  function getData() {firebase.database().ref("/").on('value',
  function(snapshot) {document.getElementById("output").innerHTML =
  "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
  Room_names = childKey;

  //End code
  });});}
  getData()})})};

  function logout() 
{
      localStorage.removeItem("user");
      localStorage.removeItem("room");
      window.location = "index.html";
}