
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { ref, getDatabase, onValue, set, push } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
  import { getAuth, createUserWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBC4P0O--vnSmWnUIOiyrutSxGy47oZ_5k",
    authDomain: "fir-user-auth-ed6eb.firebaseapp.com",
    projectId: "fir-user-auth-ed6eb",
    storageBucket: "fir-user-auth-ed6eb.appspot.com",
    messagingSenderId: "454741964786",
    appId: "1:454741964786:web:d6a14705b0b2c267e69d6b"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase();
  const auth = getAuth();

  let model = {}
  
  let userName  = document.getElementById('userName');
  let email = document.getElementById('email');
  let password = document.getElementById('password');

 /* window.signUp = function(e){
    e.preventDefault();
    model.email = email.value;
    model.userName = userName.value;
    model.password = password.value;
    console.log(model);
createUserWithEmailAndPassword(auth, model.email, model.password)
.then(function(res){
    console.log(res.user.uid,"sucess Responce");
}

  }*/

  window.signUp = function (e) {
    e.preventDefault();
    model.email = email.value;
    model.userName = userName.value;
    model.password = password.value;
    console.log(model)
    createUserWithEmailAndPassword(auth, model.email, model.password)
        .then(function (res) {
            console.log(res)
            console.log(res.user.uid, "Succes Response");//res jo oject ata hy uski aik key hy uid wo console karae hy.
            // console.log(res.user.auth[2].emailVerified)// isey try karna hy
            model.id = res.user.uid;
            var reference = ref(database, `user/${model.id}`);
            set(reference, model)
                .then(function (dbRes) {
                    alert('USer Created Succesfully');
                })
                .catch(function (dbErr) {
                    alert(dbErr.message);
                });

            email.value = "";
            userName.value = "";
            password.value = "";

        })
        .catch(function (err) {
            console.log(err, "Error Response");
            alert(err.message);
        })
}