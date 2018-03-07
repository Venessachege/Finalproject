
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

//user interface logic

  // consttructor for the people to store profile

 person (picture,name,bestproject,personalPortfolio){
      this.picture=picture;
      this.name=name;
      this.bestproject=bestproject;
      this.personalPortfolio=personalPortfolio;
 }

 //array to store the people
  var people=[{person1:{
                       name:"",
                       bestproject:"",
                       PersonalPortfolio:"",
                       Picturelink: "",
                      }},
                      {person2:{
                        name:"",
                        bestproject:"",
                        PersonalPortfolio:""
                       }},
                       {person3:{
                        name:"",
                        bestproject:"",
                        PersonalPortfolio:""
                       }},
                       {person4:{
                        name:"",
                        bestproject:"",
                        PersonalPortfolio:""
                       }},
                       {person5:{
                        name:"",
                        bestproject:"",
                        PersonalPortfolio:""
                       }}
  ];
