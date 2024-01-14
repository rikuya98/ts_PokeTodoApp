import { Task } from './task';

export class TaskManager {
    taskList: Task[] = [];

    taskContainer: HTMLDivElement =  document.getElementById('tasklist')! as HTMLDivElement;
    appendTask(task: Task) {
        this.taskList.push(task);
        task.taskFrame.appendChild(task.taskChecked);
        task.taskFrame.appendChild(task.taskLabel);
        this.taskContainer.appendChild(task.taskFrame);
    }

    expConversion(){
        this.appendTask
    }

    removeCompletedTasks(pokeExp: number): number {
        const completedTasks = this.taskList.filter(task => task.isChecked());
        var expCount :number = pokeExp;
        completedTasks.forEach((task) => {
            task.taskFrame.remove();
            expCount = ++expCount;
        });
        this.taskList = this.taskList.filter(task => !task.isChecked());
        return expCount;
    }
}