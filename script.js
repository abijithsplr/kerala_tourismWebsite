var email = document.getElementById("exampleInputEmail2");
var pwd = document.getElementById("exampleInputPassword2");
var pwdre = document.getElementById("exampleInputPassword3");
var erorE = document.getElementById("emailHelp");
var erorP = document.getElementById("PasswordHelp1");
var phoneNumber = document.getElementById("exampleInputPhoneNumber");
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
regfirstName = /^[A-za-z]+$/;
regLastName = /^[A-za-z]+$/;
var erorReenter=document.getElementById("PasswordHelp2");
var errorPhone=document.getElementById("phonenumberHelp");
let regexp = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;

let regPhoneNumber1 = /^([0-9]{3,3})-([0-9]{3,3})-([0-9]{4,4})$/;

let regPhoneNumber2 = /^([0-9]{3,3}).([0-9]{3,3}).([0-9]{4,4})$/;

let regPhoneNumber3 = /^([0-9]{3,3}) ([0-9]{3,3}) ([0-9]{4,4})$/;

let strongPwd = /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{8,}/;

let mediumPwd = /(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).{6,}/;

let poorPwd = /((?=.*[a-z])|(?=.*[A-Z])|(?=.*[0-9]))/;
let eye =document.getElementById ("btnPwdToggle");
// Email validxation

function validateEmail() {
  if (regexp.test(email.value)) {
    erorE.innerHTML = "<b>Valid mail<b>";
    erorE.style.color = "green";
    return true;
  }
  else if (email.value == "") {
    erorE.innerHTML = "Enter your E-mail id";
    erorE.style.color = "#6c757d";
    (document.getElementById("field")).style.visibility="visible";
    return false;
  }
  else {
    erorE.innerHTML = "<b> Invalid mail <b>";
    erorE.style.color = "red";
    return false;
  }
}
// Password validation
function validatePassword() {

  if (pwd.value == "") {
    erorP.innerHTML = "Must be 8-20 characters long. ";
    erorP.style.color = "#6c757d";
    pwd.style.backgroundColor = "#fff";
    pwd.style.border = "1px solid #ced4da";
    (document.getElementById ("btnPwdToggle")).style.border ="1px solid #ced4da";
    eye.style.borderLeft="0 none transparent";
    (document.getElementById("field")).style.visibility="visible";

    return false;
  }
  else if (strongPwd.test(pwd.value)) {
    erorP.innerHTML = "<b>Password strength: Strong<b>";
    erorP.style.color = "green";
    pwd.style.border = "2px solid green";
    pwd.style.borderRight="0 none transparent";
    (document.getElementById ("btnPwdToggle")).style.border ="2px solid green";
    eye.style.borderLeft="0 none transparent";
    return true;
  }
  else if (mediumPwd.test(pwd.value)) {
    
    erorP.innerHTML = "<b>Password strength: Medium <b>";
    erorP.style.color = "orange";
    pwd.style.border = "2px solid orange";
    pwd.style.borderRight="0 none transparent";
    (document.getElementById ("btnPwdToggle")).style.border ="2px solid orange";
    eye.style.borderLeft="0 none transparent";
    return false;
  }
  else if (poorPwd.test(pwd.value)) {
    erorP.innerHTML = "<b>Password strength: Poor<b>";
    erorP.style.color = "red";
    pwd.style.border = "2px solid red";
    pwd.style.borderRight="0 none transparent";
    (document.getElementById ("btnPwdToggle")).style.border ="2px solid red";
    eye.style.borderLeft="0 none transparent";
    return false;
  }
  else if (pwd.value.trim() == "") {
    (document.getElementById("field")).style.visibility="visible";
    return false;
  }
}
// Phone number validation
function validatePhoneNumber() {
  if (regPhoneNumber1.test(phoneNumber.value)) {
    errorPhone.innerHTML="Enter your 10 digit phone number";
    errorPhone.style.color="#6c757d";
    return true;
  }
  else if (regPhoneNumber2.test(phoneNumber.value)) {
    errorPhone.innerHTML="Enter your 10 digit phone number";
    errorPhone.style.color="#6c757d";
    return true;
  }
  else if (regPhoneNumber3.test(phoneNumber.value)) {
    errorPhone.innerHTML="Enter your 10 digit phone number";
    errorPhone.style.color="#6c757d";
    return true;
  }
  else if (phoneNumber.value.trim() ==""){
    errorPhone.innerHTML="Enter your 10 digit phone number";
    errorPhone.style.color="#6c757d";
    (document.getElementById("field")).style.visibility="visible";
    return false;
  }
  else{
    errorPhone.innerHTML="<b>Enter the phone number in correct format<b>";
    (document.getElementById("field")).style.visibility="hidden";
    errorPhone.style.color="red";
    return false;
  }
}
// Double check password
function re_enterPassword() {
  if (pwdre.value == pwd.value) {
    erorReenter.innerHTML=" Re-enter the password ";
    erorReenter.style.color="#6c757d";
    return true;
  }
  else if (pwdre.value.trim()==""){
    (document.getElementById("field")).style.visibility="visible";
  }
  else {
    erorReenter.innerHTML="<b>Invalid Password<b>";
    erorReenter.style.color="red";
    (document.getElementById("field")).style.visibility="hidden";
    return false;
  }
}
// name field validation
function checkName() {
  if (regfirstName.test(firstName.value) && regLastName.test(lastName.value)) {
    console.log("true");
    return true;
  }
  else if (lastName.value.trim() == "" ) {    
    (document.getElementById("field")).style.visibility="visible";
    return false;
  }
  else if(firstName.value.trim() == "") {
    (document.getElementById("field")).style.visibility="visible";
    return false ;
  }
  else {
    return false;
  }
}
function pwdToggle(btn,ob) {
  ob=document.getElementById(ob);
  ob.type = ob.type === 'text' ? 'password' : 'text';
  // console.log(ob,btn.children);
  btn.children[0].setAttribute('name',
    (ob.type === 'text') ? 'eye-outline' : 'eye-off-outline')
    
}
function login() {
  var loginEmail=document.getElementById("exampleInputEmail1");
  var loginPassword =document.getElementById("exampleInputPassword1");
  if (regexp.test(loginEmail.value) && strongPwd.test(loginPassword.value)) {
    return true;
  }
  else{
    return false;
  }
}
// function field() {
//   if ((email.value=="")|)
// }
// whole submit validation
function check() {
  if (validateEmail() == true && validatePhoneNumber() == true && validatePassword()==true && re_enterPassword()==true && checkName()==true) {
    console.log("true");
    (document.getElementById("field")).style.visibility="hidden";
    erorReenter.innerHTML=" Re-enter the password";
      erorReenter.style.color="#6c757d";
      errorPhone.innerHTML="Enter your 10 digit phone number";
        errorPhone.style.color="#6c757d";
    return true;
  }
  else {
    // (document.getElementById("field")).style.visibility="visible";
    return false;
  }
}
