var config = {
  apiKey: "AIzaSyDXxkIIamQTZQsTrrXhcJMuwfQEXE5P23A",
  authDomain: "finalproject-6363d.firebaseapp.com",
  databaseURL: "https://finalproject-6363d.firebaseio.com",
  projectId: "finalproject-6363d",
  storageBucket: "finalproject-6363d.appspot.com",
  messagingSenderId: "999310279072"
};


firebase.initializeApp(config)
// Get a reference to the database service
// var database = firebase.database().ref('users');
var user = firebase.auth().currentUser;

// if (user != null) {
//   user.providerData.forEach(function(profile) {
//     console.log("Sign-in provider: " + profile.providerId);
//     console.log("  Provider-specific UID: " + profile.uid);
//     console.log("  Name: " + profile.displayName);
//     console.log("  Email: " + profile.email);
//     console.log("  Photo URL: " + profile.photoURL);
//   });
// }
//firebase ui

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
  if (user!=null) {
    //loop to

    user.providerData.forEach(function(profile) {
      // console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      // console.log("  Name: " + profile.displayName);
      // console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
      $('li#name').text(profile.displayName)
      $('li#email').text(profile.email)
      $('#pic').text(profile.photoURL)
      $('#pic').attr("src",profile.photoURL)

    });
    ///end loop
    console.log("logged in");
    $('#firebaseui-auth-container').hide();
    $('li#member').hide();
    $('a#signOut').show()
    $('a#signOut').click(function() {
      firebase.auth().signOut().then(function() {
        location.replace("/index.html");

      });
    });
  } else {

  }
});
// Database

$(document).ready(function() {

});

//user interface logic

  // consttructor for the people to store profile

 function person (picture,name,bestproject,personalPortfolio,hobbies) {
      this.picture=picture;
      this.name=name;
      this.bestproject=bestproject;
      this.personalPortfolio=personalPortfolio;
      this.hobbies=hobbies;
 }

//porting the infromation from the modal and saving it to a variable
  var name1= $("").val();
 //creating  the object
 var person1=new person (name1)
 people.push(person1);
 //array to store the people
  var people=[];
//displaying the people in the public in a card
$("").append(
  "<li>"+
  "<div class=\"uk-card uk-card-default\">"+
      "<div class=\"uk-card-media-top uk-flex uk-flex-center uk-margin-remove\">" +
          "<img class=\"uk-margin-remove\"  src=\"Images/man-01.png\" alt=\"\" >"+
      "</div>"+
      "<div class=\"uk-card-body uk-text-center\">"+
        "<h6 class=\"uk-text-warning\">"+Name+"</h6>"+
         "<p>"+    
              "<div>"+"<a class=\"uk-text-warning\" href=\"#\">"+BestWork+"</a>"+"</div>"+
           "<div>"+"<a class=\"uk-text-warning\" href=\"#\">"+Personalportfolio+"</a>"+"</div>"+
            "<button class=\"uk-button-link\">"+"<a class=\"uk-text-warning\" href=\"\">"+ SeeMore+"</a>"+"</button>"+
          "</p>"+
      "</div>"+
  "</div>"+
"</li>"
);

//code for the canvas
