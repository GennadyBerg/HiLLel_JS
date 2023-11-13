const tasks = [];
const myTasksTitle = document.querySelector("h1");
myTasksTitle.textContent = "My List of tasks :" + prompt("Enter name of Your Note with tasks");

const addTask = document.getElementById("add-task");
const removeTask = document.getElementById("remove-elem");
const ulTasks = document.getElementById("myList");

const handleTaskAdd = () => {
            while (true) {
                        const task = prompt("Enter task please");
                        if (!task) break;
                        tasks.push(task);
            }
            tasks.forEach(task => {
                        const itemTask = document.createElement("li");
                        itemTask.innerHTML = task;
                        const deleteButton = document.createElement("span");
                        deleteButton.className = "delete-btn";
                        deleteButton.textContent = "❌";
                        deleteButton.addEventListener("click", (event) => {
                                    ulTasks.removeChild(itemTask);
                        });


                        itemTask.appendChild(deleteButton);
                        ulTasks.append(itemTask);
            })
}

addTask.addEventListener("click", handleTaskAdd);











// // const list = document.querySelector("ul");
// const buttons = document.querySelectorAll("li").map((li) => {
//             const button = document.createElement("button");
//             button.textContent = "Удалить";
//             return button;
// });
// buttons.forEach((button) => {
//             list.appendChild(button);
// });
// buttons.forEach((button) => {
//             button.addEventListener("click", () => {
//                         const li = button.parentElement;
//                         list.removeChild(li);
//             });
// });
