import { Task } from './task';
import { TaskManager } from './taskmanager';
import { showPokeData,showPokeName} from './pokeApi';
import { Pokemon } from './pokemon';
import { openCreateUserDialog, closeCreateUserDialog, pokeNameElement, pokeImageElement } from './dialog';
import exp from 'constants';

const taskManager : TaskManager = new TaskManager();
const addBtn = document.querySelector('#addBtn')! as HTMLButtonElement;
const pokeSearch = document.querySelector('#pokeSearch')! as HTMLButtonElement;
const createUserBtn = document.querySelector('#createUserBtn')! as HTMLButtonElement;
const returnBtn = document.querySelector('#returnBtn')! as HTMLButtonElement;
const userStatusContainer = document.querySelector('.userStatusContainer')! as HTMLDivElement;
const userCreateContainer = document.querySelector('.userCreateContainer')! as HTMLDivElement;
const taskCompleteBtn = document.querySelector('#taskComplete')! as HTMLButtonElement;
var userPokemon :Pokemon  | null = null;
pokeSearch.addEventListener('click', async () => {
    const pokeId = document.querySelector('#pokeId')! as HTMLInputElement;
    const PokeImg = await showPokeData(pokeId.value)
    const PokeName = await showPokeName(pokeId.value)
    openCreateUserDialog(PokeName, PokeImg)
});

addBtn.addEventListener('click', () => {
    const taskName = document.querySelector('#task')! as HTMLInputElement;
    const taskType = document.querySelector('#taskType')! as HTMLSelectElement;
    const task = new Task(taskName.value);
    taskManager.appendTask(task);
    taskName.value = '';
});

returnBtn.addEventListener('click', () => {
    closeCreateUserDialog();
});

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

taskCompleteBtn.addEventListener('click', () => {
    if (!userPokemon) {
        console.error('ポケモンのデータがありません');
      return;
    }
    const expCount = taskManager.removeCompletedTasks(userPokemon.pokeExp);
    userPokemon.pokeExp = expCount;
    userPokemon.updateMeter(expCount);
});