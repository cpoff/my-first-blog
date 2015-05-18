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

var p1 = document.createElement('p');
p1.innerHTML="This is the first blog post I've ever written.";
article[0].appendChild(p1);

})();