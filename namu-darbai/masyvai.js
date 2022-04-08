// 1.
console.log('1)------------------------')
const masyvas = [];
for (let i = 1; i < 21; i++) {
    masyvas.push(i);
}
console.log(masyvas);

// 2.
console.log('2)------------------------')
let masyvoIlgis = 55;
const masyvas2 = [];
for (i = 1; i < masyvoIlgis+1; i++) {
    masyvas2.push(i);
}
console.log(masyvas2);

// 3.
console.log('3)------------------------')
let masIlgis = 15;
const masyvas3 = [];
let random;
let maxNumber = 5;
for (let i = 0; i < masIlgis; i++) {
    random = Math.floor(Math.random()*(47 - 5 + 1) + 5);
    masyvas3.push(random);
    let number = masyvas3[i];
    if (number > maxNumber) {
        maxNumber = number;
    }
} 
console.log(masyvas3);
console.log(`Didziausias skaicius masyve yra ${maxNumber}`);

// 4.
console.log('4)------------------------')

let raides = 'DEFGH'.repeat(20);
const masyvas4 = raides.split('');
console.log(masyvas4);

// 5.
console.log('5)------------------------')

const masyvas5 = [];
const raidReiksmes = 'MNOP'.split('');

let index;
let countM = 0;
let countN = 0;
let countO = 0;
let countP = 0;
for (i = 0; i < 100; i++) {
    index = Math.floor(Math.random()*4);
    masyvas5.push(raidReiksmes[index]);
    if (masyvas5[i] === 'M') {
        countM++;
    }
    if (masyvas5[i] === 'N') {
        countN++;
    }
    if (masyvas5[i] === 'O') {
        countO++;
    }
    if (masyvas5[i] === 'P') {
        countP++;
    }
}
console.log(masyvas5);
console.log(`Siame masyve raidziu 'M': ${countM}, 'N': ${countN}, 'O': ${countO}, 'P': ${countP}.`);

// 6.
console.log('6)------------------------')

const masyvas6 = [];
let randUniq;
while (masyvas6.length !== 20) {
    randUniq = Math.floor(Math.random()*(50 - 10 + 1) + 10);
    if (!masyvas6.includes(randUniq)) {
        masyvas6.push(randUniq);  
    }
}
console.log(masyvas6);



