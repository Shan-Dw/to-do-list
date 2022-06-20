// ========== CREER UNE TASK
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
    <div class="task d-flex justify-content-between align-items-center mb-3 border-bottom py-4">
    <span class= "my-0 taskname">${elInput}</span>
    <btn class="btn btn-danger delete">Delete</btn>
    </div>`;

    // ======== EFFACER TASK
    let tasksDelete = document.querySelectorAll(".delete");

    for (let index = 0; index < tasksDelete.length; index++) {
      tasksDelete[index].onclick = function () {
        console.log("click dele");
        this.parentNode.remove();
      };
    }

    // =========== TASK DONE

    let tasksDone = document.querySelectorAll(".taskname");
    for (let index = 0; index < tasksDone.length; index++) {
      tasksDone[index].onclick = function () {
        this.classList.toggle("completed");
      };
    }
    document.querySelector("#todo-input").value = "";
  }
};
