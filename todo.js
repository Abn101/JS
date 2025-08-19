let tasks = [];
function addTask(task) {
    tasks.push(task);
    console.log(`Task added: ${task}`);
}
function viewTask() {
    if (tasks.length === 0) {
        console.log("list is empty")
    }
    else {
        console.log("TASKS - STORED");  
        tasks.forEach((task) => {
            console.log(`${task}`)
        });
    }
}

function removeTask(index) {
    if (tasks.length === 0) {
        console.log("cannot delete list is empty")
    }
    else if (index <= tasks.length && index >= 1) {
        let removed = tasks.splice(index - 1, 1);
        console.log(`task removed: ${removed}`)
    }
}
addTask("Task-1");
addTask("Task-2");
addTask("Task-3");
viewTask()
removeTask(2);
viewTask()
