import { Task } from './task';
import { TaskManager } from './taskmanager';
const addBtn = document.querySelector('#addBtn')!
const checkBox = 


addBtn.addEventListener('click', () => {
    const taskName = document.querySelector('#task')! as HTMLInputElement;
    const taskType = document.querySelector('#taskType')! as HTMLSelectElement;
    const taskManager = new TaskManager();
    const task = new Task(taskName.value, taskType.value);
    taskManager.appendTask(task);
    taskName.value = '';
});


