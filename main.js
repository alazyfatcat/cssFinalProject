
let button = document.getElementById('button');
let ul = document.getElementById('toDoList');
//use event handler property to trigger addToList when the button is created
button.onclick = addToList;


//function to add items to the to do list
function addToList(e) {
  e.preventDefault(); 
  let item = document.getElementById('toDo').value;
  let li = document.createElement('li');
  li.textContent = item; 
  let checkBox = document.createElement('input'); 
  checkBox.setAttribute('type', 'checkbox'); 
  let button = document.createElement('button'); 
  button.innerHTML = "Delete";
  button.setAttribute("class", "delete");
  li.appendChild(checkBox);
  li.appendChild(button);
  ul.appendChild(li); 
  //using event handler property on checkbox, listen for a change on the checkbox object inside the function in which checkbox is defined 
  checkBox.onchange = checkItem;
  //using event handler property on button, listen for a click on the checkbox object inside the function in which checkbox is defined 
  button.onclick = deleteItem; 
}

//function to check the task as completed 
 function checkItem(e) {
   //we want the line-through to be on the list item, not the checkbox itself (where the event is happening). 
   //We need to used a property to help us get the 'closest li' <-- good hint right there
   let addedItem = e.target.closest('li');
   //get the parentnode of 
   let parentItem = addedItem.parentNode; 
   addedItem.classList.toggle('checked');
   parentItem.appendChild(addedItem);
   text.style.display = "block";
  }


//function to delete items 
 function deleteItem(e) {
    //need to find a way to navigate the dom to the parent li (check out week 4 - traverse the dom)
    confirmDelete();
    let deleted = e.target.closest('li'); 
    //need to use a method to 'remove' this element once we target it 
    deleted.remove(); 
  }

//function confirm delete 
function confirmDelete() {
  return confirm('Are you sure you want to delete this?');
}


//the clock
document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
)

function updateTime() {
  document.documentElement.style.setProperty('--timer-day', "'" + moment().format("dd") + "'");
  document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("k") + "'");
  document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
  document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
  requestAnimationFrame(updateTime);
}

