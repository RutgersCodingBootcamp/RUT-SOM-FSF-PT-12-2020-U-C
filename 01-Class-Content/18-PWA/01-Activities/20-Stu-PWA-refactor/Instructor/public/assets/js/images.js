import {createCards} from "./card.js";

export function loadImages() {
    fetch("http://localhost:3000/api/images").then((res) => res.json())
      .then((data) => createCards(data));
  }

