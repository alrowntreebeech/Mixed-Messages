
//Fusing two inputs
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

    //Concatinating both halves of value to create new Pokemon 
    newPokemon = firstHalf + secondHalf;
    newPokemon = capitaliseFirstLetter(newPokemon);
    document.getElementById('newPokemon').innerHTML = newPokemon;
}

//Function to capitalise the first letter and make the rest of the string lower case
const capitaliseFirstLetter = (pokemonName) => {
    return pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1).toLowerCase();
}


//Declaration of Pokemon typings
let pokemonType1 = ["Normal", "Fire", "Water", "Electricity", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy"];
let pokemonType2 = ["Normal", "Fire", "Water", "Electricity", "Grass", "Ice", "Fighting", "Poison", "Ground", "Flying", "Psychic", "Bug", "Rock", "Ghost", "Dragon", "Dark", "Steel", "Fairy", "None"];

//Second Pokemon Type - declaring first and then comparing with first type to make sure there are not two of the same types
const secondType = (type1) => {

    let type2;
    do{
    let arrayPos = Math.floor(Math.random() * 19);
    type2 = pokemonType2[arrayPos];
    } while (type2 === type1);
    document.getElementById('type2').innerHTML = type2;
}

//Declaring Pokemon types
const pokemonType = () => {

    let type1; 
    let arrayPos = Math.floor(Math.random() * 18);
    type1 = pokemonType1[arrayPos];
    document.getElementById('type1').innerHTML = type1;
    secondType(type1);

}


//Master function
const masterFunction = () => {
    pokemonFactory();
    pokemonType();
}