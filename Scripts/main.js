var myImage = document.getElementById('yung');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yung.png') {
    myImage.setAttribute ('src','images/bodyparts.jpg');
    } else {
      myImage.setAttribute ('src','images/yung.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}