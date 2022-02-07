// 'use strict';



function delOrFade(e){
  console.log(e.target.parentNode);

  if(e.target.classList == "todo-item"){
    e.target.classList.add("completed");
  }

  if(e.target.classList == "remove"){
    let targetParent = e.target.parentNode;
    targetParent.parentNode.removeChild(targetParent);
  }
  if(e.target.classList == "move-up"){
    var wrapper = $(e.target.parentNode).closest('li')
    wrapper.insertBefore(wrapper.prev())
  }
  if(e.target.classList == "move-down"){
    var wrapper = $(e.target.parentNode).closest('li')
    wrapper.insertAfter(wrapper.next())
  }
}


function clickAdder(e){
  console.log("Added");

  create_Li();
  listAddInput.value = "";
}


function enterAdder(e){
  console.log("looking for input");

  if(e.key == "Enter"){
    create_Li();
    listAddInput.value = "";
  }
}

function create_Li(){
  let li = document.createElement("li");
  li.classList.add("todo-item");

  let span = document.createElement("span");
  span.classList.add("remove");

  let span2 = document.createElement("span");
  span2.classList.add("move-up");
  span2.innerText = '↑';

  let span3 = document.createElement("span");
  span3.classList.add("move-down");
  span3.innerText = '↓';

  li.appendChild(span);
  li.appendChild(span2);
  li.appendChild(span3);

  let textVal = listAddInput.value
  li.appendChild(document.createTextNode(textVal));

  list.appendChild(li);
}


let list = document.getElementsByTagName("ul")[0];
list.addEventListener('click', delOrFade);

let click_Add = document.getElementById("add-item");
click_Add.addEventListener('click', clickAdder);

let listAddInput = document.getElementById("new-item-text");
listAddInput.addEventListener('keydown', enterAdder);