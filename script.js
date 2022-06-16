document.getElementById("push").onclick = function (e) {
  let elInput = document.getElementById("todo-input").value;
  if (elInput == "") {
    alert`Ajoutez une nouvelle tâche`;
  } else if (elInput.length < 3) {
    alert`La tâche est trop courte`;
  } else if (elInput.length > 35) {
    alert`La tâche est trop longue`;
  } else {
    console.log("Tout est ok.");
    document.getElementById("tasks").innerHTML += `
    <div class="task d-flex justify-content-between align-items-center mb-3">
    <span class= "my-0">${elInput}</span>
    <btn class="btn btn-danger">Delete</btn>
    </div>`;
  }
};

let currentTask = document.querySelectorAll(".delete");
for (let index = 0; index < currentTask.length; index++) {
  const element = currentTask[index];
}
