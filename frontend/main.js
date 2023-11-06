"use strict";

//Importering af funktioner/variable
import { PeopleRenderer } from "./PeopleRenderer.js";
import ListRenderer from "./ListRenderer.js";

//Kør startfunktionen automatisk på load
window.addEventListener("load", initApp);

//Globale variable
const endpoint = "http://localhost:5002/people/";

let renderedPeople;

//Fetcher kunstnerlisten og aktivierer eventListeners
async function initApp() {
  globalListeners();

  const people = await getPeople();
  renderedPeople = new ListRenderer(people, "#people-grid-container", PeopleRenderer);
  renderedPeople.render();
}

async function getPeople() {
  const response = await fetch(endpoint);
  const people = await response.json();
  return people;
}

//EventListeners
function globalListeners() {
  //Sorteringsfunktion
  document.querySelector("#sort-select").addEventListener("change", () => {
    let sortValue = document.querySelector("#sort-select").value;
    console.log(sortValue);
    if (sortValue == "name") {
      let sortBy = "name";
      let sortDir = "asc";
      renderedPeople.sort(sortBy, sortDir);
    } else if (sortValue == "reverse") {
      let sortBy = "name";
      let sortDir = "desc";
      renderedPeople.sort(sortBy, sortDir);
    }
  });
}

//Søgefunktion

export { endpoint };
