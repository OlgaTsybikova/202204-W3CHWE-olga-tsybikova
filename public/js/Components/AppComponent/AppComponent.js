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
        <div class="container">
        <div class="pokemons"> 
        </div>                    
        </div>
      </main>
    `;
    const navBarHeader = this.element.querySelector(".main-header");
    new NavBarComponent(navBarHeader, "Menu");

    const pokemonCard = this.element.querySelector(".container");
    new SingleCardComponent(
      pokemonCard,
      "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0",
      "name",
      "abilities",
      "",
      "id"
    );
  }
}
export default AppComponent;
