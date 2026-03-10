const form = document.getElementById("form");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");

const strength = document.getElementById("strength");
const toggle = document.getElementById("toggle");


// PASSWORD SHOW HIDE

toggle.addEventListener("click", function(){

if(passwordInput.type === "password"){
passwordInput.type = "text";
toggle.textContent = "Hide";
}
else{
passwordInput.type = "password";
toggle.textContent = "Show";
}

});


// PASSWORD STRENGTH

passwordInput.addEventListener("input", function(){

let value = passwordInput.value;

if(value.length < 6){
strength.textContent = "Weak Password";
strength.style.color = "red";
}
else if(value.length < 10){
strength.textContent = "Medium Password";
strength.style.color = "orange";
}
else{
strength.textContent = "Strong Password";
strength.style.color = "green";
}

});


// FORM SUBMIT

form.addEventListener("submit", function(e){

e.preventDefault();

let name = nameInput.value;
let email = emailInput.value;
let phone = phoneInput.value;
let password = passwordInput.value;


// GET OLD DATA

let submissions = JSON.parse(localStorage.getItem("submissions")) || [];


// NEW DATA

let user = {
name:name,
email:email,
phone:phone,
password:password
};

submissions.push(user);


// SAVE

localStorage.setItem("submissions", JSON.stringify(submissions));

alert("Registration Successful");

form.reset();

});
