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

  const somePeople = await getSomePeople();
  renderedPeople = new ListRenderer(somePeople, "#people-grid-container", PeopleRenderer);

  createPagnationButtons();
  document.querySelector("#page1").addEventListener("click", () => {
    showPage1;
  });
  // document.querySelector("#page2").addEventListener("click", () => {
  //   renderedPeople.render();
  // });
  // document.querySelector("#page3").addEventListener("click", () => {
  //   renderedPeople.render();
  // });
}

async function getPeople() {
  const response = await fetch(endpoint);
  const people = await response.json();
  return people;
}

export async function getSomePeople() {
  const response = await fetch(endpoint + "?page=2&limit=4");
  const originalJson = await response.json();
  const somePeople = originalJson.map((JsonObj) => {
    return somePeople;
  });
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

function createPagnationButtons() {
  const pageSize = 5;
  const totalPeople = 250 / pageSize;
  const container = document.querySelector("#pagination");
  for (let p = 0; p < totalPeople; p++) {
    const html = `<button id ="page${p + 1}">{p+1} -${p + 1 + 5}</button>`;
    container.insertAdjacentHTML("beforeend", html);

    const button = container.lastElementChild;
    button.addEventListener("click", (event) => {
      event.preventDefault();
    });
  }
}

async function showPage1() {
  const people = await endpoint.getSomePeople(1, 5);
  PeopleRenderer.setList(people);
}

//Søgefunktion

export { endpoint };
