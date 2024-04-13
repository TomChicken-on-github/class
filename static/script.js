let loginBtn = document.getElementById("login");
let logoutBtn = document.getElementById("logout");
let loginPage = document.getElementsByClassName("page-login")[0];
let logoutPage = document.getElementsByClassName("logoutPage")[0];
let loginCloseBtn = document.getElementsByClassName("close")[0];
let userInput = document.getElementById("user");
let pwdInput = document.getElementById("pwd");
let banner = document.getElementById("banner");
let info = document.getElementById("info");

loginBtn.onclick = () => {
  loginPage.style.display = "block";
}

logoutBtn.onclick = () => {
  logoutPage.style.display = "block";
}

loginCloseBtn.onclick = () => {
  loginPage.style.display = "none";
  inputReset();
}

userInput.onfocus = () => {
  info.style.display = "none";
  if (pwdInput.value === "") {
    banner.setAttribute("src", "eyesopen.jpeg");
  }
}

pwdInput.onfocus = () => {
  info.style.display = "none";
  banner.setAttribute("src", "eyesclosed.jpeg")
}

loginPage.onmousewheel = (e) => {
  return false;
}

function inputReset() {
  banner.setAttribute("src", "eyesopen.jpeg")
  userInput.value = "";
  pwdInput.value = "";
}
