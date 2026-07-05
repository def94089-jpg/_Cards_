import { auth, db } from "./firebase-config.js";

import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
GoogleAuthProvider,
signInWithPopup,
sendPasswordResetEmail,
onAuthStateChanged,
signOut
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

import {
doc,
setDoc,
serverTimestamp
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

/* ===============================
   LOGIN
================================*/

window.login = async function(){

const email=document.getElementById("loginEmail").value.trim();

const password=document.getElementById("loginPassword").value;

if(email==="" || password===""){

alert("Please fill all fields.");

return;

}

try{

await signInWithEmailAndPassword(auth,email,password);

alert("Login Successful!");

window.location.href="../index.html";

}

catch(error){

alert(error.message);

}

};

/* ===============================
   SIGN UP
================================*/

window.signUp = async function(){

const name=document.getElementById("signupName").value.trim();

const email=document.getElementById("signupEmail").value.trim();

const password=document.getElementById("signupPassword").value;

if(name===""||email===""||password===""){

alert("Please fill all fields.");

return;

}

try{

const userCredential=await createUserWithEmailAndPassword(

auth,

email,

password

);

await setDoc(

doc(db,"users",userCredential.user.uid),

{

name:name,

email:email,

createdAt:serverTimestamp()

}

);

alert("Account Created Successfully!");

window.location.href="../index.html";

}

catch(error){

alert(error.message);

}

};

/* ===============================
   GOOGLE LOGIN
================================*/

const provider=new GoogleAuthProvider();

const googleButtons=[

document.getElementById("googleLogin"),

document.getElementById("googleSignup")

];

googleButtons.forEach(btn=>{

if(btn){

btn.addEventListener("click",async()=>{

try{

await signInWithPopup(auth,provider);

window.location.href="../index.html";

}

catch(error){

alert(error.message);

}

});

}

});

/* ===============================
   FORGOT PASSWORD
================================*/

window.resetPassword = async function(){

const email=prompt("Enter your registered email");

if(!email) return;

try{

await sendPasswordResetEmail(auth,email);

alert("Password reset email sent.");

}

catch(error){

alert(error.message);

}

};

/* ===============================
   AUTO LOGIN
================================*/

onAuthStateChanged(auth,(user)=>{

if(user){

console.log("Logged In:",user.email);

}

});

/* ===============================
   LOGOUT
================================*/

window.logout = async function(){

await signOut(auth);

window.location.href="login.html";

};