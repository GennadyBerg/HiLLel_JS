function renderListItem(task) {
      const taskElem = document.createElement('li');
      taskElem.innerHTML = task;
      console.log(task);
      console.log(listElement);
      listElement.append(taskElem);
}

function init() {
      const appElement = document.getElementById('app');
      const tasks = [];
      
      while (true) {
            const task = prompt("Enter task");
            if (!task) break
            tasks.push(task);
            
      }
      const listElement = document.createElement('ul');
      
      tasks.forEach(task => {
            renderListItem(task);
      });
      appElement.appendChild(listElement);
      const addButton = document.createElement('button');
      addButton.innerHTML = '+';
      
      addButton.addEventListener('click', () => {
            const task = prompt("Enter task");
            renderListItem(task)
      });
      appElement.appendChild(addButton);
};
init();
