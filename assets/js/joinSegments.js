/*
 * joinEvents
 *
 * Join events together with a separator
 *
 * @param {Event} event - DOM event (ignored if provided)
 * @param {string} [sep=". "] - The separator
 */
function joinEvents(event, sep = ". ") {
  // Get the events and march through them
  const events = document.querySelectorAll(".event"); 
  events.forEach(container => {
    // Find paragraph elements in an event and create a document fragment to
    // hold event content
    const paragraphs = container.querySelectorAll("p"); 
    const contentFrag = document.createDocumentFragment();
    let linkFrag = null;
    let first = true;

    // Run through every paragraph
    paragraphs.forEach(p => {
      // Is this a link? Store content separately if so
      if (p.classList.contains("event-link")) {
        linkFrag = document.createDocumentFragment();
        p.childNodes.forEach(n => linkFrag.appendChild(n.cloneNode(true)));
      } else {
        // If not: add separator before content (excluding first paragraph)
        if (!first) contentFrag.appendChild(document.createTextNode(sep));
        first = false;
        p.childNodes.forEach(n => contentFrag.appendChild(n.cloneNode(true)));
      }
    });

    // Clear the container and rebuild with joined content
    container.textContent = "";
    
    const joined = document.createElement("p");
    joined.classList.add("event-joined");
    joined.appendChild(contentFrag);

    // Do we have a link to append?
    if (linkFrag) {
      joined.appendChild(document.createTextNode(sep));
      joined.appendChild(linkFrag);
    }
    
    container.appendChild(joined);
  });
}


/*
 * joinPeople
 *
 * Consolidates person info with title and institution, optionally linking name to website
 *
 * @param {Event} event - DOM event (ignored if provided)
 * @param {string} [sep=", "] - The separator between title and institution
 */
function joinPeople(event, sep = ", ") {
  document.querySelectorAll(".person").forEach(person => {
    // Get all required elements
    const personName = person.querySelector(".person-name");
    const personTitle = person.querySelector(".person-title");
    const personInstitution = person.querySelector(".person-institution");
    const personLink = person.querySelector(".person-link");
    
    // Only proceed if we have the necessary elements
    if (!personName || !personTitle || !personInstitution) return;
    
    // Extract text content
    const nameText = personName.textContent.trim();
    const titleText = personTitle.textContent.trim();
    const institutionText = personInstitution.textContent.trim();
    
    // Clear person element
    person.innerHTML = "";
    
    // Create name element (with optional link)
    const nameElement = document.createElement("p");
    nameElement.className = "person-name";
    
    if (personLink && personLink.hasAttribute("href")) {
      nameElement.innerHTML = `<a href="${personLink.getAttribute("href")}">${nameText}</a>`;
    } else {
      nameElement.textContent = nameText;
    }
    
    // Create details element with combined information
    const detailsElement = document.createElement("p");
    detailsElement.className = "person-details";
    detailsElement.textContent = `${titleText}${sep}${institutionText}`;
    
    // Add elements to person container
    person.appendChild(nameElement);
    person.appendChild(detailsElement);
  });
}

document.addEventListener("DOMContentLoaded", joinEvents);
document.addEventListener("DOMContentLoaded", joinPeople);
