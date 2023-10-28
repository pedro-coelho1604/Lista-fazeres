function addTask() {
  const taskInput = document.getElementById("tarefaInput");
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskList = document.getElementById("tarefList");
    const listItem = document.createElement("li");
    listItem.innerHTML = taskText;

    // Adicionar botão para marcar como concluída
    const completeButton = document.createElement("button");
    completeButton.innerHTML = "Concluída";
    completeButton.onclick = function() {
      listItem.classList.toggle("completed");
    };

    // Adicionar botão para excluir tarefa
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Excluir";
    deleteButton.onclick = function() {
      taskList.removeChild(listItem);
    };

    listItem.appendChild(completeButton);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    taskInput.value = "";
  }
}
 