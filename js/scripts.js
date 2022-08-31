// Pokémon project
// Creating Pokémon Array
let pokemonRepository = (function(){
  let pokemonList = [
    {name: 'Bulbasaur', height: 2.04, types: ['grass', 'poison'], weaknesses: ['Fire', 'Psychic', 'Flying', 'Ice']},
    {name: 'Blastoise', height: 5.03, types: ['water'], weaknesses: ['Grass', 'Electric']},
    {name: 'Charizard', height: 5.07, types: ['fire', 'flying'], weaknesses: ['Water', 'Electric', 'Rock']},
    {name: 'Wigglytuff', height: 3.03, types: ['normal', 'fairy'], weaknesses: ['Steel', 'Poison']},
  ];

  function add(item){
    pokemonList.push(item);
  }

  function allGet(){
    return pokemonList;
  }

  function showDetails (pokemon, button){
    button.addEventListener('click', function(event){
      console.log("Pokémon Name:" + pokemon.name + ", " + "Pokémon Height:" + pokemon.height);
    });
  }

  let pokdex = document.querySelector('.pokomen-list');

  function addListItem(pokemon){
    let itemList = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = (pokemon.name);
    button.classList.add('pokItem');
    itemList.appendChild(button);
    pokdex.appendChild(itemList);
    showDetails(pokemon, button);
  }

  return {
    add: add,
    allGet: allGet,
    addListItem: addListItem
  }

})()

pokemonRepository.add({name: 'Diandong', height: 5.05, types:'', weaknesses:''});

pokemonRepository.allGet().forEach(function(i){
  pokemonRepository.addListItem(i);
})

// // Print all Pokémon Detailes by Internal using forEach loop:
// pokemonRepository.allGet().forEach(function(i) {
//    document.write(`<p>Pokémon name: ${i.name}, he is ${i.height} tall, with type of: ${i.types}, and the Weakness of: ${i.weaknesses}`);
// });
