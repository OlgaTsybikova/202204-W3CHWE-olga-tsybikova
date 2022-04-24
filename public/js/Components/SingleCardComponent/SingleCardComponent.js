import Component from "../Component.js";

class SingleCardComponent extends Component {
  pokemon;
  name;
  abilities;
  forms;
  id;

  constructor(parentElement, pokemon, name, abilities, forms, id) {
    super(parentElement, "li", "pokemon");
    this.pokemon = pokemon;
    this.name = name;
    this.id = id;
    this.abilities = abilities;
    this.forms = forms;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <h4 class="poke__name">${this.name}</h4>
    <p class="poke__info">${this.abilities} ${this.forms}</p>`;
  }
}
export default SingleCardComponent;
