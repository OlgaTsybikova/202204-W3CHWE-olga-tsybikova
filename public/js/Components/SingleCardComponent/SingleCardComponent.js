import Component from "../Component.js";

class SingleCardComponent extends Component {
  pokeApi;
  name;
  abilities;
  forms;

  constructor(parentElement, pokeApi, name, abilities, forms) {
    super(parentElement, "li", "pokemon");
    this.pokeApi = pokeApi;
    this.name = name;
    this.abilities = abilities;
    this.forms = forms;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <img class="pokemon_poster" src= ${this.pokeApi} alt="${this.name} image"/>
    <h4 class="poke__name">${this.name}</h4>
    <p class="poke__info">${this.abilities} ${this.forms}</p>`;
  }
}
export default SingleCardComponent;
