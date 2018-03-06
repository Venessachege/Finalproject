
var config = {
  apiKey: "AIzaSyDXxkIIamQTZQsTrrXhcJMuwfQEXE5P23A",
  authDomain: "finalproject-6363d.firebaseapp.com",
  databaseURL: "https://finalproject-6363d.firebaseio.com",
  projectId: "finalproject-6363d",
  storageBucket: "finalproject-6363d.appspot.com",
  messagingSenderId: "999310279072"
};
firebase.initializeApp(config)
// const preObject=document.getElementById('object')
// //setting up realtime databaseURL
// // Get a reference to the database service
//
// const ref=firebase.database().ref().child("object");
// //sync object changes
// ref.on("value" , snap => {
//   preObject.innerText =JSON.stringify(snap.val() , null ,3)
// });

//database query
var database = firebase.database();

var uiConfig = {
  signInSuccessUrl: '/profile.html',
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],

  //TERMS OF SERVICE
  tosUrl: '/'
};
//initialise the firebase
var ui = new firebaseui.auth.AuthUI(firebase.auth());
//start method will wait until the DOM is loaded
ui.start("#firebaseui-auth-container", uiConfig);

firebase.auth().onAuthStateChanged(function(user){
if (user) {
  console.log("logged in");
  // var li ;
  // // $('li#member').hide();
  user.providerData.forEach(function (profile) {
    var name=("  Name: " + profile.displayName);
    var email=("  Email: " + profile.email);
    var photo=("  Photo URL: " + profile.photoURL);
  });

} else {
  console.log("not logged in");
}
});

// // Get a reference to the database service
// var database = firebase.database();
// // save the user's profile into Firebase so we can list users,
// // use them in Security and Firebase Rules, and show profiles
// function writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email
//     //some more user data
//   });
// }//Get the current userID
// var userId = firebase.auth().currentUser.uid;
// //Get the user data
// return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
//     //Do something with your user data located in snapshot
// });
//



$(document).ready(function() {
  $("input#signout").click(function() {
    firebase.auth().signOut().then(function() {
      location.replace("/index.html");

    })
  });
  $("ul#name").append(name)
});
