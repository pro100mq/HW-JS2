let temperature = 27;
console.log(temperature)
temperature *= 1.8;
temperature += 32;
console.log(temperature)


let august = 31;
console.log(august)
august *= 24;
console.log(august)
august *= 60;
console.log(august)


let health = 100;
let energy = 100;
let damage = 15;
let energyLast = 10;

health -= damage;
energy -= energyLast;
console.log("Поточний рівень здоров'я гравця: " + health);
console.log("Поточний рівень енергії гравця: " + energy);


let purchaseAmount = 1000; 
let discount = 0.1;
let finalAmount = purchaseAmount * (1 - discount);
console.log("Сума покупки після знижки: " + parseInt(finalAmount) + " грн");

let number = 2961.80;
console.log(Math.floor(number))

const text = "2468.9"
console.log(Number.parseFloat(text))

const numbers = "150"
console.log(Number.parseInt(numbers))

const root = 144
console.log(Math.sqrt(root))

let intNumber = 53;
let stringNumber = '53';
let parsedInt = parseInt(stringNumber);
console.log(parsedInt);

let convertedString = intNumber.toString();
console.log(convertedString);