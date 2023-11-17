const storageTitle = 'title';
const storageName = 'elements';
const tasks = [];
let store = null;
let titleStor = null;

const noteWrap = document.createElement("div");
noteWrap.className = "wrapper";
noteWrap.id = "main-wrap";
document.body.append(noteWrap);
noteWrap.style.backgroundColor = "lightBlue";
noteWrap.style.width = "45%";
noteWrap.style.height = "50vh";
noteWrap.style.textAlign = "center";
document.body.append(noteWrap);

if (localStorage.getItem(storageTitle)) {
            titleStor = localStorage.getItem(storageTitle);
} 
else {
            const myTasksTitle = document.createElement("h1")
            myTasksTitle.textContent = prompt("Enter name of Your Note with tasks");
            noteWrap.append(myTasksTitle);

localStorage.setItem(storageTitle )
// titleStor = str;
}


const addTaskButton = document.createElement("button");
addTaskButton.textContent = "Add new Task";
addTaskButton.id = "add-task";
noteWrap.append(addTaskButton);

const deleteButton = document.createElement("span");
deleteButton.className = "delete-btn";
deleteButton.textContent = "❌";

if (localStorage.getItem(storageName)) {
            store = localStorage.getItem(storageName).split(',');
} else {
            while (true) {
                        const task = prompt('Enter option > ');
                        if (!task) break;

                        tasks.push(task);
            }

            localStorage.setItem(storageName, tasks);
            store = tasks;
}

const taskList = document.createElement("ul");
noteWrap.appendChild(taskList);

const addTask = document.getElementById("add-task");
const removeTask = document.getElementById("remove-elem");


tasks.forEach(task => {
            const itemTask = document.createElement("li");
            itemTask.innerHTML = task;
            taskList.appendChild(itemTask)
            itemTask.appendChild(deleteButton);
            deleteButton.addEventListener("click", (event) => {
                        taskList.removeChild(itemTask);
            })

});







// localStorage.clear();

