let samArr = ['Sam', 'Louloudis', 24, ['Tekken', 'Dota 2', 'Morrowind'], true, {job: 'teaching assistant'}, 'evening']
let types = []

for (let i = 0; i < samArr.length; i++) {
  if (typeof samArr[i] !== 'string') continue
  //types[i] = typeof samArr[i]
  types.push(typeof samArr[i]) 
  console.log(samArr[i])
}

console.log(types)

let myPets = ['Darcy' , 'Charlie', 'Sushi', 'Tulip']

for (let i = 0; i < myPets.length; i++) {
  if (myPets[i] == 'Sushi') {
    break;
  }
  console.log(myPets[i])
}