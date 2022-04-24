let page = 1;
const buttonPrevious = document.querySelector(".buttonPrevious");
const buttonNext = document.querySelector(".buttonNext");

const getPokemonData = async () => {
  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0${page}`
    );
    const pokemonInfo = await response.json();
    let pokemons = "";
    pokemonInfo.results.forEach((pokemon) => {
      pokemons += `
					<div class="pokemon">
						<img class="poster" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/12.png" alt="${pokemon.name} image"/>
						<h3 class="titulo">${pokemon.name}</h3>
					</div>
				`;
    });

    document.querySelector(".container").innerHTML = pokemons;
  } catch (error) {
    return error;
  }
  return getPokemonData;
};
buttonNext.addEventListener("click", () => {
  if (page < 1000) {
    page += 1;
    getPokemonData();
  }
});

buttonPrevious.addEventListener("click", () => {
  if (page > 1) {
    page -= 1;
    getPokemonData();
  }
});

getPokemonData();
