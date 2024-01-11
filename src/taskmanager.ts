import { Task } from './task';

export class TaskManager {
    taskContainer: HTMLDivElement =  document.getElementById('tasklist')! as HTMLDivElement;
    appendTask(task: Task) {
        this.taskContainer.append(task.taskFrame);
        this.taskContainer.append(task.taskChecked);
        this.taskContainer.append(task.taskLabel);
    }
}
