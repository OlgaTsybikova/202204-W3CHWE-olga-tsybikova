import Component from "../Component.js";
import NavBarComponent from "../NavBarComponent/NavBarComponent.js";
import SingleCardComponent from "../SingleCardComponent/SingleCardComponent.js";

class AppComponent extends Component {
  pokemons;
  constructor(parentElement, pokemons) {
    super(parentElement, "div", "container");
    this.pokemons = pokemons;
    this.render();
  }

  render() {
    this.element.innerHTML = `
    <header class="main-header">
        <h1 class="main-title">My Pokemons</h1>
      </header>
      <section class="controls">                
      </section>
      <main class="main">
        <ul class="pokemons">                        
        </ul>
        <div class= "container"></div>
      </main>
    `;
    const navBarHeader = this.element.querySelector(".main-header");
    new NavBarComponent(navBarHeader, "Menu");

    const pokemonCard = this.element.querySelector(".main");
    new SingleCardComponent(
      pokemonCard,
      "https://pokeapi.co/api/v2/pokemon/ditto",
      "Pikachu",
      "fire",
      "Yellow bear"
    );
  }
}
export default AppComponent;
