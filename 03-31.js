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

// 7.

let dienuSk = [28, 30, 31];
let menNr = 5;

if (menNr === 2) {
    dienuSk = dienuSk[0];
} else if (menNr === 4 || menNr === 6 || menNr === 9 || menNr === 11){
    dienuSk = dienuSk[1];
} else {
    dienuSk = dienuSk[2];
}
console.log(`Sio menesio dienu skaicius yra ${dienuSk}.`);

// 8.

let kauliukas = 1;
let uzrasas
switch(kauliukas) {
    case 1:
    case 3:
    case 5:
        uzrasas = 'Kambari tvarkys jaunelis';
        break;
    case 2:
    case 4:
    case 6:
        uzrasas = 'Kambari tvarkys vyresnelis';
}
console.log(uzrasas);

// 9.

let visiMetai = []; 
let zaidSk = Math.floor((2022 -1896)/ 4);

let metai = 1905;

let olimpMetai = 1896;
for (let i = 0; i < zaidSk + 1; i++ ) {
    visiMetai.push(olimpMetai);
    olimpMetai += 4;
}
let zaidNr = visiMetai.indexOf(metai) +1;

if (visiMetai.includes(metai)) {
    console.log(`Siems olimpiniams metams yra suteiktas ${zaidNr} numeris.`);
} else {
    console.log('Metai neolimpiniai.');
}

// 10.

