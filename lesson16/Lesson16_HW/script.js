const storageTitle = 'title';
const storageName = 'elements';
const tasks = [];
let store = null;
let titleStor = null;

function createEl(tag, attr) {
    const element = document.createElement(tag);
    for (const key in attr) {
        element[key] = attr[key];
    }
    return element;
}

const noteWrap = createEl('div', { id: 'main-wrap', className: 'wrapper' });

body.appendChild(noteWrap);
noteWrap.style.backgroundColor = "lightBlue";
noteWrap.style.width = "45%";
noteWrap.style.height = "50vh";
noteWrap.style.textAlign = "center";


function setItemsSaveLStorage(title) {
    const notesTitle = createEl('h2', { id: 'title', textContent: title });
    noteWrap.appendChild(notesTitle);
    localStorage.setItem("storageTitle", title);
}

function renderTasks() {
    tasksList.innerHTML = ""; // Очищаем список перед добавлением новых задач

    tasks.forEach(task => {
        const listItem = document.createElement("li");
        listItem.innerHTML = task;

        const deleteButton = document.createElement("span");
        deleteButton.className = "delete-btn";
        deleteButton.textContent = "❌";

        deleteButton.addEventListener("click", (event) => {
            const taskIndex = tasks.indexOf(task);
            tasks.splice(taskIndex, 1);

            localStorage.removeItem(storageName);
            localStorage.setItem(storageName, tasks);
            tasksList.removeChild(listItem);
        });

        listItem.appendChild(deleteButton);
        tasksList.appendChild(listItem);
    });
}

const storedTitle = localStorage.getItem("storageTitle");
const storedTaskList = localStorage.getItem("elements");

if (storedTitle) {
    setItemsSaveLStorage(storedTitle);
} else {
    const userInput = prompt("Enter text :");
    if (userInput) {
        setItemsSaveLStorage(userInput);
    }
}

if (storedTaskList) {
    tasks.push(...storedTaskList.split(','));
} else {
    while (true) {
        const task = prompt('Enter new task');
        if (!task) break;
        tasks.push(task);
    }

    localStorage.setItem(storageName, tasks);
    store = tasks;
}

const button = createEl('button', { textContent: "ADD New Task", id: "add-task" });
noteWrap.appendChild(button);

const tasksList = createEl('ul');
noteWrap.appendChild(tasksList);

renderTasks(); // Перерисовываем список при загрузке страницы

const addTask = document.getElementById("add-task");
addTask.addEventListener('click', (event) => {
    const task = prompt('Enter new task');
    tasks.push(task);

    localStorage.setItem(storageName, tasks);
    renderTasks(); // Перерисовываем список после добавления новой задачи
});
