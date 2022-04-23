import AppComponent from "./components/AppComponent/AppComponent.js";

const body = document.querySelector("body");

new AppComponent(body);

const getPokemonData = async () => {
  try {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=100&offset=0"
    );
    console.log(response);

    if (response.status === 200) {
      const pokemonData = await response.json();
      let pokemons = "";
      pokemonData.results.forEach((pokemon) => {
        pokemons += `<h1>${pokemon.name}</h1>`;
      });
      document.querySelector(".container").innerHTML = pokemons;
    }
    if (response.status === 401) {
      console.log("not found");
    }
  } catch (error) {
    console.log(error);
  }
};
getPokemonData();
