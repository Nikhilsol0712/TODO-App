// add an item

//attach a submit or a click event listner

//capture user's input from this input field

//append text and delete button in list item
//append list item into unordered list or ordered list

//variables

var form = document.getElementById("addForm");

var ulList = document.getElementById("ulList");

var filter = document.getElementById("filter");

//event-listners

form.addEventListener("submit", addTodo);

ulList.addEventListener("click", removeItem);

filter.addEventListener("keyup", filterTodo);

//functions

function addTodo(e) {
  e.preventDefault();

  //get the input value from form creatTodo input
  var createInput = document.getElementById("create-input").value;

  if (createInput !== "") {
    //create new li element
    var li = document.createElement("li");

    //add all the classes to li element
    li.className = "li";

    //add new todo to li
    li.textContent = createInput;

    // create a new delete button
    var deleteBtn = document.createElement("button");

    //add all css class to delete button
    deleteBtn.className = "dlt-Btn";

    //add the lext to delete Button
    deleteBtn.textContent = "Delete";

    //append the button into list
    li.appendChild(deleteBtn);

    //append that list into Ul list
    ulList.append(li);

    document.getElementById("create-input").value = "";
  } else {
    alert("Please Enter an Item first, then Submit");
  }
}

//delete item function
function removeItem(e) {
  if (e.target.classList.contains("dlt-Btn")) {
    if (confirm("Are you sure, You want to delete this Item")) {
      var li = e.target.parentElement;
      ulList.removeChild(li);
    }
  }
}



//search Function
function filterTodo(e) {
  var text = e.target.value.toLowerCase();

  var liItem = ulList.getElementsByTagName("li");

  //convert liItems into array
  Array.from(liItem).forEach(function (todo) {
    var todoName = todo.firstChild.textContent

    if (todoName.toLowerCase().indexOf(text) != -1) {
      todo.style.display = "block";
    } else {
      todo.style.display = "none";
    }
  });
}
