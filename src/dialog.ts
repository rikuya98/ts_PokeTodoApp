const createUserDialog = document.querySelector('#createUserDialog')! as HTMLDialogElement;
const pokeNameElement = document.querySelector('#checkPokeName')! as HTMLParagraphElement;
const pokeImageElement = document.querySelector('#checkPokeImg')! as HTMLImageElement;

function openCreateUserDialog(pokeName: string, pokeImg: string) {
    pokeNameElement.textContent = pokeName;
    pokeImageElement.src = pokeImg;
    createUserDialog.showModal();
}

function closeCreateUserDialog() {
    createUserDialog.close();
}

export { openCreateUserDialog, closeCreateUserDialog, pokeNameElement, pokeImageElement }

