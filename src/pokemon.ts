// ポケモンクラス
// ポケモンの名前、画像、レベル、経験値を持つ
export class Pokemon {
    pokeName: string;
    pokeImg: string;
    pokeLv: number = 1;
    pokeExp: number = 0;
    maxEXP :number = 10;
    defaultValue :number = 0;
    userPokeLv = document.querySelector('#userLevel')! as HTMLParagraphElement;

    // ポケモンの名前と画像を引数に取り、初期値を設定する
    constructor(pokeName: string, pokeImg: string) {
        this.pokeName = pokeName;
        this.pokeImg = pokeImg;
        this.pokeLv = 1;
        this.pokeExp = 0;
    }

    // ポケモンのデータを画面上にセットする
    userSetData() :Pokemon {
        const userPokeName = document.querySelector('#userName')! as HTMLParagraphElement;
        const userPokeImg = document.querySelector('#userImg')! as HTMLImageElement;
        userPokeName.textContent = this.pokeName;
        userPokeImg.src = this.pokeImg;
        this.userPokeLv.textContent = `Lv.${this.pokeLv}`;
        return this;
    }

    // 経験値を加算する、加算後の状態によりメーター、レベルの更新を行う
    updateMeter(expValue: number) {
        const meter = document.querySelector('#meter')! as SVGElement;
        const maxWidth = 200;
        const newWidth = (maxWidth / this.maxEXP) * expValue;
        meter.setAttribute('width', `${newWidth}`);
        if (expValue === this.maxEXP){
            this.levelUp();
            this.pokeExp = this.defaultValue;
            meter.setAttribute('width', `${this.defaultValue}`);
        }
    }

    // レベルアップ時にレベルを加算する
    levelUp() {
        window.alert('おめでとうございます！レベルアップしました！')
        this.pokeLv = this.pokeLv +1;
        this.userPokeLv.textContent = `Lv.${this.pokeLv}`;
    }
}