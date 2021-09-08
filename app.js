
/*
 * Title: To Do Application using vanilla JS DOM
 * Description: This JS file has all the JS functions necessary to control the to do application
 * Author: Sumit Saha ( Learn with Sumit )
 * Date: 12/17/2020
 *
*/

// select elements & assign them to variables
const newTask = document.querySelector('#new-task');
const form = document.querySelector('form');
const todoUl = document.querySelector('#items');
const completeUl = document.querySelector('.complete-list ul');

// functions
const createTask = function (task) {
    const listItem = document.createElement('li');
    const checkBox = document.createElement('input');
    const label = document.createElement('label');
    label.innerText = task;
    checkBox.type = 'checkbox';
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    return listItem;
}

const addTask = function (event) {
    event.preventDefault();
    const listItem = createTask(newTask.value);
    todoUl.appendChild(listItem);
    newTask.value = '';
    // bind the new list item to the incomplete list
    bindInCompleteItems(listItem, completeTask);
}

const completeTask = function () {
    const listItem = this.parentNode;
    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.className = 'delete';
    listItem.appendChild(deleteBtn);

    const checkBox = listItem.querySelector('input[type="checkbox"]');
    checkBox.remove();
    completeUl.appendChild(listItem);
    bindCompleteItems(listItem, deleteTask);
}

const deleteTask = function() {
    const listItem = this.parentNode;
    const ul = listItem.parentNode;
    ul.removeChild(listItem);
}

const bindInCompleteItems = function(taskItem, checkboxClick) {
    const checkBox = taskItem.querySelector('input[type="checkbox"]');
    checkBox.onchange = checkboxClick;
}

const bindCompleteItems = function(taskItem, deleteButtonClick) {
    const deleteButton = taskItem.querySelector('.delete');
    deleteButton.onclick = deleteButtonClick;
}

for(let i = 0; i < todoUl.children.length; i++ ) {
    bindInCompleteItems(todoUl.children[i], completeTask);
}

for(let i = 0; i < completeUl.children.length; i++ ) {
    bindCompleteItems(completeUl.children[i], deleteTask);
}

form.addEventListener('submit', addTask);
