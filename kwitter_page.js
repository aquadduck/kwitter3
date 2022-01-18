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

user_name = localStorage.getItem("user_name");
 room_name = localStorage.getItem("room_name");

function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message: msg,
            like:0
      });

      document.getElementById("msg").value = "";
}