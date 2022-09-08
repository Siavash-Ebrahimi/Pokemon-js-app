// Pokémon project

// This pokemonRepository is an IIFE that wrap all pokemon
// function like a big box.
let pokemonRepository = (function(){
  let pokemonList = [];
  let urlApi = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

  // Push Pkemon into the pokemonList.
  function add(item){
    if(item && item.name){
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
    // console.log(pokemon);
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
      item.types = details.types;
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = details.types;
      item.weight = details.weight;
      modalRepository.showModal(item.name, (`Yeees, this is ${item.name.charAt(0).toUpperCase() + item.name.slice(1)}, and its height is: ${item.height}/meter with weight of: ${item.weight}/Kg.
         Let's play with that !!`), item.imageUrl);
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

// console.log(pokemonRepository.allGet());
pokemonRepository.loadList().then(function() {
  // Now the data is loaded!
  pokemonRepository.allGet().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
});

let modalRepository = (function(){
  function showModal(title, text, pokemonPhotoUrl) {
    let modalContainer = document.querySelector('#modal-container');

    // Clear all existing modal content
    modalContainer.innerHTML = '';

    let modal = document.createElement('div');
    modal.classList.add('modal');

    // Add the new modal content
    let closeButtonElement = document.createElement('button');
    closeButtonElement.classList.add('modal-close');
    closeButtonElement.innerText = 'Close';
    closeButtonElement.addEventListener('click', hideModal);

    let titleElement = document.createElement('h1');
    titleElement.innerText = title.charAt(0).toUpperCase() + title.slice(1);

    let contentElement = document.createElement('p');
    contentElement.innerText = text;

    let pokemonImage = document.createElement('img');
    pokemonImage.classList.add('imgPoke');
    pokemonImage.src = pokemonPhotoUrl;

    modal.appendChild(closeButtonElement);
    modal.appendChild(titleElement);
    modal.appendChild(contentElement);
    modal.appendChild(pokemonImage);
    modalContainer.appendChild(modal);
    modalContainer.classList.add('is-visible');

    modalContainer.addEventListener('click', (e) => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay
    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }

    });
  }
  // Hide the Main Modal container
  function hideModal() {
    let modalContainer = document.querySelector('#modal-container');
    modalContainer.classList.remove('is-visible');
  }

  window.addEventListener('keydown', function(e) {
    let modalContainer = document.querySelector('#modal-container');
    if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
      hideModal();
    }
  });

  return {
    showModal: showModal
  }

})();
