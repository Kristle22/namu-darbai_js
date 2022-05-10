// 1.
console.log('1)---------------------------');

function suma(a, b) {
    return a + b;
}

console.log(suma(2, 6));

// 2.
console.log('2)---------------------------');

function lygybe(pirmas, antras) {
    if (pirmas > antras) {
        console.log('Pirmas skaicius didesnis.')
    } else if (pirmas < antras) {
        console.log('Antras skaicius didesnis.')
    } else {
        console.log('Abu skaiciai yra lygus.')
    }
}

lygybe(5, 3);

// 3.
console.log('3)---------------------------');

function kelMetai(metai) {
    if (metai % 4 || metai % 100 === 0 && metai % 400) {
        console.log('Metai yra paprastieji');
    } else {
        console.log('Metai yra keliamieji');
    }
}

kelMetai(800);

// 4.
console.log('4)---------------------------');

function kvadratas(number) {
    return number * number;
}

console.log(kvadratas(7));

// 5.
console.log('5)---------------------------');

function skaiciuSuma(skaicius) {
    if (skaicius <= 1) {
        console.log('Skaicius turi buti didesnis uz vieneta.')
    }
    let sum = 0;
    for (i = 1; i < skaicius + 1; i++) {
        sum += i;
    }
    return sum;
}

console.log(skaiciuSuma(9));

// 6.
console.log('6)---------------------------');

function skaiciuKiekis(skaicius) {
    let sveikiSkaiciai = [];
    for (i = 2; i < skaicius; i++) {
        if (skaicius % i === 0) {
            sveikiSkaiciai.push(i);
        }
    }

    console.log(`Is ${skaicius} dalijasi ${sveikiSkaiciai.length} sveiki skaiciai: ${sveikiSkaiciai}`);
}
skaiciuKiekis(70);

// 7.
console.log('7)---------------------------');

function tekstoIlgis(text) {
    if (typeof (text) === 'string') {
        // document.getElementById("").innerHTML = `Teksta "${text}" sudaro ${text.replace(/ /g, '').length} simb.`;
        console.log(`Teksta "${text}" sudaro ${text.replace(/ /g, '').length} simb.`);
    } else {
        console.log('Iveskite teksta.');
    }
}

tekstoIlgis('Mokslo saknys karcios, o vaisiai saldus');

// 8.
console.log('8)---------------------------');

function telefonoNumeris(numeris) {

    if (typeof (numeris) !== 'number' || !isFinite(numeris)) {
        console.log('Prasau iveskite tiktai skaitmenis.');
    }
    if (typeof (numeris) !== 'string') {
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

function telefonoNumeris(a) {
    if (!Array.isArray(a)) {
        return 'Kintamasis nėra masyvas';
    }
    if (a.length !== 10) {
        return 'Masyvas yra netinkamo ilgio';
    }
    for (let i = 0; i < 10; i++) {
        if (typeof a[i] !== 'number') {
            return 'Masyvo reikšmės turi būti skaičiai';
        }
    }
    return `(${a[0]}${a[1]}${a[2]}) ${a[3]}${a[4]}${a[5]}-${a[6]}${a[7]}${a[8]}${a[9]}`;
}

console.log('1)', telefonoNumeris(17));
console.log('2)', telefonoNumeris('asdasd'));
console.log('3)', telefonoNumeris([9, 5, 8, 6, 5, 4, 7, 1, 2]));
console.log('4)', telefonoNumeris([9, 5, 8, 6, 5, 4, 7, 1, 2, 1, 8]));
console.log('5)', telefonoNumeris([9, 5, 8, 6, 5, 4, '7', 1, 2, 1, 8]));
console.log('6)', telefonoNumeris([9, 5, 8, 6, 5, 4, '7', 1, 2, 1]));
console.log('7)', telefonoNumeris([9, 5, 8, 6, 5, 4, 7, 1, 2, 1]));

// 9.
console.log('9)---------------------------');

function textLength(text1, text2) {
    if (typeof (text1) === 'string' & typeof (text2) === 'string') {
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

function raidesA(tekstas) {
    if (typeof (tekstas) === 'string')
        visosAraides = tekstas.match(/a/gi).length;
    return visosAraides
}

console.log(raidesA('Labas rytas! Sako tau kavos puodukas!'));

console.log('6) tobulesnis variantas---------------------->');

function skaiciuKiekis(skaicius) {
    let skaiciai = '';
    let ciklai = 0;
    for (i = 2; i < skaicius; i++) {
        if (skaicius % i === 0) {
            skaiciai += i + ', ';
            ciklai++
        }
    }
    console.log(`Is ${skaicius} dalijasi ${ciklai} sveiki skaiciai: ${skaiciai}`);
}
skaiciuKiekis(70);

console.log('CODEWARS---------------------->');


// function arrayDiff(a, b) {
//     let newArr = [...a, ...b]
//     let filteredArr = [...new Set(newArr)];
//     return filteredArr;
// }

// console.log(arrayDiff([1, 2, 3], [1, 2]));

function arrayDiff(a, b) {
    return a.filter(n => !b.includes(n));
}

console.log(arrayDiff([1, 2, 3], [1, 2]));

function findOdd(A) {
    const mp = new Map();
    for (let i = 0; i < A.length; i++) {
        if (mp.has(A[i])) {
            mp.set(A[i], mp.get(A[i]) + 1);
        } else {
            mp.set(A[i], 1);
        }
    }
    const keys = [];
    mp.forEach((value, key) => {
        if (value % 2) {
            keys.push(key);
        }
    });
    return parseInt(keys);
}
console.log(findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]));

function findOdd(arr) {
    return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

function isValidWalk(walk) {
    if (walk.length != 10) {
        return false;
    }
    let countN = 0;
    let countS = 0;
    let countW = 0;
    let countE = 0;
    walk.forEach(value => {
        if (value == 'n') countN++;
        if (value == 's') countS++;
        if (value == 'w') countW++;
        if (value == 'e') countE++;
    });
    if (countN != countS || countW != countE) {
        return false;
    } else {
        return true;
    }
}

function isValidWalk(walk) {
    function count(val) {
        return walk.filter(function (a) { return a == val; }).length;
    }
    return walk.length == 10 && count('n') == count('s') && count('w') == count('e');
}

function isValidWalk(walk) {
    if (walk.length !== 10)
        return false;
    var dir = {
        n: 0,
        s: 0,
        w: 0,
        e: 0,
    }
    for (var i = 0; i < walk.length; i++) {
        dir[walk[i]]++;
    }

    if (dir["n"] !== dir["s"] || dir["w"] !== dir["e"])
        return false;
    else {
        return true;
    }
}
console.log(isValidWalk(['n', 'n', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));

function order(words) {
    const splitWords = words.split(' '); splitWords.sort((a, b) =>
        a.match(/\d/) - b.match(/\d/));

    return splitWords.join(' ');

}

console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

function likes(names) {
    if (names.length === 0) {
        return 'no one likes this'
    } else if (names.length === 1) {
        return `${names[0]} likes this`;
    } else if (names.length === 2) {
        return `${names[0]} and ${names[1]} like this`;
    } else if (names.length === 3) {
        return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
    }
}

console.log(likes(['Alex', 'Jacob', 'Mark', 'Max', 'John', 'Alex', 'Jacob', 'Mark', 'Max', 'John']));

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args); A
    }
}
let min = new SmallestIntegerFinder();
console.log(min.findSmallestInt([78, 56, 232, 12, 8]));

function sumArray(array) {
    if (!Array.isArray(array) || !array.length || array.length === 0 || array.length === 1) {
        return 0;
    } else {
        let max = Math.max(...array);
        let min = Math.min(...array);
        let sum = array.reduce((a, b) => a + b);
        return sum - max - min;
    }
}
console.log(sumArray([-6, -20, -1, -10, -12]));

sumArray = a => a ? a.sort((x, y) => x - y).slice(1, -1).reduce((s, e) => s + e, 0) : 0;

function solution(string) {

    let char = [];
    let joinSplit;
    let joined;
    let sliced = '';
    for (let i = 0; i < string.length; i++) {
        char.push(string[i]);
        if (string[i] === string[i].toUpperCase()) {
            char.push(' ');
            char.push(string[i]);
        } else {
            joined = string;
        }
        joinSplit = char.join('').split(' ');
    }
    for (let i = 0; i < joinSplit.length - 1; i++) {
        joinSplit[i].substring(0, joinSplit[i].length);
        sliced += joinSplit[i].slice(0, joinSplit[i].length - 1) + ' ';
        joined = sliced + joinSplit[joinSplit.length - 1];
    }
    return joined;
}
console.log(solution('camel'));

function solution(string) {
    string = string.split('').map(function (el) {
        if (el === el.toUpperCase()) {
            el = ' ' + el
        }
        return el
    })
    return string.join('')
}

const solution = string => {
    return [...string].map((char) => {
        return (char === char.toUpperCase()) ? ` ${char}` : char;
    }).join('');
}

function solution(string) {
    return string.replace(/[A-Z]/g, val => ' ' + val)
}
