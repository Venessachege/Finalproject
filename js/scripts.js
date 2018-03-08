var config = {
    apiKey: "AIzaSyByoAbvVGhI6Dsexa6bzx5A8JodfseqdCI",
    authDomain: "helloworld-fd9ac.firebaseapp.com",
    databaseURL: "https://helloworld-fd9ac.firebaseio.com",
    projectId: "helloworld-fd9ac",
    storageBucket: "helloworld-fd9ac.appspot.com",
    messagingSenderId: "419845074355"
};


firebase.initializeApp(config)
// Get a reference to the database service
var database = firebase.database().ref().child('user');
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
  var result = $('#results')
  database.on('value', function(snap){
    console.log(snap.val());
    var data = snap.val()

    result.append(data.Age);
    
  });
});

//user interface logic



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
