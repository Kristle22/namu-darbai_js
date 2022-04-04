// Kintamuju palyginimas
// 1. a)

const age1 = 29;
const age2 = 39;
const age3 = 19;

if (age1 > age2) {
    console.log("(a)Pomidoras");
} else {
    console.log("(a)Bandykite kita karta.");
}
// 1. b) 
if (age2 < age3) {
    console.log("(b)Pomidoras");
} else {
    console.log("(b)bandykite kita karta.");
}
//  1. c)
if (age1 === age3) {
    console.log("(c)Pomidoras");
} else {
    console.log("(c)Bandykite kita karta.");
}

// 1. d)
if (age1 !== age2) {
    console.log("(d)Pomidoras");
} else {
    console.log("(d)Bandykite kita karta.");
}

// 1. e)
if (age2 >= age1) { 
    console.log("(e)Pomidoras");
} else {
    console.log("(e)Bandykite kita karta.");
}

// 1. f)
if (age1 <= age2) {
    console.log("(f)Pomidoras");
} else {
    console.log("(f)Bandykite kita karta.");
}

// 2.
const phrase1 = "Gera pradzia puse darbo.";
const phrase2 = "Ka darai, daryk gerai.";
const phrase1Len = phrase1.length;
const phrase2Len = phrase2.length;

console.log(`Pirmos frazes ilgis: ${phrase1Len} simboliu.`);
console.log(`Antros frazes ilgis: ${phrase2Len} simboliu.`);

// 3. a) b)

if (phrase1Len > phrase2Len) {
    console.log("Pirmos fraze turi daugiau simboliu");
} else {
    console.log("Anra fraze ilgesne uz pirma");
}

// 3. c) d)
if (phrase1Len !== phrase2Len) {
    console.log("Abi frazes yra vienodo ilgio.");
} else {
    console.log("Siu fraziu simboliu skaicius skiriasi.");
}

// 3. e) f)

if (phrase1Len <= phrase2Len) {
    console.log("Pirmos frazes simboliu skaicius yra mazesnis arba lygus antros frazes ilgiui.");
} else {
    console.log("Pirmos frazes simboliu skaicius nera mazesnis arba lygus antrai frazei.")
}

// Ciklo for panaudojimas
// 1. a) 0 ... 0

let sumZero = 0;
for (let i = 0; i < 1; i++) {
    sumZero += i;
}
console.log(sumZero);

// 1. b) 0 ... 4

let interval1 = [];
let intLen1 = 4 - 0 + 1

let result1 = 0;
for (let i = 0; i < intLen1; i++) {
    interval1.push(i);
    result1 += interval1[i];
}
console.log(result1);

// 1. c) 0 ... 100

let interval2 = [];
let intLen2 = 100 - 0 + 1;

let result2 = 0;
for (let i = 0; i < intLen2; i++ ) {
    interval2.push(i);
    result2 += interval2[i];
}
console.log(result2);

// 1. d) 574 ... 815

let interval3 = [];
let intLen3 = 815 - 574 + 1 

let intervalItem3 = 574;
let result3 = 0;
for (let i = 0; i < intLen3; i++) {
    interval3.push(intervalItem3++);
    result3 += interval3[i];    
}
console.log(result3);

// 1. e) -50 ... 50

let interval4 = [];
let intLen4 = 50 + 50 + 1;

let intervalItem4 = -50;
let result4 = 0;
for (let i = 0; i < intLen4; i++) {
    interval4.push(intervalItem4++);
    result4 += interval4[i];
}
console.log(result4);

// 1. f) -70 ... 30

let interval5 = [];
let intLen5 = 30 + 70 + 1;

let intervalItem5 = -70;
let result5 = 0;
for (let i = 0; i < intLen5; i++) {
    interval5.push(intervalItem5++);
    result5 += interval5[i];
}
console.log(result5);

// 2. 
let superPhrase = "NEBEPRISIKISKIAKOPUSTELIAUDAVOME";
let phrLen = superPhrase.length;

let text = "";
for (let i = phrLen - 1; i >= 0; i--) {
    text += superPhrase[i];
} 
console.log(text);

// 3. a) 0 - 11 /b) 8 - 31 /c) -18 - 18 (kiek skaiciu dalijasi be liekanos is 3, 5 ir 7)

let startAt = -18;
let endAt = 18;

let numFrom3 = [];
let numFrom5 = [];
let numFrom7 = [];

for(let i = startAt; i < endAt; i++) {
    if (i % 3 === 0) { numFrom3.push(i) };  
    if (i % 5 === 0) { numFrom5.push(i) };
    if (i % 7 === 0) { numFrom7.push(i) };
}
console.log('----------------------------------------------');
console.log(`Skaiciu intervale tarp ${startAt} ir ${endAt}, besidalijanciu be liekanos is 3 yra ${numFrom3.length} vienetai: ${numFrom3}`);
console.log('----------------------------------------------');
console.log(`Skaiciu intervale tarp ${startAt} ir ${endAt}, besidalijanciu be liekanos is 5 yra ${numFrom5.length} vienetai: ${numFrom5}`);
console.log('----------------------------------------------');
console.log(`Skaiciu intervale tarp ${startAt} ir ${endAt}, besidalijanciu be liekanos is 7 yra ${numFrom7.length} vienetai: ${numFrom7}`);
console.log('----------------------------------------------');




