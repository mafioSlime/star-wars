const characterContainer = document.querySelector('.character-container')
const x = 1
const btn = document.querySelector('.btn')

let randomNumber = (a, b) => {
  return Math.floor(Math.random() * a + b)
}

const generateCharacter = () => {
  const url = (`https://swapi.co/api/people/${randomNumber(40, 1)}/`)
  fetch(url)
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      let character = {}
      character.name = data.name
      character.birthdate = data.birth_year
      character.gender = data.gender
      character.haircolor = data.hair_color
      character.skincolor = data.skin_color
      character.eyecolor - data.eye_color
      character.height = data.height
      character.mass = data.mass

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
    `

    })
}


btn.addEventListener('click', () => {
  generateCharacter()
})