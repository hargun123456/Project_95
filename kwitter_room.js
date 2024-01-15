// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyAgy08YVxDuiVLQLccA0Sih8XP-EHAC7ws",
      authDomain: "class-test-2e9a7.firebaseapp.com",
      databaseURL: "https://class-test-2e9a7-default-rtdb.firebaseio.com",
      projectId: "class-test-2e9a7",
      storageBucket: "class-test-2e9a7.appspot.com",
      messagingSenderId: "1006547723866",
      appId: "1:1006547723866:web:f501c4de83c6bea913da63"
    };


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
