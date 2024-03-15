// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new list item
    var li = document.createElement("li");
    li.textContent = taskInput.value;

    // Add a delete button to the list item
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.onclick = function() {
        li.remove();
    };

    // Append the delete button to the list item
    li.appendChild(deleteButton);

    // Append the list item to the task list
    taskList.appendChild(li);

    // Clear the input field
    taskInput.value = "";
}
