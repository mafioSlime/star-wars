const characterContainer = document.querySelector(".character-container");
const x = 1;
const characterBtn = document.querySelector(".character-btn");
const planetBtn = document.querySelector(".planet-btn");
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
       <div style="border: 2px solid #ffff00;" >
      <h3>Name: ${character.name}</h3>
      <p><span>Birthdate: ${character.birthdate}</p>
      <p>Gender: ${character.gender}</p>
      <p>Hair Color: ${character.haircolor}</p>
      <p>Skin Color: ${character.skincolor}</p>
      <p>Eye Color: ${character.eyecolor}</p>
      <p>Height: ${character.height}</p>
      <p>Mass: ${character.mass}</p>
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
      <div style="border: 2px solid #ffff00">
      <h3>Name: ${planet.name}</h3>
      <p>Rotation Period: ${planet.rotation}</p>
      <p>Orbital Period: ${planet.orbital}</p>
      <p>Diameter: ${planet.diameter}</p>
      <p>Climate: ${planet.climate}</p>
      <p>Terrain: ${planet.terrain}</p>
      <p>Surface: ${planet.surface}</p>
      <p>Population: ${planet.population}</p>
      </div>
      `;
    });
};

characterBtn.addEventListener("click", () => {
  generateCharacter();
});

planetBtn.addEventListener("click", () => {
  generatePlanet();
});
