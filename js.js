const newDiv = document.createElement("h1");
const newContent = document.createTextNode("hii");
newDiv.appendChild(newContent);
const hai = document.getElementsByTagName("main");
hai[0].appendChild(newDiv);

let body = document.getElementsByTagName("body")[0];
let newElement = document.createElement("h1");
let element = document.createTextNode("Hello");
newElement.appendChild(element);
body.appendChild(newElement);

const img = document.createElement("img");
img.src =
  "https://images.pexels.com/photos/14918477/pexels-photo-14918477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
body.appendChild(img);
