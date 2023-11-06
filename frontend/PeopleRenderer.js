import ItemRenderer from "./ItemRenderer.js";

export class PeopleRenderer extends ItemRenderer {
  render() {
    const person = this.item;
    const html = /*html*/ ` 
        <article class="grid-box">
        <h2 class="person-name">${person.name}</h2>
        </article>
        `;
    return html;
  }

  postRender(element) {
    element.addEventListener("click", () => {
      console.log(this.item.name);
    });
  }
}
