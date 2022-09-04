// Pokémon project

// This pokemonRepository is an IIFE that wrap all pokemon
// function like a big box.
let pokemonRepository = (function(){
  let pokemonList = [];
  let urlApi = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // Push Pkemon into the pokemonList.
  function add(item){
    if(typeof item === "object" && "name" in item){
        pokemonList.push(item);
    }else {
      console.log('Pokemon name in not correct');
    }
  }

  // A simple function to show all pokemonList.
  function allGet(){
    return pokemonList;
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function () {
    console.log(pokemon);
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
    button.addEventListener('click', function(event){
      showDetails(pokemon);
    });
  }

  // fetch all data from API Pokomen and collect only the data
  // inside the result.
  function loadList() {
    return fetch(urlApi).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        let pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) {
      // Now we add the details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
    }).catch(function (e) {
      console.error(e);
    });
  }

  return {
    add: add,
    allGet: allGet,
    loadList: loadList,
    loadDetails: loadDetails,
    addListItem: addListItem,
    showDetails: showDetails
  }

})()

pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.allGet().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});
