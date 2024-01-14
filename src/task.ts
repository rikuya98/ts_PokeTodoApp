export class Task {
    taskFrame : HTMLDivElement;
    taskLabel: HTMLLabelElement;
    taskChecked: HTMLInputElement;
    taskType: string;
    uuid: string;

    constructor(taskName: string, taskType: string) {
        this.taskType = taskType;
        this.uuid = crypto.randomUUID();
        this.taskLabel = document.createElement('label');
        this.taskLabel.textContent = taskName;
        this.taskLabel.htmlFor = this.uuid;

        this.taskChecked = document.createElement('input');
        this.taskChecked.type = 'checkbox';
        this.taskChecked.id = this.uuid;

        this.taskChecked.addEventListener('change', () => {
            this.handleTaskCheckChange();
        });

        this.taskFrame = document.createElement('div');
    }
    handleTaskCheckChange() {
       if (this.taskChecked.checked){
        this.taskLabel.classList.add('done')
       } else {
        this.taskLabel.classList.remove('done')
       }
    }

    isChecked(): boolean {
        return this.taskChecked.checked;
    }
}
