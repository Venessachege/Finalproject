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



var userId = 0;
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
  if (user != null) {
    //loop to


    user.providerData.forEach(function(profile) {
      // console.log("Sign-in provider: " + profile.providerId);
      console.log("  Provider-specific UID: " + profile.uid);
      userId = profile.uid;
      // console.log("  Name: " + profile.displayName);
      // console.log("  Email: " + profile.email);
      console.log("  Photo URL: " + profile.photoURL);
      $('li#name').text(profile.displayName)
      $('li#email').text(profile.email)
      $('#pic').text(profile.photoURL)
      $('.pic').attr("src", profile.photoURL)



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
  var messageField = document.getElementById('messageInput');
  var messageResults = document.getElementById('results');

  // Save data to firebase
  function savedata() {
    var message = messageField.value;

    messagesRef.child('users').child(userId).push({
      fieldName: 'messageField',
      text: message
    });
    messageField.value = '';
  }

  $("#savedata").click(function() {
    savedata()
  })



  setTimeout(function(){
    messagesRef.child('users').child(userId).limitToLast(10).on('child_added', function(snapshot) {
      var data = snapshot.val();
      var message = data.text;

      if (message != undefined) {
        messageResults.value += '\n' + message;
      }
    });
   }, 3000);

  // Update results when data is added

  console.log("snsjns");

});

//user interface logic

// consttructor for the people to store profile

var person = function(picture, name, bestproject, personalPortfolio) {
  this.picture = picture;
  this.name = name;
  this.bestproject = bestproject;
  this.personalPortfolio = personalPortfolio;
};

//array to store the peopl
var people = [{
    person1: {
      name: "",
      bestproject: "",
      PersonalPortfolio: "",
      Picturelink: "",
    }
  },
  {
    person2: {
      name: "",
      bestproject: "",
      PersonalPortfolio: ""
    }
  },
  {
    person3: {
      name: "",
      bestproject: "",
      PersonalPortfolio: ""
    }
  },
  {
    person4: {
      name: "",
      bestproject: "",
      PersonalPortfolio: ""
    }
  },
  {
    person5: {
      name: "",
      bestproject: "",
      PersonalPortfolio: ""
    }
  }
];
