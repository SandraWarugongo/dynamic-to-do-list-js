// Wait until the entire HTML page has loaded
document.addEventListener('DOMContentLoaded', function () {
    // Select important elements from the page
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Define the addTask function
    function addTask() {
        // Get and trim the input value
        const taskText = taskInput.value.trim();

        // Check if task is empty
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        // Create a new li element and set its textContent
        const li = document.createElement('li');
        li.textContent = taskText;

        // Create a new button element
        const removeButton = document.createElement('button');
        removeButton.textContent = "Remove";
        removeButton.className = 'remove-btn';

        // Assign an onclick event to remove the task
        removeButton.onclick = function () {
            taskList.removeChild(li);
        };

        // Append the remove button to the li
        li.appendChild(removeButton);

        // Append the li to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = "";
    }

    // Add click event to the Add Task button
    addButton.addEventListener('click', addTask);

    // Add keypress event to the input field
    taskInput.addEventListener('keypress', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});
