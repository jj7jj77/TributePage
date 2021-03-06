function sayHello() {
	alert("hey there");
	document.getElementById("msgButton").innerHTML = "You clicked the message button!";
}

function button() {
	document.getElementById("clickButton").innerHTML = "You clicked the click me button!";
}

function reset() {
	document.getElementById("msgButton").innerHTML = "Get Message!";
 	document.getElementById("clickButton").innerHTML = "Click Me!";
}

//-----------------------------------------------------------------

//don't pass parameters
//only put parts in the function that matter

//Adds the item to the item list when clicking the button
function addItem() {
  var inputItemList = document.getElementById("inputItemList");
  if (
    inputItemList &&
    inputItemList.value &&
    inputItemList.value.trim().length > 0
    ) 
  {
    document.getElementById("errorbox").innerText = "";
    
    var ul = document.getElementById("variableList");
    var li = document.createElement("li");
    var inputItemList = document.getElementById("inputItemList");
   
    li.setAttribute("id", inputItemList.value);
    li.appendChild(document.createTextNode(inputItemList.value));
    ul.appendChild(li);
  } 
  else 
  {
    document.getElementById("errorbox").innerText = "button works";
  }
  document.getElementById("myForm").reset();
  inputItemList.focus();
}


//EventListener of the Enter Key
document.addEventListener("DOMContentLoaded", function(event) {  //the DOM is loaded
    var inputItemList = document.getElementById("inputItemList");
    inputItemList.addEventListener("keypress", function(event) {  //and then you put the event into the input (attaching the evnt to the input)
        document.getElementById("errorbox").innerText = "";
        if (event.keyCode === 13) {  //everytime you press enter when the cursor is focused  in the input, this code is going to run
            event.preventDefault(); 
            if (
                event.currentTarget.value && 
                event.currentTarget.value.length > 0) 
            {
                addItem();
            }
            else {
                document.getElementById("errorbox").innerText = "text field is empty";
            }
            return false;
        } 
    });
});


//Removes the item from the item list
function removeItem() {
    var ul = document.getElementById("variableList");
    //ul.removeChild(ul.lastElementChild); //goes through the list and removes the last child from the list
    if (ul.firstChild) {
        ul.removeChild(ul.lastChild);
    }
    else {
        alert("There are no more items to remove");
    }
}


//Reset Button clears the item that was written in the text field.
function btnReset(){
    document.getElementById("inputItemList").value="";
}



