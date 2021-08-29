const inputElement = document.getElementById('new-task');
const addTaskBtn = document.getElementById('addTask');
const items = document.getElementById('items');

function addTask(event) {
    event.preventDefault();
    if (inputElement.value.trim()) {
        const list = `<li class="item">
                        <input type="checkbox" /><label>${inputElement.value}</label>
                    </li>`;
        items.insertAdjacentHTML('beforeend', list);
    } else {
        alert('Please write your task');
    }
}

addTaskBtn.addEventListener('click', addTask);
