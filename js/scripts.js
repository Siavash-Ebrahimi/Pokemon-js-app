// Pokémon project
// Creating Pokémon Array
let pokemonList = [
  {name: 'Bulbasaur', height: 2.04, types: ['grass', 'poison'], weaknesses: ['Fire', 'Psychic', 'Flying', 'Ice']},
  {name: 'Blastoise', height: 5.03, types: ['water'], weaknesses: ['Grass', 'Electric']},
  {name: 'Charizard', height: 5.07, types: ['fire', 'flying'], weaknesses: ['Water', 'Electric', 'Rock']},
  {name: 'Wigglytuff', height: 3.03, types: ['normal', 'fairy'], weaknesses: ['Steel', 'Poison']},
];

// Print all Pokémon Detailes by Internal using forEach loop:
pokemonList.forEach(function(i) {
   document.write(`<p>Pokémon name: ${i.name}, he is ${i.height} tall, with type of: ${i.types}, and the Weakness of: ${i.weaknesses}`);
});
