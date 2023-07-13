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

let player = {
    health: 100,
    model: '', // some sort of 3d file
    attack: (target) => {
        let atkDMG = getRandomNum()
        target.health = target.health - atkDMG
        console.log(`The player attacks the ${target.type}. They deal ${atkDMG} dmg. The vampire has ${target.health > 0 ? target.health : '0'} hp left!`);  
    },
    playerDeath: false 
}


function getRandomNum () { Math.floor(Math.random() * 100)}

function Enemies(type, health, model) {
    this.type = type;
    this.health = health;
    this.model = model;
}

// turn the below into an arrow function, and show how 'this' stops working! 

Enemies.prototype.attack = function () {
    this.attackDMG = getRandomNum()

    console.log(`${this.type} attacks! They deal ${this.attackDMG} dmg.`)
    player.health = player.health - this.attackDMG;
    if (player.health <= 0) {return player.playerDeath = true};
     console.log(`The player has ${player.health} health left`)
 }
 
function playGame() {
    let arrTurns = [1,2,3] 
    for (let i = arrTurns.length; i >= 0; i--) {
        vampire.attack();
        if (player.playerDeath == true) { console.log(`The player has died!`); break; }
        player.attack(vampire)
        if (0 >= vampire.health) {console.log(`The player has defeated the vampire!`); break;}
    }
}

let vampire = new Enemies('Vampire', 100, 'somestring') 

playGame();

// constructors 


// let myArr = new Array('one', 'two', 'wow we can make arrays like this but no one ever does')

// console.log(myArr);

// let elf = new Object()
// console.log(elf);
