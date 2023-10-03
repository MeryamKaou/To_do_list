document.addEventListener("DOMContentLoaded", function () {
  const taskInput = document.getElementById("task");
  const addTaskButton = document.getElementById("add-task");
  const taskList = document.getElementById("task-list");

  addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
      const listItem = document.createElement("li");
      listItem.innerHTML = `
                ${taskText}
                <button class="delete-button">Delete</button>
            `;

      taskList.appendChild(listItem);
      taskInput.value = "";

      listItem
        .querySelector(".delete-button")
        .addEventListener("click", function () {
          listItem.remove();
        });
    }
  });
});
