// ADD NEW ITEM TO END OF LIST
var nodeList = document.getElementsByTagName('ul')[0];
//var nodeList = list[0];
var newLast = document.createElement("li");
newLast.innerHTML = "cream";
nodeList.appendChild(newLast);

// ADD NEW ITEM START OF LIST
var newFirst = document.createElement("li");
var eleList = document.getElementsByTagName('li');
newFirst.innerHTML = "kale";
nodeList.insertBefore(newFirst, eleList[0]);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
for(var i = 0; i < eleList.length; i++){
  eleList[i].classList.add('cool');
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING
var heading = document.getElementsByTagName('h2')[0];
var itemNum = "<span>" + eleList.length + "</span>";

heading.innerHTML += itemNum;
