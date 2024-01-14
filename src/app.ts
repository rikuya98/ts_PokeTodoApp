// メインとなるTypeScriptファイル
import { Task } from './task';
import { TaskManager } from './taskmanager';
import { showPokeData,showPokeName} from './pokeApi';
import { Pokemon } from './pokemon';
import { openCreateUserDialog, closeCreateUserDialog, pokeNameElement, pokeImageElement } from './dialog';

// タスク管理クラスのインスタンスを作成
const taskManager : TaskManager = new TaskManager();
// ボタンの要素を取得
const addBtn = document.querySelector('#addBtn')! as HTMLButtonElement;
const pokeSearch = document.querySelector('#pokeSearch')! as HTMLButtonElement;
const createUserBtn = document.querySelector('#createUserBtn')! as HTMLButtonElement;
const returnBtn = document.querySelector('#returnBtn')! as HTMLButtonElement;
const taskCompleteBtn = document.querySelector('#taskComplete')! as HTMLButtonElement;

// ユーザー作成画面とタスク画面の要素を取得(表示・非表示の切り替えに使用)
const userStatusContainer = document.querySelector('.userStatusContainer')! as HTMLDivElement;
const userCreateContainer = document.querySelector('.userCreateContainer')! as HTMLDivElement;
// ユーザーのポケモンデータを格納する変数
var userPokemon :Pokemon  | null = null;

// ポケモン検索ボタンを押した時の処理、ポケモンの名前と画像を取得し、プレビュー画面を表示する
pokeSearch.addEventListener('click', async () => {
    const pokeId = document.querySelector('#pokeId')! as HTMLInputElement;
    const PokeImg = await showPokeData(pokeId.value)
    const PokeName = await showPokeName(pokeId.value)
    openCreateUserDialog(PokeName, PokeImg)
});

// タスク追加ボタンを押した時の処理、タスクを追加する
addBtn.addEventListener('click', () => {
    const taskName = document.querySelector('#task')! as HTMLInputElement;
    const task = new Task(taskName.value);
    taskManager.appendTask(task);
    taskName.value = '';
});

// ダイアログの戻るボタンを押した時の処理、ダイアログを閉じる
returnBtn.addEventListener('click', () => {
    closeCreateUserDialog();
});

// ダイアログのユーザー作成ボタンを押した時の処理、ユーザーのポケモンデータを作成し、ユーザー作成画面を非表示にする
createUserBtn.addEventListener('click', () => {
    const pokeName :string = pokeNameElement.textContent || '';
    const pokeImg :string = pokeImageElement.src || '';
    if (!pokeName || !pokeImg) {
        console.error('ポケモンが選択されていません');
      return;
    }
    else{
    userPokemon = new Pokemon(pokeName, pokeImg).userSetData();
    userCreateContainer.style.display = 'none';
    userStatusContainer.style.display = 'block';
    closeCreateUserDialog();
}});

// タスク完了ボタンを押した時の処理、完了したタスクを削除し、経験値を加算する
taskCompleteBtn.addEventListener('click', () => {
    if (!userPokemon) {
        console.error('ポケモンのデータがありません');
      return;
    }
    const expCount = taskManager.removeCompletedTasks(userPokemon.pokeExp);
    userPokemon.pokeExp = expCount;
    userPokemon.updateMeter(expCount);
});