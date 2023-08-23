const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <span class="task-delete">Delete</span>
        `;
    taskList.appendChild(taskItem);
    taskInput.value = "";
  }
}

addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

taskList.addEventListener("click", (event) => {
  if (event.target.classList.contains("task-delete")) {
    event.target.parentElement.remove();
  } else if (event.target.classList.contains("task-text")) {
    event.target.classList.toggle("task-done");
  }
});
