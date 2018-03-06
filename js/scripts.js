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


firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log("logged in");

firebase.auth().onAuthStateChanged(function(user){
if (user) {
  console.log("logged in");
  $('#firebaseui-auth-container').hide();
  $('li#member').hide();
    $('a#signOut').show()
    $('a#signOut').click(function(){
      firebase.auth().signOut().then(function(){
        location.replace("/index.html");

      });
    });


        $('#firebaseui-auth-container').hide()
        $('li#member').hide();
        $('a#signOut').show()

//         user.providerData.forEach(function(profile) {
//             var name = ("  Name: " + profile.displayName);
//             var email = ("  Email: " + profile.email);
//             var photo = ("  Photo URL: " + profile.photoURL);
// });
            $('a#signOut').click(function() {
              firebase.auth().signOut().then(function() {
                location.replace("/index.html");

              })

            });

          } else {
            console.log("not logged in");
            $('a#signOut').hide();
          }
        });

      $(document).ready(function() {
        $("input#signout").click(function() {
          firebase.auth().signOut().then(function() {
            location.replace("/index.html");

          })
        });

        $("ul#name").append(name);
      });
