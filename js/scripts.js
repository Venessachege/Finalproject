//Initialise Firebase

var config = {
  apiKey: "AIzaSyDXxkIIamQTZQsTrrXhcJMuwfQEXE5P23A",
  authDomain: "finalproject-6363d.firebaseapp.com",
  databaseURL: "https://finalproject-6363d.firebaseio.com",
  projectId: "finalproject-6363d",
  storageBucket: "finalproject-6363d.appspot.com",
  messagingSenderId: "999310279072"
};
firebase.initializeApp(config)
var uiConfig = {
  signInSuccessUrl: '/index2.html',
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

} else {
  console.log("not logged in");
}
});

$(document).ready(function() {
  $("input#signout").click(function() {
    firebase.auth().signOut().then(function() {
      location.replace("/index.html");

    })
  });
});
