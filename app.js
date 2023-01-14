import CardGlassMorphism from "https://dev-passion76.fr/customElements/cardGlassMorphism/cardGlassMorphism.js";

customElements.define("card-glass", CardGlassMorphism);

const body = document.querySelector("body");

const cardGlass = new CardGlassMorphism();
cardGlass.datas = {
  title: "Mando",
  paragraph: `mandalorian`,
  img: "./mandolarian.jpg",
};

body.appendChild(cardGlass);
