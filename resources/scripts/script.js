
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


//Variable to hold type - to help reset pictures

let type1;
let type2;

//Reset Picture Type

const resetPicture = () => {

    //Type1 Reset
    if (type1 === "Normal") {
        document.getElementById('normal1').style.display = 'none';
    } else if (type1 === "Bug") {
        document.getElementById('bug1').style.display = 'none';
    } else if (type1 === "Dark") {
        document.getElementById('dark1').style.display = 'none';
    } else if (type1 === "Dragon") {
        document.getElementById('dragon1').style.display = 'none';
    } else if (type1 === "Electricity") {
        document.getElementById('electric1').style.display = 'none';
    } else if (type1 === "Fairy") {
        document.getElementById('fairy1').style.display = 'none';
    } else if (type1 === "Fighting") {
        document.getElementById('fighting1').style.display = 'none';
    } else if (type1 === "Fire") {
        document.getElementById('fire1').style.display = 'none';
    } else if (type1 === "Flying") {
        document.getElementById('flying1').style.display = 'none';
    } else if (type1 === "Ghost") {
        document.getElementById('ghost1').style.display = 'none';
    } else if (type1 === "Grass") {
        document.getElementById('grass1').style.display = 'none';
    } else if (type1 === "Ground") {
        document.getElementById('ground1').style.display = 'none';
    } else if (type1 === "Ice") {
        document.getElementById('ice1').style.display = 'none';
    } else if (type1 === "Poison") {
        document.getElementById('poison1').style.display = 'none';
    } else if (type1 === "Psychic") {
        document.getElementById('psychic1').style.display = 'none';
    } else if (type1 === "Rock") {
        document.getElementById('rock1').style.display = 'none';
    } else if (type1 === "Steel") {
        document.getElementById('steel1').style.display = 'none';
    } else if (type1 === "Water") {
        document.getElementById('water1').style.display = 'none';
    }

    //Type2 Reset
    if (type2 === "Normal") {
        document.getElementById('normal2').style.display = 'none';
    } else if (type2 === "Bug") {
        document.getElementById('bug2').style.display = 'none';
    } else if (type2 === "Dark") {
        document.getElementById('dark2').style.display = 'none';
    } else if (type2 === "Dragon") {
        document.getElementById('dragon2').style.display = 'none';
    } else if (type2 === "Electricity") {
        document.getElementById('electric2').style.display = 'none';
    } else if (type2 === "Fairy") {
        document.getElementById('fairy2').style.display = 'none';
    } else if (type2 === "Fighting") {
        document.getElementById('fighting2').style.display = 'none';
    } else if (type2 === "Fire") {
        document.getElementById('fire2').style.display = 'none';
    } else if (type2 === "Flying") {
        document.getElementById('flying2').style.display = 'none';
    } else if (type2 === "Ghost") {
        document.getElementById('ghost2').style.display = 'none';
    } else if (type2 === "Grass") {
        document.getElementById('grass2').style.display = 'none';
    } else if (type2 === "Ground") {
        document.getElementById('ground2').style.display = 'none';
    } else if (type2 === "Ice") {
        document.getElementById('ice2').style.display = 'none';
    } else if (type2 === "Poison") {
        document.getElementById('poison2').style.display = 'none';
    } else if (type2 === "Psychic") {
        document.getElementById('psychic2').style.display = 'none';
    } else if (type2 === "Rock") {
        document.getElementById('rock2').style.display = 'none';
    } else if (type2 === "Steel") {
        document.getElementById('steel2').style.display = 'none';
    } else if (type2 === "Water") {
        document.getElementById('water2').style.display= 'none';
    } 
}

//Second Pokemon Type - declaring first and then comparing with first type to make sure there are not two of the same types
const secondType = (type1) => {
    
    do{
    let arrayPos = Math.floor(Math.random() * 19);
    type2 = pokemonType2[arrayPos];
    } while (type2 === type1);
    document.getElementById('type2').innerHTML = type2;

    //Pairing Type Symbol with Type
    if (type2 === "Normal") {
        document.getElementById('normal2').style.display = 'block';
    } else if (type2 === "Bug") {
        document.getElementById('bug2').style.display = 'block';
    } else if (type2 === "Dark") {
        document.getElementById('dark2').style.display = 'block';
    } else if (type2 === "Dragon") {
        document.getElementById('dragon2').style.display = 'block';
    } else if (type2 === "Electricity") {
        document.getElementById('electric2').style.display = 'block';
    } else if (type2 === "Fairy") {
        document.getElementById('fairy2').style.display = 'block';
    } else if (type2 === "Fighting") {
        document.getElementById('fighting2').style.display = 'block';
    } else if (type2 === "Fire") {
        document.getElementById('fire2').style.display = 'block';
    } else if (type2 === "Flying") {
        document.getElementById('flying2').style.display = 'block';
    } else if (type2 === "Ghost") {
        document.getElementById('ghost2').style.display = 'block';
    } else if (type2 === "Grass") {
        document.getElementById('grass2').style.display = 'block';
    } else if (type2 === "Ground") {
        document.getElementById('ground2').style.display = 'block';
    } else if (type2 === "Ice") {
        document.getElementById('ice2').style.display = 'block';
    } else if (type2 === "Poison") {
        document.getElementById('poison2').style.display = 'block';
    } else if (type2 === "Psychic") {
        document.getElementById('psychic2').style.display = 'block';
    } else if (type2 === "Rock") {
        document.getElementById('rock2').style.display = 'block';
    } else if (type2 === "Steel") {
        document.getElementById('steel2').style.display = 'block';
    } else if (type2 === "Water") {
        document.getElementById('water2').style.display= 'block';
    } 

}

//Declaring Pokemon types
const pokemonType = () => {

    
    let arrayPos = Math.floor(Math.random() * 18);
    type1 = pokemonType1[arrayPos];
    document.getElementById('type1').innerHTML = type1;
    secondType(type1);


    //Pairing Type Symbol with Type
    if (type1 === "Normal") {
        document.getElementById('normal1').style.display = 'block';
    } else if (type1 === "Bug") {
        document.getElementById('bug1').style.display = 'block';
    } else if (type1 === "Dark") {
        document.getElementById('dark1').style.display = 'block';
    } else if (type1 === "Dragon") {
        document.getElementById('dragon1').style.display = 'block';
    } else if (type1 === "Electricity") {
        document.getElementById('electric1').style.display = 'block';
    } else if (type1 === "Fairy") {
        document.getElementById('fairy1').style.display = 'block';
    } else if (type1 === "Fighting") {
        document.getElementById('fighting1').style.display = 'block';
    } else if (type1 === "Fire") {
        document.getElementById('fire1').style.display = 'block';
    } else if (type1 === "Flying") {
        document.getElementById('flying1').style.display = 'block';
    } else if (type1 === "Ghost") {
        document.getElementById('ghost1').style.display = 'block';
    } else if (type1 === "Grass") {
        document.getElementById('grass1').style.display = 'block';
    } else if (type1 === "Ground") {
        document.getElementById('ground1').style.display = 'block';
    } else if (type1 === "Ice") {
        document.getElementById('ice1').style.display = 'block';
    } else if (type1 === "Poison") {
        document.getElementById('poison1').style.display = 'block';
    } else if (type1 === "Psychic") {
        document.getElementById('psychic1').style.display = 'block';
    } else if (type1 === "Rock") {
        document.getElementById('rock1').style.display = 'block';
    } else if (type1 === "Steel") {
        document.getElementById('steel1').style.display = 'block';
    } else if (type1 === "Water") {
        document.getElementById('water1').style.display= 'block';
    }


}



//Master function
const masterFunction = () => {
    pokemonFactory();
    resetPicture();
    pokemonType();
}


