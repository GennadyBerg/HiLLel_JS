const tasks = [];
while (true) {
            const task = prompt("Enter task please");
            if (!task) break;
            tasks.push(task);
            
}
const noteWrap = document.createElement("div");
noteWrap.className = "wrapper";
noteWrap.id = "main-wrap";
document.body.append(noteWrap);
noteWrap.style.backgroundColor = "lightBlue";
noteWrap.style.width = "45%";
noteWrap.style.height = "50vh";
noteWrap.style.textAlign = "center";
document.body.append(noteWrap);
const myTasksTitle = document.createElement("h1")
myTasksTitle.textContent = prompt("Enter name of Your Note with tasks");
noteWrap.append(myTasksTitle);
tasks.forEach(task => {
            const items = document.createElement("ul");
            const itemTask = document.createElement("li");
            itemTask.innerHTML=task;
            noteWrap.appendChild(items);
            items.append(itemTask);
})


