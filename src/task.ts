export class Task {
    taskFrame : HTMLDivElement;
    taskLabel: HTMLLabelElement;
    taskCheck: HTMLInputElement;
    uuid: string;

    // タスク作成時、ユーザが入力したタスク名を引数に取り要素を作成する
    constructor(taskName: string) {
        this.uuid = crypto.randomUUID();
        this.taskLabel = document.createElement('label');
        this.taskLabel.textContent = taskName;
        this.taskLabel.htmlFor = this.uuid;

        this.taskCheck = document.createElement('input');
        this.taskCheck.type = 'checkbox';
        this.taskCheck.id = this.uuid;

        this.taskCheck.addEventListener('change', () => {
            this.handleTaskCheckChange();
        });

        this.taskFrame = document.createElement('div');
    }
    
    // タスクのチェックボックスの変更を検知、状態に応じてスタイルを変更する
    handleTaskCheckChange() {
       if (this.taskCheck.checked){
        this.taskLabel.classList.add('done')
       } else {
        this.taskLabel.classList.remove('done')
       }
    }

    // タスクのチェックボックスの状態を返す
    isChecked(): boolean {
        return this.taskCheck.checked;
    }
}
