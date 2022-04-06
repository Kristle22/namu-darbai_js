// 1.
console.log('1)---------------------------');

let sum = 0;
let rand = 0;
while (sum < 100) {
    rand = Math.floor(Math.random() * 10) + 1;
    sum += rand;
}
console.log(sum);

// 2.
console.log('2)---------------------------');

let suma = 1;
while (suma % 7) {
    let random = Math.floor(Math.random() * 10) + 1;
    suma += random;
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

let skaicius = 5;
let i = 0;
while (i !== skaicius) {
    i = Math.floor(Math.random() * 11);
    console.log(i);
}

// 5.
console.log('5)---------------------------');

let skaicius1 = 5;
let skaicius2 = 7;
let itr = 0;
let ciklai = "";
while(itr !== skaicius1 && itr !== skaicius2) {
    itr = Math.floor(Math.random() * 11);
    console.log(itr); 
    ciklai += itr + ',';
}
cikluSk = ciklai.split(',').length - 1;
console.log(`Ciklas prasisuko ${cikluSk} kartu.`);
