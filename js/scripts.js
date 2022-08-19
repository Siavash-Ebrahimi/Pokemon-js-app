// Pokémon project
// Creating Pokémon Array
let pokemonList = [
  {name: 'Bulbasaur', height: 2.04, types: ['grass', 'poison'], weaknesses: ['Fire', 'Psychic', 'Flying', 'Ice']},
  {name: 'Blastoise', height: 5.03, types: ['water'], weaknesses: ['Grass', 'Electric']},
  {name: 'Charizard', height: 5.07, types: ['fire', 'flying'], weaknesses: ['Water', 'Electric', 'Rock']},
  {name: 'Wigglytuff', height: 3.03, types: ['normal', 'fairy'], weaknesses: ['Steel', 'Poison']},
];
//Change a name of a pokemon;
pokemonList[0].name = 'Siavash';
/* Iterating all items in pokemonList by
   using for loop based on pokemonList length */
for (let i = 0; i < pokemonList.length; i++) {
  /* Use if condition for searching in all heights
     related to find uper 5.05 during thr for loop then
     once find it it will return it in a document.write*/
  if (pokemonList[i].height >= 5.05) {
    document.write(`|  Pokémon name: ${pokemonList[i].name}, (height: ${pokemonList[i].height}) - Wow, that’s big! `);
  } else {
    document.write(`|  Pokémon name: ${pokemonList[i].name}, (height: ${pokemonList[i].height})  `);
  }
}
// Practis Section:
/* for (let i = 0; i < pokemonList.length; i++) {
  document.write(`| Pokémon Name: ${pokemonList[i].name} -> Weaknesses: `);
  for (let b = 0; b < pokemonList[i].weaknesses.length; b++){
    document.write(`- ${pokemonList[i].weaknesses[b]} `);
  }
}

let fruits = ["apple", "banana", "orange", "grape"]
let text2 = "";
let i = 0;
while (fruits[i]){
  text2 = text2 + " " + fruits[i];
  i++;
}
console.log(text2);
*/
