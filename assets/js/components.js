/**
 * NavBar
 *
 * Custom HTML element for the navigation bar
 *
 */
class NavBar extends HTMLElement {
  /*
   * Set the inner HTML of the element to define navigation bar
   */
  connectedCallback() {
    this.innerHTML = `
      <header>
        <div class="container header-content">
          <div class="logo"><a href="./"><b>Digital Theory Lab</b></a></div>
          <nav>
            <ul>
              <li><a href="research" ${this.isActive("research")}>Research</a></li>
              <li><a href="people" ${this.isActive("people")}>People</a></li>
              <li><a href="events" ${this.isActive("events")}>Events</a></li>
            </ul>
          </nav>
        </div>
      </header>
    `;
  }
 
  /*
   * Helper method to determine if a page is the current page
   *
   * @param {string} page - The name of the page to check against the current
   * page
   * @returns {string} Returns 'class="active"' if the page is the current
   * page, otherwise an empty string
   */
  isActive(page) {
    const pathname = window.location.pathname
    const currentPage = pathname.split("/").filter(x => x.trim() != "").pop() || "index.html";

    return currentPage === page ? 'class="active"' : '';
  }
}

// Define a custom HTML element, nav-component, for use elsewhere on the site
customElements.define("nav-component", NavBar);
