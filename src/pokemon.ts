export class Pokemon {
    pokeName: string;
    pokeImg: string;
    pokeLv: number = 1;
    pokeExp: number = 0;


    constructor(pokeName: string, pokeImg: string) {
        this.pokeName = pokeName;
        this.pokeImg = pokeImg;
        this.pokeLv = 1;
        this.pokeExp = 0;
    }

    userSetData() {
        const userPokeName = document.querySelector('#userName')! as HTMLParagraphElement;
        const userPokeImg = document.querySelector('#userImg')! as HTMLImageElement;
        const userPokeLv = document.querySelector('#userLevel')! as HTMLParagraphElement;
        const userPokeExp = document.querySelector('#userExp')! as HTMLParagraphElement;
        userPokeName.textContent = this.pokeName;
        userPokeImg.src = this.pokeImg;
        userPokeLv.textContent = `Lv.${this.pokeLv}`;
        userPokeExp.textContent = `${this.pokeExp}`;
    }
}