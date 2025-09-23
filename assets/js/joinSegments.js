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
 * Consolidates person info with title and institution, optionally linking name 
 * to website
 *
 * @param {Event} event - DOM event (ignored if provided)
 * @param {string} [sep=", "] - The separator between title and institution
 */
function joinPeople(event, sep = ", ") {
  // Get all people and march through them
  const people = document.querySelectorAll(".person");
  people.forEach(person => {
    // Find all the elements we need and create document fragments for the
    // content
    const elements = person.querySelectorAll(".person-name, .person-title, .person-institution, .person-link");
    const nameFragment = document.createDocumentFragment();
    const detailsFragment = document.createDocumentFragment();
    let linkElement = null;
    
    // Store content from each element type
    let nameText = "";
    let titleText = "";
    let institutionText = "";
    let first = true;

    // Roll through each element
    elements.forEach(el => {
      if (el.classList.contains("person-name")) {
        // Name
        nameText = el.textContent.trim();
      } else if (el.classList.contains("person-title")) {
        // Title pieces
        titleText = el.textContent.trim();
        if (titleText) {
          if (!first) detailsFragment.appendChild(document.createTextNode(sep));
          first = false;
          detailsFragment.appendChild(document.createTextNode(titleText));
        }
      } else if (el.classList.contains("person-institution")) {
        // Institution pieces
        institutionText = el.textContent.trim();
        if (institutionText) {
          if (!first) detailsFragment.appendChild(document.createTextNode(sep));
          first = false;
          detailsFragment.appendChild(document.createTextNode(institutionText));
        }
      } else if (el.classList.contains("person-link")) {
        // Store the link for later processing
        linkElement = el;
      }
    });

    // Do we have what we need?
    if (!nameText) return;

    // Clear the container and rebuild with joined content
    person.textContent = "";
    const nameContainer = document.createElement("p");
    nameContainer.classList.add("person-name");

    // Embed link in name if we have one. Otherwise create a plaintext name
    if (linkElement && linkElement.hasAttribute("href")) {
      const linkNode = document.createElement("a");
      linkNode.href = linkElement.getAttribute("href");
      linkNode.textContent = nameText;
      nameContainer.appendChild(linkNode);
    } else {
      nameContainer.appendChild(document.createTextNode(nameText));
    }
    
    // Add name to person container
    person.appendChild(nameContainer);
    
    // Create details element if we have details content
    if (detailsFragment.hasChildNodes()) {
      const detailsContainer = document.createElement("p");
      detailsContainer.classList.add("person-details");
      detailsContainer.appendChild(detailsFragment);
      person.appendChild(detailsContainer);
    }
  });
}

document.addEventListener("DOMContentLoaded", joinEvents);
document.addEventListener("DOMContentLoaded", joinPeople);
