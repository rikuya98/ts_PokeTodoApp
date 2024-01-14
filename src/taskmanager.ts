// タスク管理クラス
import { Task } from './task';

export class TaskManager {
    taskList: Task[] = [];

    // 追加するタスクの要素を取得し、タスクのリストに追加する
    taskContainer: HTMLDivElement =  document.getElementById('tasklist')! as HTMLDivElement;
    appendTask(task: Task) {
        this.taskList.push(task);
        task.taskFrame.appendChild(task.taskCheck);
        task.taskFrame.appendChild(task.taskLabel);
        this.taskContainer.appendChild(task.taskFrame);
    }

    // 完了したタスクを削除する、削除したタスクの数を返す
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