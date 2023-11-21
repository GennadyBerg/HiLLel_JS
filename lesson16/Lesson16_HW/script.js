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
const main = document.getElementById("main");
const noteWrap = createEl('div', { id: 'main-wrap', className: 'wrapper' });

main.appendChild(noteWrap);


function setItemsSaveLStorage(title) {
    const notesTitle = createEl('h1', { id: 'title', textContent: title });
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
    const userInput = prompt("Enter Name of List :");
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

renderTasks(); 

const addTask = document.getElementById("add-task");
addTask.addEventListener('click', (event) => {
    const task = prompt('Enter new task');
    tasks.push(task);

    localStorage.setItem(storageName, tasks);
    renderTasks(); 
});

///////// add My Location on the Google Maps////////////
const myPosition = [];
const myLocationLink = document.createElement("a");
const myCoords = createEl("h5");
noteWrap.append(myLocationLink);
noteWrap.append(myCoords);


// const savedHref = localStorage.getItem('myLocationHref');
// if (savedHref) {
//     myLocationLink.href = savedHref;
// } else {
    navigator.geolocation.getCurrentPosition(
        function (position) {
            myPosition.push(position.coords.latitude);
            myPosition.push(position.coords.longitude);
            // console.log(myPosition);
            myCoords.innerText = `${myPosition.join(" ;   ")}`;

            myLocationLink.href = `https://www.google.com/maps/@${myPosition[0]}  ,   ${myPosition[1]}`;

            // localStorage.setItem('myLocationHref', myLocationLink.href);
            // renderTasks();
        });
// }
myLocationLink.target = "_blank";
myLocationLink.innerHTML = "My Working Place";
// myLocationLink = [];

