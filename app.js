import { animals } from "./animals";
import React from "react";
import ReactDOM from "react-dom";

const title = "";
const showBackground = false;
const background = (
  <img className="background" alt="ocean" src="./images/ocean.jpg" />
);

const displayFact = (e) => {
  let animal = e.target.alt;
  let selectedAnimal = animals[animal];
  let randomIndex = Math.floor(Math.random() * animal.facts.length);
  let funFact = selectedAnimal.facts[randomIndex];
  document.getElementById("fact").innerHTML = funFact;
};
const images = [];

for (let animal in animals) {
  images.push(
    <img
      key={animal}
      className="animal"
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role="button"
      onClick={displayFact}
    />
  );
}

const animalFacts = (
  <div>
    <h1>{title === "" ? "Click an animal for a fun fact" : title} </h1>
    {showBackground && background}
    <div className="animals">{images}</div>
    <p id="fact"></p>
  </div>
);

ReactDOM.render(animalFacts, document.getElementById("root"));
