const storageTitle = "title", storageName = "elements", tasks = []; let store = null, titleStor = null; function createEl(t, e) { const s = document.createElement(t); for (const t in e) s[t] = e[t]; return s } const main = document.getElementById("main"), noteWrap = createEl("div", { id: "main-wrap", className: "wrapper" }); function setItemsSaveLStorage(t) { const e = createEl("h1", { id: "title", textContent: t }); noteWrap.appendChild(e), localStorage.setItem("storageTitle", t) } function renderTasks() { tasksList.innerHTML = "", tasks.forEach((t => { const e = document.createElement("li"); e.innerHTML = t; const s = document.createElement("span"); s.className = "delete-btn", s.textContent = "❌", s.addEventListener("click", (s => { const o = tasks.indexOf(t); tasks.splice(o, 1), localStorage.removeItem("elements"), localStorage.setItem("elements", tasks), tasksList.removeChild(e) })), e.appendChild(s), tasksList.appendChild(e) })) } main.appendChild(noteWrap); const storedTitle = localStorage.getItem("storageTitle"), storedTaskList = localStorage.getItem("elements"); if (storedTitle) setItemsSaveLStorage(storedTitle); else { const t = prompt("Enter Name of List :"); t && setItemsSaveLStorage(t) } if (storedTaskList) tasks.push(...storedTaskList.split(",")); else { for (; ;) { const t = prompt("Enter new task"); if (!t) break; tasks.push(t) } localStorage.setItem("elements", tasks), store = tasks } const button = createEl("button", { textContent: "ADD New Task", id: "add-task" }); noteWrap.appendChild(button); const tasksList = createEl("ul"); noteWrap.appendChild(tasksList), renderTasks(); const addTask = document.getElementById("add-task"); addTask.addEventListener("click", (t => { const e = prompt("Enter new task"); tasks.push(e), localStorage.setItem("elements", tasks), renderTasks() })); const myPosition = [], myLocationLink = document.createElement("a"), myCoords = createEl("h5"); noteWrap.append(myLocationLink), noteWrap.append(myCoords), navigator.geolocation.getCurrentPosition((function (t) { myPosition.push(t.coords.latitude), myPosition.push(t.coords.longitude), myCoords.innerText = `${myPosition.join(" ;   ")}`, myLocationLink.href = `https://www.google.com/maps/@${myPosition[0]}  ,   ${myPosition[1]}` })), myLocationLink.target = "_blank", myLocationLink.innerHTML = "My Working Place";