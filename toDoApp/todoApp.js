const input = document.getElementById('userInput');
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',()=>
{
    const task = input.value.trim();
    if(task === "")
    {
        alert("enter a value in the enter item place");
        return;
    }
    const list = document.getElementById('List');
    const div = document.createElement('div');
    div.classList.add('task');
    const p = document.createElement('p');
     p.classList.add('task-text');
    const del = document.createElement('button');
    del.classList.add('task-btn');
    p.textContent = task;
    del.textContent = "Task Complete";
    div.appendChild(p);
    del.addEventListener('click',()=>
    {
        div.remove();
    })
    div.appendChild(del);
    list.appendChild(div);
    input.value ="";
});