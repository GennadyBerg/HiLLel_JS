function renderListItem(task) {
            const taskElem = document.createElement('li');
            taskElem.innerHTML = task;
            console.log(task);
            listElement.append(taskElem);
            console.log(listElement);
}

function init() {
            const appElement = document.getElementById('app');

            const tasks = [];



            appElement.append(addButton);

            while (true) {
                        const task = prompt("Enter task");
                        if (!task) break
                        tasks.push(task);

            }
            const listElement = document.createElement('ul');

            tasks.forEach(task => {
                        renderListItem(task);
            }
            )
            appElement.appendChild(listElement);
            const addButton = document.createElement('button');
            addButton.innerHTML = '+';

            addButton.addEventListener('click', () => {
                        const task = prompt("Enter task");
                        renderListItem(task)
            });
}
init()
