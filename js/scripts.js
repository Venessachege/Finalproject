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


// consttructor for the people to store profile

// var Person = function(picture, name, id, email) {
//   this.picture = picture;
//   this.name = name;
//   this.id = id;
//   this.em = email;
// };
var userId = 0,
  profile;
//firebase ui

var uiConfig = {
  signInSuccessUrl: '/html/profile.html',
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
  if (user != null) {
    //loop to


    user.providerData.forEach(function(profile) {
      // console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      // profile = new Person(profile.photoURL,profile.displayName,profile.uid,profile.email)
      userId = profile.uid;
      // console.log("  Name: " + profile.displayName);
      // console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
      $('li#name').text(profile.displayName)
      $('li#email').text(profile.email)
      // $('#pic').text(profile.photoURL)
      $('#pic').attr("src", profile.photoURL)





    });
    ///end loop
    $('#firebaseui-auth-container').hide();
    $('li#member').hide();
    $('a#signOut').show()
    $('a#signOut').click(function() {
      firebase.auth().signOut().then(function() {
        location.replace("/index.html");
      });
    });
  } else {
    messageResults = '';
  }
});
// Database

$(document).ready(function() {


  var messagesRef = firebase.database().ref();
  var messageResults = document.getElementById('project');
  var messageResults = document.getElementById('portfolio');
  var messageResults = document.getElementById('tech');
  function savedata(messageField,techField,portfolioField,hobbiesField,quoteField) {

    // messagesRef.child('users').child(userId).child("profile").push({
    messagesRef.child('users').child(userId).child("profile").push({

      project:messageField,
      tech:techField,
      portfolio:portfolioField,
      hobby:hobbiesField,
      quote:quoteField
    });

  }

  $(".saveDataClass").submit(function() {
    event.preventDefault()

    var messageField = document.getElementById('messageInput').value;
    var techField = document.getElementById('messageInput1').value;
    var portfolioField = document.getElementById('messageInput2').value;
    var hobbiesField = document.getElementById('messageInput3').value;
    var quoteField = document.getElementById('messageInput4').value;

    savedata(messageField,techField,portfolioField,hobbiesField,quoteField)
  })



  setTimeout(function() {
    messagesRef.child('users').child(userId).child("profile").limitToLast(10).on('child_added', function(snapshot) {
      var data = snapshot.val();
      var message = data.project;
      var tech = data.tech;
      var portfolio = data.portfolio;
      var quote = data.quote;
      var hobby = data.hobby;
      console.log(message);
      console.log(tech);
      console.log(portfolio);
      console.log(hobby);
      console.log(quote);
      if (message != undefined) {
        messageResults.value += '\n' + message;
        $('#project').text(' : ' + message);
        $('#portfolio').text(' : ' + portfolio);
        $('#hobbies').text( hobby);
        $('#quote').text(quote);
        $('#tech').text(' : ' + tech);
  // $('#portfolio').append(' : ' + ' ' + message)
  // $('#tech').append(' : ' + ' ' + message)
  // $('#project').append(' : ' + ' ' + message)
  // $('#project').append(' : ' + ' ' + message)
      }
    });
  }, 1000);

  //trying to  Update results when data is added

  // var newPostKey=firebase.database().ref().child('users').child("profile").push().key;
  // var updates={};
  // updates["/users/profile/" +newPostKey]=postData;
  // updates['/users-profile/' + userId + '/' +newPostKey] = postData;
  //
  // return  firebase.database().ref().update(updates)

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
  // var name1= $("").val();
 //creating  the object
//  var person1=new person (name1)
//  people.push(person1);
//  //array to store the people
//   var people=[];
// //displaying the people in the public in a card
// $("").append(
//   "<li>"+
//   "<div class=\"uk-card uk-card-default\">"+
//       "<div class=\"uk-card-media-top uk-flex uk-flex-center uk-margin-remove\">" +
//           "<img class=\"uk-margin-remove\"  src=\"Images/man-01.png\" alt=\"\" >"+
//       "</div>"+
//       "<div class=\"uk-card-body uk-text-center\">"+
//         "<h6 class=\"uk-text-warning\">"+Name+"</h6>"+
//          "<p>"+
//               "<div>"+"<a class=\"uk-text-warning\" href=\"#\">"+BestWork+"</a>"+"</div>"+
//            "<div>"+"<a class=\"uk-text-warning\" href=\"#\">"+Personalportfolio+"</a>"+"</div>"+
//             "<button class=\"uk-button-link\">"+"<a class=\"uk-text-warning\" href=\"\">"+ SeeMore+"</a>"+"</button>"+
//           "</p>"+
//       "</div>"+
//   "</div>"+
// "</li>"
// );
//
// //code for the canvas
//
//
// //array to store the peopl
// var people = [{
//     person1: {
//       name: "",
//       bestproject: "",
//       PersonalPortfolio: "",
//       Picturelink: "",
//     }
//   },
//   {
//     person2: {
//       name: "",
//       bestproject: "",
//       PersonalPortfolio: ""
//     }
//   },
//   {
//     person3: {
//       name: "",
//       bestproject: "",
//       PersonalPortfolio: ""
//     }
//   },
//   {
//     person4: {
//       name: "",
//       bestproject: "",
//       PersonalPortfolio: ""
//     }
//   },
//   {
//     person5: {
//       name: "",
//       bestproject: "",
//       PersonalPortfolio: ""
//     }
//   }
// ];
