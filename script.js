// Get the task input field, add task button, and task list
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

// Add event listener to add task button
addTaskBtn.addEventListener('click', addTask);

// Function to add task
function addTask() {
    const task = taskInput.value.trim();
    if (task) {
        const taskHTML = `
            <li class="task">
                <input type="checkbox">
                <span>${task}</span>
                <button class="delete-btn">Delete</button>
            </li>
        `;
        taskList.insertAdjacentHTML('beforeend', taskHTML);
        taskInput.value = '';
    }
}

// Add event listener to task list
taskList.addEventListener('click', (e) => {
    if (e.target.type === 'checkbox') {
        const task = e.target.parentNode;
        task.classList.toggle('completed');
    } else if (e.target.classList.contains('delete-btn')) {
        const task = e.target.parentNode;
        task.remove();
    }
});