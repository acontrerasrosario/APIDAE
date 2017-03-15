// $('.fab').click(function(e) {
//   $(this).toggleClass('active');
//   $(this).children('i').toggleClass('zmdi-account-add');
//   $(this).children('i').toggleClass('zmdi-close');
// });

 // Initialize Firebase
const config = {
    apiKey: "AIzaSyB0IXn8A10yGVM5rGR871L7i2BapIOMgQQ",
    authDomain: "apidae-4f97d.firebaseapp.com",
    databaseURL: "https://apidae-4f97d.firebaseio.com",
    storageBucket: "apidae-4f97d.appspot.com",
    messagingSenderId: "841472032050"
  };
firebase.initializeApp(config);
var storage = firebase.storage();

// get elements
var txtEmail = document.getElementById('txtEmail');
var txtPassword = document.getElementById('txtPassword');
var btnLogin = document.getElementById('btnLogin');
var btnSignUp = document.getElementById('btnSignUp');
var btnLogout = document.getElementById('btnLogout');

// user information
var name
var email
var photoUrl

 
// add login event
/*
    Handles the sign in button press
*/

function LogIn(){
        //get email and txtPassword
        var email = txtEmail.value;
        var pass = txtPassword.value;
        var auth = firebase.auth();
      if (auth.curentUser){
        // [START signout]
        firebase.auth().signOut();
        // [END signout]
      } else {
        if(email.length < 4){
          alert('Please enter an email address');
          return;
        }
        if(pass.length < 4){
          alert('Please enter a password.');
          return;
        }
      }
       //sign in
          var promise = auth.signInWithEmailAndPassword(email,pass).catch(function(error){
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if(errorCode==='auth/wrong-password'){
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error);
          // [END_EXCLUDE]
        });     
};



// Add signup event
// we will not use this.
 function handleSignUp() {
      var email = txtEmail.value;
      var pass = txtPassword.value;
      if (email.length < 4) {
        alert('Please enter an email address.');
        return;
      }
      if (password.length < 4) {
        alert('Please enter a password.');
        return;
      }
      // Sign in with email and pass.
      // [START createwithemail]
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/weak-password') {
          alert('The password is too weak.');
        } else {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END createwithemail]
    }

    /**
     * Sends an email verification to the user.
     */
    function sendEmailVerification() {
      // [START sendemailverification]
      firebase.auth().currentUser.sendEmailVerification().then(function() {
        // Email Verification sent!
        // [START_EXCLUDE]
        alert('Email Verification Sent!');
        // [END_EXCLUDE]
      });
      // [END sendemailverification]
    }


    function sendPasswordReset() {
      var email = txtEmail.value;
      // [START sendpasswordemail]
      firebase.auth().sendPasswordResetEmail(email).then(function() {
        // Password Reset Email Sent!
        // [START_EXCLUDE]
        alert('Password Reset Email Sent!');
        // [END_EXCLUDE]
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // [START_EXCLUDE]
        if (errorCode == 'auth/invalid-email') {
          alert(errorMessage);
        } else if (errorCode == 'auth/user-not-found') {
          alert(errorMessage);
        }
        console.log(error);
        // [END_EXCLUDE]
      });
      // [END sendpasswordemail];
    }



//logout method
function LogOut(){

      firebase.auth().signOut();
     
};

// create a storage reference from our storage service












 

