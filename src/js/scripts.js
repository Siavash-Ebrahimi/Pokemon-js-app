// Pokémon project
/* global $ */
// This pokemonRepository is an IIFE that wrap all pokemon
// function like a big box.
let pokemonRepository = (function() {
  let pokemonList = [];
  let urlApi = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // Push Pkemon into the pokemonList.
  function add(item) {
    if (item && item.name) {
      pokemonList.push(item);
    } else {
      console.log('Pokemon name in not correct');
    }
  }

  // A simple function to show all pokemonList.
  function allGet() {
    return pokemonList;
  }

  function showDetails(pokemon) {
    loadDetails(pokemon).then(function() {
      modalRepository.showModal(pokemon);
    });
  }

  // let pokIndex = document.querySelector('.pokomen-list');
  let pokIndex = $('.pokomen-list');

  function addListItem(pokemon) {
    let itemList = $('<li></li>');
    let button = $('<button></button>');
    button.append(pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1));
    button.addClass('btn-outline-success').addClass('btn-lg');
    button
      .attr('data-toggle', 'modal')
      .attr('data-target', '#showPokemonModal');
    itemList.addClass('group-list-item');
    itemList.append(button);
    pokIndex.append(itemList);
    button.on('click', function() {
      showDetails(pokemon);
    });
  }

  // fetch all data from API Pokomen and collect only the data
  // inside the result.
  function loadList() {
    return fetch(urlApi)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        // Now we add the details to the item
        item.types = details.types;
        item.imageUrl = details.sprites.front_default;
        item.imageBackUrl = details.sprites.back_default;
        item.height = details.height;
        item.types = details.types;
        item.weight = details.weight;
      })
      .catch(function(e) {
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
  };
})();

// console.log(pokemonRepository.allGet());
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.allGet().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});

let modalRepository = (function() {
  function showModal(pokemon) {
    let modalTitel = $('.modal-title');
    let modalBody = $('.modal-body');

    modalTitel.empty();
    modalBody.empty();

    modalTitel.append(
      pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)
    );
    let pokemonDetailes = $('<p class="modal-title"></p>');

    pokemonDetailes.append(`Yeees, this is ${pokemon.name
      .charAt(0)
      .toUpperCase() + pokemon.name.slice(1)}, and its height is: ${
      pokemon.height
    }/meter with weight
    of: ${pokemon.weight}/Kg. Lets play with that !!`);
    modalBody.append(pokemonDetailes);
    let pokemonImage = $('<img class="modal-img">').attr(
      'src',
      pokemon.imageUrl
    );
    modalBody.append(pokemonImage);
    let pokemonBackImage = $('<img class="modal-img">').attr(
      'src',
      pokemon.imageBackUrl
    );
    modalBody.append(pokemonBackImage);
  }

  return {
    showModal: showModal
  };
})();
