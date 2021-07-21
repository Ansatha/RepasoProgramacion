//PUNTO 1.===========================================================================
function fechaToZodiaco(fecha) {
    var tablaZodiaco = {
        'Capricornio': [new Date(1981, 11, 22), new Date(1982, 0, 19)],
        'Acuario': [new Date(1982, 0, 20), new Date(1982, 1, 18)],
        'Piscis': [new Date(1982, 1, 19), new Date(1982, 2, 20)],
        'Aries': [new Date(1982, 2, 21), new Date(1982, 3, 19)],
        'Tauro': [new Date(1982, 3, 20), new Date(1982, 4, 21)],
        'Géminis': [new Date(1982, 4, 22), new Date(1982, 5, 20)],
        'Cáncer': [new Date(1982, 5, 21), new Date(1982, 6, 22)],
        'Leo': [new Date(1982, 6, 23), new Date(1982, 7, 22)],
        'Virgo': [new Date(1982, 7, 23), new Date(1982, 8, 22)],
        'Libra': [new Date(1982, 8, 23), new Date(1982, 9, 22)],
        'Escorpio': [new Date(1982, 9, 23), new Date(1982, 10, 22)],
        'Sagitario': [new Date(1982, 10, 23), new Date(1982, 11, 21)]
    };
    var signos = ['Capricornio', 'Acuario', 'Piscis', 'Aries',
        'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario'];
    var mes = fecha.getMonth();
    var dia = fecha.getDate();
    var index = 0;
    while (index < signos.length &&
        (!(tablaZodiaco[signos[index]][0].getMonth() === mes && tablaZodiaco[signos[index]][0].getDate() <= dia) &&
            !(tablaZodiaco[signos[index]][1].getMonth() === mes && tablaZodiaco[signos[index]][1].getDate() >= dia))) {
        index++;
    }
    ;
    return signos[index];
}
;
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */
console.log('\n\x1b[35m%s\x1b[0m', '1º RETO TEST.');
console.log('\x1b[36m%s\x1b[0m', 'Ejemplo 1:');
var fecha0 = "January 20";
var fecha = new Date(fecha0);
console.log('Si has nacido en la fecha:', fecha0, 'eres', fechaToZodiaco(fecha) + '.');
console.log('\n\x1b[36m%s\x1b[0m', 'Ejemplo 2:');
var fecha1 = "October 21";
var fecha2 = new Date(fecha1);
console.log('Si has nacido en la fecha:', fecha1, 'eres', fechaToZodiaco(fecha2) + '.\n');
//FIN PUNTO 1.=======================================================================
//PUNTO 2.===========================================================================
function continentFromCountry(countryIn) {
    var whatContinent;
    var continentsCountry = {
        'Europa': ['España', 'Portugal', 'Holanda', 'Suiza', 'Rumania'],
        'Africa': ['Marruecos', 'Egipto', 'Sudafrica', 'Zaire', 'Congo'],
        'Asia': ['Japon', 'China', 'India', 'Tailandia', 'Vietnam'],
        'America': ['EEUU', 'Argentina', 'Brasil', 'Chile', 'Cuba'],
        'Oceania': ['Australia', 'Fiji', 'Samoa', 'Kiribati', 'Tonga']
    };
    var continents = ['Europa', 'Africa', 'Asia', 'America', 'Oceania'];
    var indexContinents = 0;
    var continentFound = false;
    var checkCountry;
    while (indexContinents < continents.length && continentFound == false) {
        var indexCountry = 0;
        while (indexCountry < continentsCountry[continents[indexContinents]].length && continentFound == false) {
            whatContinent = continents[indexContinents];
            checkCountry = continentsCountry[whatContinent][indexCountry];
            continentFound = (checkCountry === countryIn ? true : false);
            indexCountry++;
        }
        ;
        indexContinents++;
    }
    ;
    continentFound ? console.log('El país', countryIn, 'está en', whatContinent + '.\n') :
        console.log('\x1b[41m%s\x1b[0m', 'Error:', '\n\'' + countryIn + '\' no está incluido en las listas.\nElige otro país.\n');
}
;
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */
console.log('\n\n\x1b[35m%s\x1b[0m', '2º RETO TEST.');
var country1 = "España";
console.log('\x1b[36m%s\x1b[0m', 'Ejemplo 1:');
continentFromCountry(country1);
var country2 = "Toga";
console.log('\x1b[36m%s\x1b[0m', 'Ejemplo 2:');
continentFromCountry(country2);
//FIN PUNTO 2.=======================================================================
//PUNTO 3.===========================================================================
function printOdds(limitNum) {
    if (typeof limitNum !== 'number' || limitNum <= 0) {
        typeof limitNum !== 'number' ? console.log('\x1b[41m%s\x1b[0m', 'Error 01:', '\n\'' + limitNum + ' \' no es un valor aceptado.\n' + 'Prueba de nuevo con un valor númerico mayor que 0.') : "";
        limitNum <= 0 ? console.log('\x1b[41m%s\x1b[0m', 'Error 02:', '\n\'' + limitNum + ' \' no es un valor aceptado.\n' + 'Prueba de nuevo con un valor mayor que 0') : "";
    }
    else {
        var initNum = 0;
        var oddsList = "";
        do {
            oddsList += (initNum % 2 !== 0 ? initNum.toString() + " " : "");
            initNum++;
        } while (initNum <= limitNum);
        console.log('Esta es la lista de numeros impares de 0 a', limitNum + ':\n' + oddsList);
    }
    ;
}
;
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */
console.log('\n\n\x1b[35m%s\x1b[0m', '3º RETO TEST.');
console.log('\x1b[36m%s\x1b[0m', 'Ejemplo 1:');
var num1 = 31;
printOdds(num1);
console.log('\n\x1b[36m%s\x1b[0m', 'Ejemplo 2:');
var num2 = 12;
printOdds(num2);
console.log('\n\x1b[36m%s\x1b[0m', 'Ejemplo 3:');
var num3 = -10;
printOdds(num3);
console.log('\n\x1b[36m%s\x1b[0m', 'Ejemplo 4:');
var num4 = 'Hola';
printOdds(num4);
//FIN PUNTO 3.=======================================================================
//PUNTO 6.===========================================================================
function thereIsAnyEven(arrayIn) {
    var arrayInIndex = 0;
    while (arrayInIndex < arrayIn.length && arrayIn[arrayInIndex] % 2 !== 0) {
        arrayInIndex++;
    }
    ;
    return (arrayInIndex < arrayIn.length ? true : false);
}
;
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */
console.log('\n\n\x1b[35m%s\x1b[0m', '6º RETO TEST.');
console.log('\x1b[36m%s\x1b[0m', 'Ejemplo 1:');
var arrayA = [1, 3, 5, 7, 9, 11];
console.log('En el siguiente array:\n', arrayA, '\nHay algún numero par?: ', thereIsAnyEven(arrayA));
console.log('\n\x1b[36m%s\x1b[0m', 'Ejemplo 2:');
var arrayB = [1, 2, 5, 7, 9, 11];
console.log('En el siguiente array:\n', arrayB, '\nHay algún numero par?: ', thereIsAnyEven(arrayB), '\n');
//FIN PUNTO 6.=======================================================================
//PUNTO 7.===========================================================================
function everyOneStartsWith(arrayIn) {
    var arrayInIndex = 0;
    while (arrayInIndex < arrayIn.length && arrayIn[arrayInIndex][0] === 'M') {
        arrayInIndex++;
    }
    ;
    return (arrayInIndex == arrayIn.length ? true : false);
}
;
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */
console.log('\n\n\x1b[35m%s\x1b[0m', '7º RETO TEST.');
console.log('\x1b[36m%s\x1b[0m', 'Ejemplo 1:');
var arrayC = ['Monica', 'Manuel', 'Miguel', 'Montse'];
console.log('En el siguiente array:\n', arrayC, '\nTodos los nombres empiezan por \'M\'?: ', everyOneStartsWith(arrayC), '\n');
console.log('\x1b[36m%s\x1b[0m', 'Ejemplo 2:');
var arrayD = ['monica', 'Manuel', 'Miguel', 'Montse'];
console.log('En el siguiente array:\n', arrayD, '\nTodos los nombres empiezan por \'M\'?: ', everyOneStartsWith(arrayD), '\n');
console.log('\x1b[36m%s\x1b[0m', 'Ejemplo 3:');
var arrayE = ['Lorena', 'Manuel', 'Miguel', 'Montse'];
console.log('En el siguiente array:\n', arrayE, '\nTodos los nombres empiezan por \'M\'?: ', everyOneStartsWith(arrayE), '\n');
//FIN PUNTO 7.=======================================================================
