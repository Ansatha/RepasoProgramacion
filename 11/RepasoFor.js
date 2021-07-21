//PUNTO 4.===========================================================================
function printYarraFromarraY(arrayIn) {
    var arrayOut = [];
    for (var arrayInIndex = 0; arrayInIndex < arrayIn.length; arrayInIndex++) {
        arrayOut.push(arrayIn[arrayIn.length - (arrayInIndex + 1)]);
    }
    ;
    return arrayOut;
}
;
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */
console.log('\n\n\x1b[35m%s\x1b[0m', '4º RETO TEST.');
console.log('\x1b[36m%s\x1b[0m', 'Ejemplo 1:');
var array = [1, "dos", [3], "4"];
console.log('Dado el array:\n', array, '\nSu inverso es:\n', printYarraFromarraY(array), '\n');
//FIN PUNTO 4.=======================================================================
//PUNTO 8.===========================================================================
function sumLettersFromArray(arrayIn) {
    var sum = 0;
    for (var word in arrayIn) {
        sum += arrayIn[word].length;
    }
    ;
    return sum;
}
;
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */
console.log('\n\x1b[35m%s\x1b[0m', '8º RETO TEST.');
console.log('\x1b[36m%s\x1b[0m', 'Ejemplo 1:');
var arrayF = ['Bienvenido', 'al', 'desierto', 'de', 'lo', 'real.'];
console.log('El siguiente array:\n', arrayF, '\nTiene:', sumLettersFromArray(arrayF), 'carácteres.\n');
//FIN PUNTO 8.=======================================================================
