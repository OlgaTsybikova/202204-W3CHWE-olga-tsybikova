import AppComponent from "./components/AppComponent/AppComponent.js";

const body = document.querySelector("body");

new AppComponent(body);

const getPokemonData = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    );

    if (response.status === 200) {
      const pokemonData = await response.json();
      let pokemons = "";
      pokemonData.results.forEach((pokemon) => {
        pokemons += `
          <div class="pokemons">
          <img class="pokemon_poster" src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt="${pokemon.name} image"/>
          </div>
          <h3 class="name">${pokemon.name}</h3>`;
      });
      document.querySelector(".container").innerHTML = pokemons;
    }
    if (response.status === 401) {
      return "not found";
    }
    return response;
  } catch (error) {
    return "error";
  }
};
getPokemonData();
