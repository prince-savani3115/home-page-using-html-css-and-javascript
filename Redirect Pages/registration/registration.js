
function saveData(){
  let name,address,emailUser,password,course,college;
  name = document.getElementById("name").value;
  address = document.getElementById("address").value;
  emailUser = document.getElementById("email").value;
  password = document.getElementById("password").value;
  course = document.getElementById("subject").value;
  btech = document.getElementById("course").value;
  bba = document.getElementById("course1").value;
  bca = document.getElementById("course2").value;
  bcom = document.getElementById("course3").value;
  college = document.getElementById("comment").value;

  let userRecords = new Array();
  userRecords = JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
  if(userRecords.some((v)=>{
    return v.emailUser==emailUser
  })){
    
  }
  else{
  userRecords.push({
    "name" : name,
    "address" : address,
    "emailUser" : emailUser,
    "password" : password,
    "course" : course,
    "college" : college
   })
   localStorage.setItem("users",JSON.stringify(userRecords))
}
}

const submitButton = document.getElementById("show-login");
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("called");
  const name = document.getElementById("name").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const subject = document.getElementById("subject").value;
  const agree = document.getElementById("agree").checked;
  
  const nameError = document.getElementById("name-error");
  const addressError = document.getElementById("address-error");
  const emailError = document.getElementById("email-error");
  const passwordError = document.getElementById("password-error");
  const subjectError = document.getElementById("subject-error");
  const agreeError = document.getElementById("agree-error");

  nameError.textContent = "";
  addressError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  subjectError.textContent = "";
  agreeError.textContent = "";

  let isValid = true;

  if (name === "" || /\d/.test(name)) {
    nameError.textContent = "Please enter your name properly.";
    isValid = false;
  } else {
    document.getElementById("name").style.display = "block";
  }

  if (address === "") {
    addressError.textContent = "Please enter your address.";
    isValid = false;
  } else {
    document.getElementById("address").style.display = "block";
  }

  if (email === "" && !email.includes("@")) {
    emailError.textContent = "Please enter a valid email address.";
    isValid = false;
  } else {
    document.getElementById("email").style.display = "block";
  }

  if (password === "") {
    passwordError.textContent = "Please enter a password .";
    isValid = false;
  } else {
    document.getElementById("password").style.display = "block";
  }

  if (subject === "") {
    subjectError.textContent = "Please select your course.";
    isValid = false;
  } else {
    document.getElementById("subject").style.display = "block";
  }

  if (!agree) {
    agreeError.textContent = "Please agree to the above information.";
    isValid = false;
  } else {
    document.getElementById("agree").style.display = "block";
  }

  if(name&&address&&email&&password&&subject !== ""){
      window.location.href="http://127.0.0.1:5500/login/login.html"
    }

  
  return isValid;
  
});

const name = document.getElementById("name");
const address = document.getElementById("address");
const email = document.getElementById("email");
const password = document.getElementById("password");
const course = document.getElementById("course");
const course1 = document.getElementById("course1");
const course2 = document.getElementById("course2");
const course3 = document.getElementById("course3");
const selectCourse = document.getElementById("selectcrs");
document.getElementById("name").addEventListener("input", (e) => {
  if (name.value !== "") {
    document.getElementById("name-error").style.display = "none";
  } else {
    document.getElementById("name-error").style.display = "block";
  }
});
document.getElementById("address").addEventListener("input", (e) => {
  if (address.value !== "") {
    document.getElementById("address-error").style.display = "none";
  } else {
    document.getElementById("address-error").style.display = "block";
  }
});
document.getElementById("email").addEventListener("input", (e) => {
  if (email.value !== "" || !email.includes("@") ) {
    document.getElementById("email-error").style.display = "none";
  } else {
    document.getElementById("email-error").style.display = "block";
  }
});
document.getElementById("password").addEventListener("input", (e) => {
  if (password.value !== "") {
    document.getElementById("password-error").style.display = "none";
  } else {
    document.getElementById("password-error").style.display = "block";
  }
});
document.getElementById("subject").addEventListener("input", (e) => {
  if (subject.value === course&&course1&&course2&&course3) {
    document.getElementById("subject-error").style.display = "block";
  } else {
    document.getElementById("subject-error").style.display = "none";
  }

});


const checkbox = document.getElementById("agree")
checkbox.checked = true;
checkbox.checked = false;
document.getElementById("agree").addEventListener("click", (e) => { 
  if(checkbox.checked){
    document.getElementById("agree-error").style.display = "none";
  }else{
    document.getElementById("agree-error").style.display = "inline-block";

  }
});




