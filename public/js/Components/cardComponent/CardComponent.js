import Component from "../Component.js";
import PokeServices from "../../PokeUtils.js";

class CardComponent extends Component {
  pokemon;
  url;
  name;
  image;
  weight;
  height;
  pokeType = [];

  constructor(parentElement, pokemon) {
    super(parentElement, "li", "pokemon");
    this.pokemon = pokemon;
    this.url = this.pokemon.url;

    (async () => {
      const pokeServices = new PokeServices(this.url);
      const getPokemonData = await pokeServices.getPokemons(this.url);
      this.pokeName = getPokemonData.name;
      this.pokeNumber = getPokemonData.id.toString();
      this.pokeImg = getPokemonData.sprites.other.dream_world.front_default;
      const pokeTypes = getPokemonData.types;
      pokeTypes.forEach((type) => this.pokeType.push(type.type.name));
      this.height = getPokemonData.height;
      this.weight = getPokemonData.weight;
      this.render();
    })();
  }

  render() {
    this.element.innerHTML = `
    <div class="pokemon">
      <img src="${this.pokeImg}" alt="${
      this.pokeName
    }" class="pokemon-detail__img"/>
      <h3 class="titulo">${this.pokeName}</h3>
      <ul class="pokemon-detail__types">
      ${
        this.pokeType.length < 2
          ? `<li class="pokemon-card__type">${this.pokeType[0]}</li>`
          : `<li class="pokemon-card__type">${this.pokeType[0]}</li>
      <li class="pokemon-card__type">${this.pokeType[1]}</li>`
      }
      </ul>
    </div>`;
  }
}
export default CardComponent;
