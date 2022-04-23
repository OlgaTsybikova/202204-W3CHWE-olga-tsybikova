import Component from "../Component.js";
import NavBarComponent from "../NavBarComponent/NavBarComponent.js";

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
        <h1 class="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section class="controls">                
      </section>
      <main class="main">
        <ul class="gentlemen">                        
        </ul>
      </main>
    `;

    const navBarHeader = this.element.querySelector(".main-header");
    new NavBarComponent(navBarHeader, "Menu");
  }
}
export default AppComponent;
