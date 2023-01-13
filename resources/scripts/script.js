//Declaration of Pokemon typings
let pokemonType1 = ["Normal", "Fire", "Water", "Electricity", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"];
let pokemonType2 = ["Normal", "Fire", "Water", "Electricity", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy", "/"];

//Fusing two items
const pokemonFactory = () => {
    let newPokemon;
    let item1 = document.getElementById('item1').value;
    let item2 = document.getElementById('item2').value;
    newPokemon = item1 + item2;
    document.getElementById('newPokemon').innerHTML = newPokemon;
}



