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
 * Join people together with a separator
 *
 * @param {Event} event - DOM event (ignored if provided)
 * @param {string} [sep=", "] - The separator
 */
function joinPeople(event, sep = ", ") {
  // Get the people
  const people = document.querySelectorAll(".person");

  // March through each one
  people.forEach(person => {
    const personName = person.querySelector(".person-name");
    const personTitle = person.querySelector(".person-title");
    const personInstitution = person.querySelector(".person-institution");

    // Get the text from the title and institution
    if (personTitle && personInstitution) {
      let titleText = personTitle.textContent.trim();
      let institutionText = personInstitution.textContent.trim();

      // Pop out all the elements
      while (person.firstChild) {
        person.removeChild(person.firstChild);
      }

      // Rebuild
      const paragraph = document.createElement("p");
      paragraph.classList.add("person-details");
      paragraph.textContent = titleText + sep + institutionText;

      // And add
      person.appendChild(personName);
      person.appendChild(paragraph);
    }
  });
}

document.addEventListener("DOMContentLoaded", joinEvents);
document.addEventListener("DOMContentLoaded", joinPeople);
