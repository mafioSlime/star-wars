const characterContainer = document.querySelector('.character-container')
const x = 1
const random = Math.floor(Math.random() * 80);
const url = (`https://swapi.co/api/people/${x * random}/`)




fetch(url)
  .then((res) => {
    return res.json()
  })
  .then((data) => {
    console.log(data)
    let character = {}
    character.name = data.name
    character.birthdate = data.birth_year
    character.gender = data.gender
    character.haircolor = data.hair_color
    character.skincolor = data.skin_color
    character.eyecolor - data.eye_color
    character.height = data.height
    character.mass = data.mass
    console.log(character)
    // generateTemplate()
  })

// const generateTemplate = (character) => {
//   const html = `
//     <div>
//       <h3>${character.name}</h3>
//       <p>${character.birthdate}</p>
//       <p>${character.gender}</p>
//       <p>${character.haircolor}</p>
//       <p>${character.skincolor}</p>
//       <p>${character.eyecolor}</p>
//       <p>${character.height}</p>
//       <p>${character.mass}</p>
//     </div>

//   `
// }