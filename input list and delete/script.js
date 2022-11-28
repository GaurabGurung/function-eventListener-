var input = document.getElementById ("in");
var button = document.getElementById ("ent");
var ul = document.querySelector ("ul")
var li = document.getElementsByTagName ("li");




cross ();
removeItem ()

function valueLength (){
	return input.value.length;
}

function creatingElement (){
	let li = document.createElement ("li");
	let button = document.createElement ("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild (button);
	button.innerHTML = "delete";
	input.value = "";

	cross();
	removeItem ()
}

button.addEventListener ("click", function(){
	if(valueLength() > 0 ) {
		creatingElement ();
	}
})

input.addEventListener ("keypress", function(event){
	if(valueLength()> 0 && event.which === 13){
		creatingElement();
	}
})

function cross (){
	for (let i=0; i<li.length; i++){
		li[i].addEventListener ("click", changeClass);
	}
}

function changeClass (){
	this.classList.toggle("done");
}

function removeItem (){
	var button= document.querySelectorAll ("ul button");
	for (let i=0; i< button.length; i++){
		button[i].addEventListener("click", clearElement);
	}

}
function clearElement(){
	for (let i=0; i<li.length; i++){
	this.parentNode.remove();
	}
}






