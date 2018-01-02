// image changer on click for the img element with id ='yung'
var myImage = document.getElementById('yung');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/yung.png') {
      myImage.setAttribute ('src','images/bodyparts.jpg');
    } else 
        if(mySrc === 'images/bodyparts.jpg'){
          myImage.setAttribute ('src','images/bodyparts2.jpg');
        } else
            if(mySrc === 'images/bodyparts2.jpg'){
              myImage.setAttribute ('src','images/spaghetti3.jpg');
            } else
                if(mySrc === 'images/spaghetti3.jpg'){
                  myImage.setAttribute ('src','images/spaghetti2.jpg');
                } else
                    if(mySrc === 'images/spaghetti2.jpg'){
                      myImage.setAttribute ('src','images/spaghetti4.jpg');
                    } else
                        myImage.setAttribute ('src','images/yung.png');
}

// button to check user name if they have been to the site before, if not store name
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your new skin.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'come get that cheese ' + myName;
  if(localStorage.getItem('name')==='pizza'){
    window.alert('***THE FBI HAS BEEN NOTIFIED***');
    window.alert('***THE FBI HAS BEEN NOTIFIED***');
    window.alert('***THE FBI HAS BEEN NOTIFIED***');
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'come get that cheese ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}


