// 1.
console.log('1)---------------------------');

for (let i = 0; i < 5; i++) { 
  console.log("Labas!");
}

// 2.
console.log('2)---------------------------');

for (let i = 0; i < 5; i++) {
    console.log(i);
}
// 3.
console.log('3)---------------------------');

for (let i = 0; i < 41; i+=10) {
       console.log(i);
}

// 4.
console.log('4)---------------------------');

for (let i = 49; i < 54; i++) {
    console.log(i);
}

// 5.
console.log('5)---------------------------');

let randNr;
for (let i = 0; i < 5; i++) {
    console.log(Math.floor(Math.random() * 11));
}

// 6.
console.log('6)---------------------------');

for (let i = 1; i < 21; i++) {
    if (i % 3) {
        console.log(i);
    }
}

// 7.
console.log('7)---------------------------');

let numb = 7;
let result; 
for (let i = 1; i < 11; i++) {
    result = numb * i;
    console.log(`${numb} * ${i} = ${result}`);
}

// 8.
console.log('8)---------------------------');

let inchList = 10;
let inchIncm;
for (let i = 1; i < inchList + 1; i++) {
    inchIncm = i * 2.54;
    console.log(`${i} col. yra ${inchIncm} cm.`);
}

// 9.
console.log('9)---------------------------');

let laikotarpis = 10;
let palukanos;
let indelis = 100;
for (let i = 1; i < laikotarpis + 1; i++) {
    palukanos = indelis * 0.02;
    indelis += palukanos;
    console.log(`Po ${i} m./ Palukanos: ${palukanos.toFixed(2)} eur./ Indelis: ${indelis.toFixed(2)} eur.`);
}

// 10.
console.log('10)---------------------------');

let laikasIki = 2022;
let pirmiKeliamieji = 4;
for (let i = pirmiKeliamieji; i < laikasIki  + 1; i+=4) {
   if (i % 100 === 0 && i % 400 !== 0) { continue; };
    console.log(i);
}

