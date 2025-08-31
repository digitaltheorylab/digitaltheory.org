document.querySelectorAll(".event-year").forEach(yearHeader => {
  yearHeader.addEventListener("click", () => {
    const year = yearHeader.dataset.year;
    const eventList = document.querySelector(`.event-list[data-year="${year}"]`);
    
    yearHeader.classList.toggle("collapsed");
    eventList.classList.toggle("collapsed");
  });
});

