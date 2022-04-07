// 1.
console.log('1)---------------------------');
let sum = 0;
while ( sum < 100) {
    sum += Math.floor(Math.random() * 10) + 1;
}
console.log(sum);

// let sum = 0;
// let rand = 0;
// while (sum < 100) {
//     rand = Math.floor(Math.random() * 10) + 1;
//     sum += rand;
// }
// console.log(sum);

// 2.
console.log('2)---------------------------');

let suma = 0;
while (suma % 7 !== 0 || suma === 0) {

    suma += Math.floor(Math.random() * 10) + 1;;
} 
console.log(suma);

// 3.
console.log('3)---------------------------');

let m = 17;
let d = 0;
let skyrSk = 0;
while (skyrSk < m) {
    d++;
    skyrSk += d;
}
let vid = (m/d).toFixed(2);

console.log(`Tadas visa knyga perskaite per ${d} dien.`);
console.log(`Tadas vidutiniskai per diena perskaite ${vid} skyr.`);

// 4.
console.log('4)---------------------------');

let i;
while (i !== 5) {
    i = Math.floor(Math.random() * 11);
    console.log(i);
}

// 5.
console.log('5) a)---------------------------');


// 5.
console.log('5) b)---------------------------');

let itrRand;
let ciklai = 0;
while (itrRand !== 5 && itrRand !== 7) {
    itrRand = Math.floor(Math.random() * 11);
    console.log(itrRand);
    ciklai++;
}
console.log(`Ciklas prasisuko ${ciklai} kart.`);


// let skaicius1 = 5;
// let skaicius2 = 7;
// let itr = 0;
// let ciklai = "";
// while(itr !== skaicius1 && itr !== skaicius2) {
//     itr = Math.floor(Math.random() * 11);
//     console.log(itr); 
//     ciklai += itr + ',';
// }
// cikluSk = ciklai.split(',').length - 1;
// console.log(`Ciklas prasisuko ${cikluSk} kartu.`);