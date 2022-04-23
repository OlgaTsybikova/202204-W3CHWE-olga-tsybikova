import Component from "../Component.js";

class NavBarComponent extends Component {
  navbarList;

  constructor(parentElement, navbarList) {
    super(parentElement, "nav", "navbar");
    this.navbarList = navbarList;
    this.renderNavbar();
  }

  renderNavbar() {
    this.element.innerHTML = `
    <header class="main-header">
        <h1 class="main-title">Pokemon Fever Starts Here!</h1>
      </header>
      <nav class="navBar">takataka</nav>
      <section class="controls">                
      </section>`;
  }
}

export default NavBarComponent;
