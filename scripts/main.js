let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/wyf1.jpg") {
    myImage.setAttribute("src", "images/wyf2.jpg");
  } 
  else if(mySrc === "images/wyf2.jpg"){
    myImage.setAttribute("src", "images/wyf3.jpg");
  }
  else if(mySrc === "images/wyf3.jpg"){
    myImage.setAttribute("src", "images/wyf4.jpg");
  }
  else if(mySrc === "images/wyf4.jpg"){
    myImage.setAttribute("src", "images/wyf5.jpg");
  }
  else if(mySrc === "images/wyf5.jpg"){
    myImage.setAttribute("src", "images/wyf6.jpg");
  }
  else if(mySrc === "images/wyf6.jpg"){
    myImage.setAttribute("src", "images/wyf7.jpg");
  }
  else
  myImage.setAttribute("src", "images/wyf1.jpg");
};
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    let myName = prompt("请输入用户名。");
    if (!myName) {
        setUserName();
    }
    else
    {
    localStorage.setItem("name", myName);
    myHeading.textContent = "欢迎" + myName+"欣赏王翼菲美照";
    }
  }

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "欢迎" + storedName+"欣赏王翼菲美照";
  }
  
  myButton.onclick = function () {
    setUserName();
  };
