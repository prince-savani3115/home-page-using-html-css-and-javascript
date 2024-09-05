const submitBtn = document.getElementById("submit")
submitBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log("called");
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const nameError = document.getElementById("name-error");
  const passwordError = document.getElementById("password-error");



  nameError.textContent = "";
  passwordError.textContent = "";


  let isValid = true;

  if (username === "" ) {
    nameError.textContent = "Please enter a valid username address.";
    isValid = false;
  } else {
    document.getElementById("username").style.display = "block";
  }


  if (password === "") {
    passwordError.textContent = "Please enter a password .";
    isValid = false;
  } else {
    document.getElementById("password").style.display = "block";
  }

  return isValid;
})

document.getElementById("username").addEventListener("input", (e) => {
  if (username.value !== "") {
    document.getElementById("name-error").style.display = "none";
  } else {
    document.getElementById("name-error").style.display = "block";
  }
});
document.getElementById("password").addEventListener("input", (e) => {
  if (password.value !== "") {
    document.getElementById("password-error").style.display = "none";
  } else {
    document.getElementById("password-error").style.display = "block";
  }

});



function saveData(){
  let emailUser,password;
  emailUser = document.getElementById("username").value;
  password = document.getElementById("password").value;

  let userRecord = new Array();
  userRecord = JSON.parse(localStorage.getItem("users"))? JSON.parse(localStorage.getItem("users")):[]
  if(emailUser&&password !== ""){if(userRecord.some((v)=>{
    return v.emailUser==emailUser && v.password==password
  })){
    alert("login successfully")
    window.location.href="http://127.0.0.1:5500/homepage/homepage.html";
  }else{
    alert("Login failed ")
    window.location.href="http://127.0.0.1:5500/registration/registration.html"
  }
  }
}

