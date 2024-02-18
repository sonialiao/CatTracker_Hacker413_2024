// Create a "close" button and append it to each list item
var toDosLst = document.getElementsByTagName("li");
var i;
for (i = 0; i < toDosLst.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  toDosLst[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    addProgress();
  }
}

// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');

list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

setInterval(updateProgress, 500);
function updateProgress() {
  var completed = document.getElementsByClassName("checked").length;
  var bar = document.getElementById("workProgress");
  var total = document.getElementById("tasks").getElementsByTagName('li').length;
  if (completed/total <= 1) bar.style.width = ((completed/total)*100) + '%';
}

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("toDoInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("tasks").appendChild(li);
  }
  document.getElementById("toDoInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
}

function checkEnterKey(event){
  if(event.keyCode === 13){
    newElement();
  }
}