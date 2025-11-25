document.getElementById("addBtn").addEventListener("click", addTask);
document.getElementById("taskInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") addTask();
});

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = taskText;

    // Toggle completed task
    span.addEventListener("click", function() {
        span.classList.toggle("completed");
    });

    let delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.className = "delete-btn";

    delBtn.addEventListener("click", function() {
        li.remove();
    });

    li.appendChild(span);
    li.appendChild(delBtn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}