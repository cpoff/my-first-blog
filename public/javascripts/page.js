(function() {
var title = document.getElementsByTagName('title');
title[0].innerHTML = "The Big House";

var article = document.getElementsByTagName('article');

var work = document.getElementsByTagName('p');
article[0].removeChild(work[0]);

var header = document.getElementsByTagName('h1');
header[0].innerHTML = "My JavaScript Blog";

var h2 = document.createElement('h1');
h2.innerHTML="My Second Blog Post";
article[0].appendChild(h2);

var p2 = document.createElement('p');
p2.innerHTML="This is a blog post about really awesome stuff I've done in JavaScript..";
article[0].appendChild(p2);

var h1 = document.createElement('h1');
h1.innerHTML="First post!";
article[0].appendChild(h1);
h1.addEventListener('click');

var p1 = document.createElement('p');
p1.innerHTML="This is the first blog post I've ever written.";
article[0].appendChild(p1);

// ------------------

var p3 = document.createElement('p');
p3.innerHTML = "<p><b>HEY</b>: I now take credit card payments. Hand it over, sucka!</p>";

work[1].appendChild(p3);

var makeForm = document.createElement('form');

function formation(text){
var makeLabel = document.createElement('label');
var makeInput = document.createElement('input');

makeForm.setAttribute('action', '"')
makeLabel.setAttribute('for', 'GET-name')
makeLabel.innerHTML=text;
makeInput.setAttribute('name', 'text')
makeForm.appendChild(makeLabel)
makeForm.appendChild(makeInput)
document.body.appendChild(makeForm)
}

formation("<br>Email: ");
formation("<br>CC Number: ");
formation("<br>CC Exp. MMYY: ");
formation("<br>CC Verification: ");
formation("<br>Name: ");
formation("<br>City: ");
formation("<br>State: ");


})();

