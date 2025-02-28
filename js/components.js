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
          <div class="logo"><a href="index.html" ${this.isActive("index.html")}>Digital Theory Lab</a></div>
          <nav>
            <ul>
              <li><a href="research.html" ${this.isActive("research.html")}>Research</a></li>
              <li><a href="people.html" ${this.isActive("people.html")}>People</a></li>
              <li><a href="events.html" ${this.isActive("events.html")}>Events</a></li>
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
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    return currentPage === page ? 'class="active"' : '';
  }
}

// Define a custom HTML element, nav-component, for use elsewhere on the site
customElements.define("nav-component", NavBar);
