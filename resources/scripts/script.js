//Declaration of Pokemon typings
let pokemonType1 = ["Normal", "Fire", "Water", "Electricity", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"];
let pokemonType2 = ["Normal", "Fire", "Water", "Electricity", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy", "/"];

//Fusing two items
const pokemonFactory = () => {
    // Variable to stroe the new Pokemon
    let newPokemon; 

    //Retrieving input values
    let item1 = document.getElementById('item1').value;
    let item2 = document.getElementById('item2').value;

    //Splitting strings in half + assinging to new variable
    let firstHalfLength = Math.ceil(item1.length / 2);
    let secondHalfLength = Math.floor(item2.length / 2);
    let firstHalf = item1.substring(0, firstHalfLength);
    let secondHalf = item2.substring(secondHalfLength);

    //Concatinating both half of value to create new Pokemon 
    newPokemon = firstHalf + secondHalf;
    document.getElementById('newPokemon').innerHTML = newPokemon;
}



