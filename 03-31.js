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

let a = 89;
let b = 39;

if (a > b) {
    a--;
    b++;
    console.log(`Skaicius a = ${a}, skaicius b = ${b}`);
} else if (b > a) {
    a++;
    b--;
    console.log(`Skaicius a = ${a}, skaicius b = ${b}`);
} else {
        console.log(`Skaiciu a ir b vertes yra lygios ${a}`)
    }
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

// 7. I

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

// 7. II

let men = 5;
let met = 2022;

const data = new Date(met, men, 0);
const dienSk = data.getDate();

console.log(`${met} metu ${men} menesio dienu skaicius: ${dienSk} d.`);

// 7. III
let menNr1 = 5;

if (menNr1 === 2) {
    console.log(`${menNr1} menuo turi 28 dienas.`);  
} 
else if (menNr1 < 7 && menNr1 % 2 === 0 || menNr1 > 8 && menNr1 % 2 !== 0) {
    console.log(`${menNr1} menuo turi 30 dienu.`);  
} else {
  console.log(`${menNr1} menuo turi 31 diena.`);   
}

// 8. I

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
// 8. II

let kauliukas1 = 1;

if (kauliukas1 % 2 === 0) {
    console.log('Kambari tvarkys vyresnelis');
} else {
    console.log('Kambari tvarkys jaunelis'); 
}

// 9. I

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

// 9. II

let zaidMetai = 1904;
let olimpNr = zaidMetai / 4 - 473; 

if (zaidMetai % 4 === 0) {
    console.log(`${zaidMetai} olimpinems zaidynems priskirtas ${olimpNr} numeris.`); 
} else {
    console.log('Metai NEolimpiniai.');
}

// 10.

let val1 = 8;
let min1 = 29;
let kelMin =43;

let valPam = 9;
let minPam = 5;

let minLaikas = (valPam * 60 + minPam) - (val1 * 60 + min1);

if (minLaikas < kelMin) {
    console.log('Petras i pamoka paveluos.');
} else {
    console.log('Petras i pamoka NEpaveluos.');
}

