document.addEventListener('DOMContentLoaded',function(){
    //Creates and deletes tasks in simple 'to do list'
    function toDoList(){
        let taskInput = document.querySelector('#taskInput');
        const addButton = document.querySelector('#addTaskButton');
        const taskList = document.querySelector('#taskList');
        const removeFinished = document.querySelector('#removeFinishedTasksButton');
        addButton.addEventListener('click',(e)=>{
            if(taskInput.value.length >= 5 && taskInput.value.length < 100){
                let newTask = document.createElement('li');
                let delBut = document.createElement('button');
                delBut.innerText = 'Delete';
                let complete = document.createElement('button');
                complete.innerText = 'Complete';
                let taskName = document.createElement('h1');
                taskName.innerText = taskInput.value;
                taskInput.value = '';
                newTask.appendChild(taskName);
                newTask.appendChild(delBut);
                newTask.appendChild(complete);
                taskList.appendChild(newTask);
                delBut.addEventListener('click',(e)=>{
                    let currentTask = e.currentTarget.parentElement;
                    currentTask.parentElement.removeChild(currentTask);
                });
                complete.addEventListener('click',(e)=>{
                    e.currentTarget.parentElement.classList.toggle('done');
                });
            }
        });
        removeFinished.addEventListener('click',(e)=>{
            let completedTasks = document.querySelectorAll('.done');
            completedTasks.forEach(el => {
                el.parentElement.removeChild(el);
            });
        });
    }
    toDoList();
});
