/* eslint-disable no-undef */
import PokeServices from "./PokeUtils.js";

const pokeContainer = document.querySelector("body");

const pokemonUtils = new PokeServices();

new AppComponent(
  pokeContainer,
  pokemonUtils,
  "https://pokeapi.co/api/v2/pokemon/"
);
