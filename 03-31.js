// 1.

let sk = 20;

if (sk > 0) {
    console.log("Skaicius geras");
} else if (sk < 0) {
    console.log("Skaicius blogas");
} else {
    console.log("skaicius lygus nuliui.");
}

// 2.

let sp = 2;

if (sp === 1) {
    console.log("Galite eiti!");
} else if (sp === 2) {
    console.log("Palaukite.");
} else {
    console.log("Eiti draudziama.");
}

// 3.

let dz = 3;
let kn = 18;
let vnt = 5;

if (kn / dz <= 5) {
    console.log("Knygos telpa i dezes");
} else {
    console.log("Knygos netelpa i dezes");
}

// 4.

let a = 29;
let b = 39;

if (a > b) {
    a--;
    b++;
} else {
    a++;
    b--;
}
console.log(`Skaicius a = ${a}, skaicius b = ${b}`);

// 5.

let cnt = 50;
let prc1 = 20;
let porc = Math.floor(cnt / prc1);
let lk = cnt % prc1;

if (cnt >= prc1) {
    console.log(`Saulius nusipirks ${porc} porcijas, liks centu ${lk}`);
} else {
    console.log('Sauliui neuztenka centu ledu porcijai nusipirkti :{')
}

// 6.
let deg = 6;

if ( deg % 3 === 0) {
    console.log('Trikampi sudelioti galima');
} else {
    console.log('Trikampio sudelioti negalima');
}
