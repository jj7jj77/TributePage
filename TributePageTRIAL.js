//don't pass parameters
//only put parts inthe function that matter

//Adds the item to the item list
function addItem() {
  var inputItemList = document.getElementById("inputItemList");
  if (
    inputItemList &&
    inputItemList.value &&
    inputItemList.value.trim().length > 0
  ) {
    document.getElementById("errorbox").innerText = "";
    
    var ul = document.getElementById("variableList");
    var li = document.createElement("li");
    var inputItemList = document.getElementById("inputItemList");
   
    li.setAttribute("id", inputItemList.value);
    li.appendChild(document.createTextNode(inputItemList.value));
    ul.appendChild(li);
  } 
  else {
    document.getElementById("errorbox").innerText = "text field is empty";
  }
}

//EventListener of the Enter Key
var inputItemList = document.getElementById("inputItemList");
   inputItemList.addEventListener("keypress", function(event) {
    console.log("testing items:", items);
            document.getElementById("errorbox").innerText = "";
        if (event.keyCode === 13) {
            event.preventDefault();
            if (
                event.currentTarget.value && 
                event.currentTarget.value.length > 0
            ) {
                addItem();
            } 
            else {
              document.getElementById("errorbox").innerText = "text field is empty";
            }
            return false;
        }
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





