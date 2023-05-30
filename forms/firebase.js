
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, onAuthStateChanged, signOut
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getDatabase,set,ref,update } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"




  // TODO: Add SDKs for Firebase products that you want to use
//   https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAyfLOGANgUcP40ZE3HL-30r4_PsTVXaUY",
    authDomain: "elt-express-web.firebaseapp.com",
    projectId: "elt-express-web",
    storageBucket: "elt-express-web.appspot.com",
    messagingSenderId: "383369967874",
    appId: "1:383369967874:web:957eb1d83915825ad36a1b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const database = getDatabase(app);
  const provider = new GoogleAuthProvider(app);

google.addEventListener('click', (e) => {
signInWithPopup(auth, provider)
.then((result) => {
// This gives you a Google Access Token. You can use it to access the Google API.
const credential = GoogleAuthProvider.credentialFromResult(result);
const token = credential.accessToken;
// The signed-in user info.
const user = result.user;
email = email,
photo = photoURL

alert(user.displayName);
// ...
}).catch((error) => {
// Handle Errors here.
const errorCode = error.code;
const errorMessage = error.message;
// The email of the user's account used.
const email = error.customData.email;
// The AuthCredential type that was used.
const credential = GoogleAuthProvider.credentialFromError(error);
// ...
alert(errorMessage);
});

})

  submitData.addEventListener("click", (e) => {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  // console.log(fname);

  signInWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
      var lgDate = new Date();
      return update(ref(database, 'users/' + user.uid), {
        
        last_login: lgDate,

      })
      .then(() => {
        // Data saved successfully!
         alert("Log in successful");
     
         location.href = "index.html";
      })
      .catch((error) => {
        // The write failed...
        alert("error");
    });

    })
.catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      alert("Could not login");
    
    });
    });


    const user = auth.currentUser;
    onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  logout.addEventListener("click", (e)=>{
        signOut(auth).then(() => {
          // Sign-out successful.
          alert("Logged out successfully")


        }).catch((error) => {
          // An error happened.
          const errorCode = error.code;
      const errorMessage = error.message;
      // ...
      alert("Logout Unsuccessful");
        });

  });
