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
    document.write(`<p>Pokémon name: ${pokemonList[i].name}, (height: ${pokemonList[i].height}) - Wow, that’s big!</p>`);
  } else {
    document.write(`<p>Pokémon name: ${pokemonList[i].name}, (height: ${pokemonList[i].height})</p>`);
  }
}
document.write('<h1 class="java">Siavash Ebrahimi</h1>')
