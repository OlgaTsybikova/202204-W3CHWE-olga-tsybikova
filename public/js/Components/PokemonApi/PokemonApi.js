const getPokemonData = async () => {
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
  );
  console.log(response);
};
getPokemonData();

(async () => {
  console.log(await getPokemonData("pokemons"));
})();
