var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var del = document.getElementsByClassName("delete");
var list = document.getElementById("myList");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var btn=document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	btn.appendChild(document.createTextNode("delete"));
	ul.appendChild(li);
	li.appendChild(document.createTextNode(" "));
	li.appendChild(btn);
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



//  function delListAfterClick(event)
// {

	
// 	event.target.parentNode.remove();

	

// }

// del.addEventListener("click", delListAfterClick);

Array.prototype.slice.apply(del).forEach(function(item) {
  // iterate and add the event handler to it
  item.addEventListener("click", function(event) {
    event.target.parentNode.remove()
  });

 })

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);