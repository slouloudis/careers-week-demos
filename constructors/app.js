// let myVampire = {
//     age: 1243,
//     drinkBlood: victimBlood => {
//         for (let i = victimBlood; i >= 0; i = i - 0.5) {
//             if (i == 0) {console.log('There is no more blood left!');}
//             else {console.log(`The victim has ${i} liters of blood left!`)}}},
//     greet: () => {

//     }
//   }

//   myVampire.gallonsOfBlood = 342341
//   myVampire.capeStyle = ''; 
//   myVampire.capeStyle = 'Victorian'

//   console.log(myVampire.capeStyle);

//   myVampire.drinkBlood = victimBlood => {
//     for (let i = victimBlood; i >= 0; i = i - 0.5) {
//         if (i == 0) {console.log('There is no more blood left!');}
//         else {console.log(`The victim has ${i} liters of blood left!`)}
//     }
//   }

//   myVampire.drinkBlood(5)

//   let myObj = {
//     property1: 'string', 
//     property2: 1, //number
//     property3: ['This', 'is', 'an', 'array'],
//     property4: {
//         property4PROPERTY: 'This is an object inside an object!',
//         property4PROPERTY2: {
//             property4PROPERTY2Property1: function () {
//                 console.log(`Hello, I am super nested. Wow!!`);    
//             }
//         }
//     }
//   }

//   myObj.property4.property4PROPERTY2.property4PROPERTY2Property1()

// let player = {
//     health: 100,
//     model: '', // some sort of 3d file
//     attack: target => {
//         let atkDMG = getRandomNum()
//         target.health = target.health - atkDMG
//         console.log(`The player attacks the ${target.type}. They deal ${atkDMG} dmg. The vampire has ${target.health > 0 ? target.health : '0'} hp left!`);  
//     },
//     playerDeath: false 
// }


// function getRandomNum() {return Math.floor(Math.random() * 100)}

// let listOfEnemies = []

// function Enemies(type, health, model) {
//     this.type = type;
//     this.health = health;
//     this.model = model;
//     listOfEnemies.push(this)
// }

// // turn the below into an arrow function, and show how 'this' stops working! 

// Enemies.prototype.attack = function () {
//     this.attackDMG = getRandomNum()
//     console.log(this.attackDMG)
//     console.log(`${this.type} attacks! They deal ${this.attackDMG} dmg.`)
//     player.health = player.health - this.attackDMG;
//     if (player.health <= 0) {return player.playerDeath = true};
//      console.log(`The player has ${player.health} health left`)
//  }
 
// function playGame() {
//     console.log('forloop running')
//     let arrTurns = [1,2] 
//     for (let i = 0; i < arrTurns.length; i++) {
//         listOfEnemies[i].attack();
//         if (player.playerDeath == true) { console.log(`The player has died!`); break; }
//         player.attack(listOfEnemies[i])
//         if (0 >= listOfEnemies[i].health) {console.log(`The player has defeated the vampire!`); break;}
//     }
// }

// let vampire = new Enemies('Vampire', 100, 'somestring') 
// let pirate = new Enemies('Pirate', 150, 'somestring') 
// console.log(listOfEnemies)

// playGame();

// constructors 


// let myArr = new Array('one', 'two', 'wow we can make arrays like this but no one ever does')

// console.log(myArr);

// let elf = new Object()
// console.log(elf);

let allShirts = [];

function tshirtConstructor(price,color) {
    this.price = price;
    this.color = color;
    this.type = 't-shirt';
    allShirts.push(this)

}

let fineRed = new tshirtConstructor(14.99, 'red')
new tshirtConstructor(50.00, 'better red')
console.log(tshirtConstructor.prototype)


// function BasicReturn() {
//     let string = 'string'
//     return string
// }

// let tester = new BasicReturn()
// console.log(tester)