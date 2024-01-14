// PokeAPIからデータを取得する関数を定義する
const baseUri: string = "https://pokeapi.co/api/v2/pokemon/"
const nameUri: string = "https://pokeapi.co/api/v2/pokemon-species/"
interface PokemonLanguageEntry {
    language: {
      name: string;
      url: string;
    };
    name: string;
  }

async function showPokeData(pokeId :string) :Promise<string> {
    const res = await fetch(`${baseUri}${pokeId}`);
    const json = await res.json();
    const pokeData = json.sprites.front_default;
    return pokeData
}

async function showPokeName(pokeId :string): Promise<string> {
    const res = await fetch(`${nameUri}${pokeId}`);
    const json = await res.json();
    const jaPokeName = json.names.find((nameEntry: PokemonLanguageEntry) => nameEntry.language.name === 'ja');
    return `${jaPokeName.name}`
}

export { showPokeData, showPokeName }