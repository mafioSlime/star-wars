const characterContainer = document.querySelector(".character-container");
const x = 1;
const characterBtn = document.querySelector(".character-btn");
const planetBtn = document.querySelector(".planet-btn");
const starshipBtn = document.querySelector(".starship-btn");

let randomNumber = (a, b) => {
  return Math.floor(Math.random() * a + b);
};

const generateCharacter = () => {
  const url = `https://swapi.co/api/people/${randomNumber(40, 1)}/`;
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      let character = {};
      character.name = data.name;
      character.birthdate = data.birth_year;
      character.gender = data.gender;
      character.haircolor = data.hair_color;
      character.skincolor = data.skin_color;
      character.eyecolor - data.eye_color;
      character.height = data.height;
      character.mass = data.mass;

      characterContainer.innerHTML = `
       <div>
       <div class="char-title upsize">
      <h3>Name: ${character.name}</h3>
      </div>
      <div class="char-info">
      <p><span>Birthdate: ${character.birthdate}</p>
      <p>Gender: ${character.gender}</p>
      <p>Hair Color: ${character.haircolor}</p>
      <p>Skin Color: ${character.skincolor}</p>
      <p>Eye Color: ${character.eyecolor}</p>
      <p>Height: ${character.height}</p>
      <p>Mass: ${character.mass}</p>
      </div>
    </div>
    `;
    });
};

const generatePlanet = () => {
  const url = `https://swapi.co/api/planets/${randomNumber(40, 1)}/`;
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      let planet = {};
      planet.name = data.name;
      planet.rotation = data.rotation_period;
      planet.orbital = data.orbital_period;
      planet.diameter = data.diameter;
      planet.climate = data.climate;
      planet.gravity = data.gravity;
      planet.terrain = data.terrain;
      planet.surface = data.surface;
      planet.population = data.population;

      characterContainer.innerHTML = `
      <div>
      <div class="planet-title upsize">
      <h3>Name: ${planet.name}</h3>
      </div>
      <div class="planet-info">
      <p>Rotation: ${planet.rotation}</p>
      <p>rbital: ${planet.orbital}</p>
      <p>Diameter: ${planet.diameter}</p>
      <p>Climate: ${planet.climate}</p>
      <p>Terrain: ${planet.terrain}</p>
      <p>Surface: ${planet.surface}</p>
      <p>Population: ${planet.population}</p>
      </div>
      </div>
      `;
    });
};

const generateStarship = () => {
  const url = `https://swapi.co/api/starships/${randomNumber(9, 1)}/`;
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(data => {
      let starship = {};
      starship.name = data.name;
      starship.model = data.model;
      starship.manufacturer = data.manufacturer;
      starship.cost = data.cost_in_credits;
      starship.crew = data.crew;
      starship.passengers = data.passengers;
      starship.cargo = data.cargo_capacity;
      starship.hyperdrive = data.hyperdrive_rating;
      starship.class = data.starship_class;

      characterContainer.innerHTML = `
    <div>
    <div class="starship-title upsize">
    <h3>Name: ${starship.name}</h3>
    </div>
    <div class="starship-info">
    <p>Model: ${starship.model}</p>
    <p>Manufacturer: ${starship.manufacturer}</p>
    <p>Crew: ${starship.crew}</p>
    <p>Passengers: ${starship.passengers}</p> 
    <p>Hyperdrive Rating: ${starship.cost}</p>
    <p>Cargo: ${starship.cargo}</p>
    <p>Class: ${starship.class}</p>
    <p>Hyperdrive: ${starship.hyperdrive}</p>
    </div>
    </div>
    
    
    `;
    });
};

starshipBtn.addEventListener("click", () => {
  generateStarship();
});

characterBtn.addEventListener("click", () => {
  generateCharacter();
});

planetBtn.addEventListener("click", () => {
  generatePlanet();
});