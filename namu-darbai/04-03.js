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

    if (typeof(numeris) !== 'number' || numeris === '') {
        console.log('Prasau iveskite tiktai skaitmenis.');
    }
    if (typeof(numeris) !== 'string') {
        numeris = numeris.toString();
    }
    if (numeris.length === 10) {
        console.log(numeris.replace(/(\d{3})(\d{3})(\d{4})/, '($1)$2-$3'));
    } else if (numeris < 10 || numeris > 10) {
        console.log('Iveskite 10 skaitmenu numeri.');
    }
}

telefonoNumeris(1234567890);

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