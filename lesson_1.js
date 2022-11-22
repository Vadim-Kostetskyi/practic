// 1

const apples = 47;
const grapes = 135;
const total = apples + grapes;
console.log(total)
const diff = grapes - apples;
console.log(diff)

// 2

let students = 100;
students += 50;
console.log(students);

// 3

const result = 108 + 223 - 2 * 5;
console.log(result);

// 4

const value = 27.5;
console.log(Math.floor(value))
console.log(Math.ceil(value))
console.log(Math.round(value))

// 5

const companyName = 'Cyberdyne Systems';
const repairBots = 150;

const message = `${companyName} has ${repairBots} bots in stock`;
console.log(message); // "Cyberdyne Systems has 200 bots in stock"

// 6

let weight = '88,3';
let height = '1.75';

const bmi = Number.parseFloat(weight) / Number.parseFloat(height) ** 2;
console.log(Number(bmi.toFixed(1))); // 28.7

// 7

console.log(5 > 4);

console.log(10 >= '7');

console.log('2' > '12');

console.log('2' < '12');

console.log('4' == 4);

console.log('6' === 6);

console.log('false' === false);

console.log(1 == true);

console.log(1 === true);

console.log('0' == false);

console.log('0' === false);

console.log('Papaya' < 'papaya');

console.log('Papaya' === 'papaya');

console.log(undefined == null);

console.log(undefined === null);

// 8

console.log(true && 3);

console.log(false && 3);

console.log(true && 4 && 'kiwi');

console.log(true && 0 && 'kiwi');

console.log(true && true);

console.log(false && true);

console.log(true && false);

console.log(false && false);

console.log(true || true);

console.log(false || true);

console.log(true || false);

console.log(false || false);

console.log(true || 3);

console.log(true || 3 || 4);

console.log(true || false || 7);

console.log(null || 2 || undefined);

console.log((1 && null && 2) > 0);

console.log(null || (2 && 3) || 4);

// 9

const time = prompt("Введи число")

const minutes = time % 60
const hour = parseInt(time / 60)
const newMinutes = String(minutes).padStart(2, 0)
const newHour = String(hour).padStart(2, 0)

const totalMinutes = ` ${newHour} : ${newMinutes} `



console.log(totalMinutes)

//10

const year = Number(prompt('Перевірь чи є рік високосним: '));