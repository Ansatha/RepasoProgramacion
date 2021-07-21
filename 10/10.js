//PUNTO 10.===========================================================================
function oddsVsEvens(numIn) {
    console.log('El numero', numIn, numIn % 2 === 0 ? 'es par' : 'es impar');
}
;
function sumLettersFromArray(arrayIn) {
    var sum = 0;
    for (var word in arrayIn) {
        sum += arrayIn[word].length;
    }
    ;
    return sum;
}
;
/*                         ↑↑↑  FUNCTIONS  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */
var cNames = ['Casa', 'Coche', 'Ciudad', 'Cesta'];
var bNames = ['Barco', 'Baca', 'Bicicleta', 'Balon', 'Bisiesto', 'Brasil'];
var vNames = ['Venezuela', 'Veneno', 'Voltaje'];
console.log('\n\n\x1b[35m%s\x1b[0m', '10º RETO TEST.');
console.log('\x1b[36m%s\x1b[0m', 'Ejemplo 1:');
oddsVsEvens(sumLettersFromArray(cNames));
console.log('\n\x1b[36m%s\x1b[0m', 'Ejemplo 2:');
oddsVsEvens(sumLettersFromArray(bNames));
console.log('\n\x1b[36m%s\x1b[0m', 'Ejemplo 3:');
oddsVsEvens(sumLettersFromArray(vNames));
console.log();
//FIN PUNTO 10.=======================================================================
