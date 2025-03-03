/*
 * joinEvents
 *
 * Join events together with a separator
 *
 * @param {Event} event - DOM event (ignored if provided)
 * @param {string} [sep=". "] - The separator
 */
function joinEvents(event, sep = ". ") {
  // Get the events
  const events = document.querySelectorAll(".event");

  // March through each one
  events.forEach(event => {
    const elements = event.querySelectorAll("p");
    const textParts = [];
    let linkHTML = "";

    // For each element in the event, extract the text unless the element is HTML
    elements.forEach(element => {
      if (element.classList.contains("event-link")) {
        linkHTML = element.innerHTML;
      } else {
        let text = element.textContent.trim();
        textParts.push(text);
      }
    });

    // Pop out all the elements
    while (event.firstChild) {
      event.removeChild(event.firstChild);
    }

    // Rebuild
    const paragraph = document.createElement("p");
    paragraph.classList.add("event-joined");

    if (linkHTML) {
      paragraph.innerHTML = textParts.join(sep) + sep + linkHTML;
    } else {
      paragraph.textContent = textParts.join(sep);
    }

    // And add
    event.appendChild(paragraph);
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
