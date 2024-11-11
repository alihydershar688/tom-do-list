const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task-btn");
const todoList = document.getElementById("todo-list");

addTaskBtn.addEventListener("click", function () {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";

    removeBtn.addEventListener("click", function () {
      todoList.removeChild(newTask);
    });

    newTask.appendChild(removeBtn);

    newTask.addEventListener("click", function () {
      newTask.classList.toggle("completed");
    });

    todoList.appendChild(newTask);

    taskInput.value = "";
  }
});
