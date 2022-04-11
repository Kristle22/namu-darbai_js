// 1.
console.log('1)---------------------------');

function suma (a, b) {
    return a + b;
}

console.log(suma(2, 6));

// 2.
console.log('2)---------------------------');

function lygybe (pirmas, antras) {
    if (pirmas > antras) {
    console.log('Pirmas skaicius didesnis.')
    } else if( pirmas < antras) {
        console.log('Antras skaicius didesnis.') 
    } else {
        console.log('Abu skaiciai yra lygus.')
    }
}

lygybe (5, 3);

// 3.
console.log('3)---------------------------');

function kelMetai (metai)  {
    if (metai % 4 || metai % 100 === 0 && metai % 400) {
        console.log('Metai yra paprastieji');
     } else {
        console.log('Metai yra keliamieji');
    }
}

kelMetai (800);

// 4.
console.log('4)---------------------------');

function kvadratas (number) {
    return number * number;
}

console.log(kvadratas(7));

// 5.
console.log('5)---------------------------');

function skaiciuSuma (skaicius) {
    if (skaicius <= 1) {
        console.log('Skaicius turi buti didesnis uz vieneta.')
    }
    let sum = 0;
    for (i = 1; i < skaicius +1; i++) {
        sum += i;
    }
    return sum;
}

console.log(skaiciuSuma(9));

// 6.
console.log('6)---------------------------');

function skaiciuKiekis (skaicius) {
    let sveikiSkaiciai = [];
    for (i = 2; i < skaicius; i++) {
        if (skaicius % i === 0 ) {
            sveikiSkaiciai.push(i);
        }
    }

    console.log(`Is ${skaicius} dalijasi ${sveikiSkaiciai.length} sveiki skaiciai: ${sveikiSkaiciai}`); 
}
skaiciuKiekis(70);

// 7.
console.log('7)---------------------------');

function tekstoIlgis (text) {
    if (typeof(text) === 'string') { 
    // document.getElementById("").innerHTML = `Teksta "${text}" sudaro ${text.replace(/ /g, '').length} simb.`;
    console.log(`Teksta "${text}" sudaro ${text.replace(/ /g, '').length} simb.`);
    } else {
        console.log('Iveskite teksta.');
    }
}

tekstoIlgis('Mokslo saknys karcios, o vaisiai saldus');

// 8.
console.log('8)---------------------------');

function telefonoNumeris (numeris) {

    if (typeof(numeris) !== 'number' || !isFinite(numeris)) {
        console.log('Prasau iveskite tiktai skaitmenis.');
    }
    if (typeof(numeris) !== 'string') {
        numeris = numeris.toString();
    }
    if (numeris.length < 10 || numeris.length > 10) {
        console.log('Numeris privalo tureti 10 skaitmenu.');
    } else {
        console.log(numeris.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3'));
    }
}

telefonoNumeris(1234567890);

console.log('8)PAVYZDINIS VARIANTAS---------------------------');

function telefonoNumeris(a){
    if (!Array.isArray(a)) {
        return 'Kintamasis nėra masyvas';
    }
    if (a.length !== 10) {
        return 'Masyvas yra netinkamo ilgio';
    }
    for (let i = 0; i < 10; i++) {
        if ( typeof a[i] !== 'number') {
            return 'Masyvo reikšmės turi būti skaičiai';
        }
    }
    return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`;
}

console.log('1)', telefonoNumeris(17));
console.log('2)', telefonoNumeris('asdasd'));
console.log('3)', telefonoNumeris([9,5,8,6,5,4,7,1,2]));
console.log('4)', telefonoNumeris([9,5,8,6,5,4,7,1,2,1,8]));
console.log('5)', telefonoNumeris([9,5,8,6,5,4,'7',1,2,1,8]));
console.log('6)', telefonoNumeris([9,5,8,6,5,4,'7',1,2,1]));
console.log('7)', telefonoNumeris([9,5,8,6,5,4,7,1,2,1]));

// 9.
console.log('9)---------------------------');

function textLength (text1, text2) {
    if (typeof(text1) === 'string' & typeof(text2) === 'string') {
        text1Symbols = text1.replace(/ /g, '').length;
        text2Symbols = text2.replace(/ /g, '').length;
    }
    if (text1Symbols > text2Symbols) {
        console.log(`Pirmas tekstas turi daugiau simboliu (${text1Symbols}) nei antras (${text2Symbols}).`);
    } else if (text1Symbols < text2Symbols) {
        console.log(`Antras tekstas turi daugiau simboliu (${text2Symbols}) nei pirmas (${text1Symbols}).`);
    } else {
        console.log(`Abieju tekstu ilgis yra vienodas (${text2Symbols} simb.).`);
    }
}

textLength('pirmo teksto ilgis simboliais', 'antro teksto ilgis simb.');

// 10.
console.log('10)---------------------------');

function raidesA (tekstas) {
    if (typeof(tekstas) === 'string')
    visosAraides = tekstas.match(/a/gi).length; 
    return visosAraides
}

console.log(raidesA('Labas rytas! Sako tau kavos puodukas!'));

console.log('6) tobulesnis variantas---------------------->');

function skaiciuKiekis (skaicius) {
    let skaiciai = '';
    let ciklai = 0;
    for (i = 2; i < skaicius; i++) {
        if (skaicius % i === 0 ) {
        skaiciai += i + ', ';
        ciklai++
        }
    }
    console.log(`Is ${skaicius} dalijasi ${ciklai} sveiki skaiciai: ${skaiciai}`); 
}
skaiciuKiekis(70);
