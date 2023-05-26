console.log("________________________________________________");
console.log("__________\\----------\\__________________________");
console.log("_______oooo) >  >  >  ))>_______________________");
console.log("__________/----------/__________________________");
console.log("____________             _______________________");
console.log("____________[  BATTLES  ]_______________________");
console.log("____________             _______________________");
console.log("__________________\\----------\\__________________");
console.log("_______________oooo) >  >  >  ))>_______________");
console.log("__________________/----------/__________________");
console.log("____________________        ____________________");
console.log("____________________[  IN  ]____________________");
console.log("____________________        ____________________");
console.log("___________________________\\----------\\_________");
console.log("________________________oooo) >  >  >  ))>______");
console.log("___________________________/----------/_________");
console.log("____________________________           _________");
console.log("____________________________[  SPACE  ]_________");
console.log("________________________________________________\n\n");

const username = prompt('What is your name? ');
console.log(`\n\nYour name is ${username}.\n\n`);
console.log("You are an astronaut in the Global Space Force.\n\n");
console.log("Alien space ships are threatening to destroy Earth.\n\n");
console.log("You're the best of the best, so you've been")
console.log("ordered to take out the evil enemy space ships.\n\n")
console.log("So, get in your ship and give 'em heck (Hey, we're G-rated)!\n\n")

// let x = (Math.floor(Math.random() * 4) +3) ; //hull
// let y = (Math.floor(Math.random() * 3) +2); //firepower
// let z = (Math.floor(Math.random() * 3) +6)/10;//accuracy
//initialize alien ship values
let alienShip = 0;


//initialize fight or flight choice
//1 = fight, 2 = flee
fightOrFlight = 1;


//set up enemy ships
let alienShips = [];
let obj = {};
const MAX_NUM = 10;
const MIN_NUM = 1;
let ranNum = (Math.floor(Math.random() * MAX_NUM) + MIN_NUM);

for(let i = 0; i<ranNum; i++){
  obj = {
      hull: (Math.floor(Math.random() * 4) +3),
      firePower: (Math.floor(Math.random() * 3) +2),
      accuracy: (Math.floor(Math.random() * 3) +6)/10
  }
  alienShips.push(obj)  
}

    // console.log("------------------------");
    // console.log(alienShips);
    // console.log(alienShip);
    // let obj1  = alienShips[alienShip];
    // console.log(obj1.hasOwnProperty('accuracy'));

    // console.log("------------------------");  


//set up USS Schwarzenegger
  let USSS = {
      hull: 20,
      firePower: 5,
      accuracy: .7
  }


//get user name
//const username = prompt('What is your name? ');
//console.log(`Your name is ${username}`);

function fightTheShips () {
  
  while (USSS.hull>0 && alienShips[alienShip].hull>0){
    
    //USSS fires at alien ship
    //x = prompt('Press any key to fire:\n\n');
    //console.log("You're firing!!!\n\n")
    usssFires();

    //alien ship fires as USSS
    alienShipFires();
    
  } 
  
  alienShip++;
  if (USSS.hull < 15){
    let userRecharge = prompt("Do you want to return to base and recharge shields? (y/n) ");
    console.log("\n");
      if (userRecharge === 'y'){
        USSS.hull = 20;
      }
  }
  

} 

function usssFires(){
    //fires at alien ship
    firingSolution = Math.random();
    let fireChoice = prompt(`Press 'f' to fire or 'm' for missile`);
    console.log("\n");  
    let currentFirePower = 0;
    let currentAccuracy = 0;
    let missiles = 3;
    if (fireChoice === 'f'){
      currentFirePower = USSS.firePower;
      currentAccuracy = USSS.accuracy;
    } else if (fireChoice === 'm'){
        if (missiles > 0){
          missiles = missiles - 1
          console.log(`You have ${missiles} missiles left`);
          currentFirePower = USSS.firePower + 1;
          currentAccuracy = USSS.accuracy + 0.2;
        } else if (missiles === 0){
          console.log(`You have no missiles.`)
          currentFirePower = USSS.firePower;
          currentAccuracy = USSS.accuracy;
        }
      
    }
  
    //evaluate hit or miss
      if (firingSolution <= currentAccuracy){
        //report out the hit and decrement alien ship hull      
          console.log ("You've scored a hit!");
          alienShips[alienShip].hull = alienShips[alienShip].hull - currentFirePower;
      }
      else{
        //report out the miss
          console.log ("Uh oh! You missed!");
    }
    
    
    //echo ship details to the screen
    displayStats(); 
  
}

function shieldAmount(firePower){
  let ranShield = Math.floor(Math.random() * 4);
  if (ranShield > firePower){
    return 0;
  } else{
    return ranShield;
  }
}

function alienShipFires(){
  if (alienShips[alienShip].hull>0){
    //fires at USSS
    firingSolution = Math.random();
    let shield = shieldAmount(alienShips[alienShip].firePower);
    //evaluate hit or miss
    if (firingSolution <= alienShips[alienShip].accuracy){
      if (shield > 0){
        console.log(`Shield strength is +${shield}`);
      }
        console.log ("You've been hit!\n\n");
        USSS.hull = USSS.hull - alienShips[alienShip].firePower + shield;
        console.log(`You've taken ${alienShips[alienShip].firePower} damage and were protected by a shield strength of ${shield}.`);
    }
    else{
      //report out the miss
      console.log ("Yay! They missed!");
    }

    displayStats(); 
            
          }
}
function displayStats(){
  console.log("\n\n------------------------"); 
  console.log(`Alien ship health: ${alienShips[alienShip].hull}`);
  console.log(`USSS health: ${USSS.hull}`); 
  console.log("------------------------\n\n"); 
}


//alienShips.forEach(fightTheShips);
// console.log("------------------------"); 
// console.log(alienShips)
// console.log(USSS) 
// console.log("------------------------"); 


for (let ships of alienShips){
  let userChoice = prompt("Do you want to attack or retreat? (a/r): ");
  console.log("\n");  
  userChoice = userChoice.toLowerCase();
  if (userChoice === 'a'){
     fightTheShips(); 
  } else if (userChoice === 'r'){
    console.log('\n\nYou have retreated. Earth will be utterly destroyed. Game over!');
    console.log("\n");
    break;
  }
}

 
// console.log("-----------end-------------"); 
// console.log(`USSS Remaining Health left: ${USSS.hull}`);
// console.log(`Total Alien ships: ${alienShips.length}`)
// console.log("-----------end-------------"); 

/*prompt user if they want to attack or retreat (y/n)
  if yes -> run attack function
  if no -> end game and show stats of game
*/
