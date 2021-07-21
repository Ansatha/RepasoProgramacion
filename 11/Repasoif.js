//PUNTO 5.===========================================================================
function colorIsInRainbow(arrayIn) {
    var rainbowColors = {
        'ROJO': '41',
        'NARANJA': '10',
        'AMARILLO': '43',
        'VERDE': '42',
        'CELESTE': '10',
        'AÑIL': '44',
        'VIOLETA': '45'
    };
    var colorItemCheck = [];
    for (var index in arrayIn) {
        var isColor = false;
        for (var color in rainbowColors) {
            if (arrayIn[index].toUpperCase() === color) {
                var subString = 'El color \'' + arrayIn[index] + '\' SI está en el arcoiris.';
                console.log('\x1b[' + rainbowColors[color] + 'm%s\x1b[0m', subString);
                isColor = true;
            }
            ;
        }
        ;
        if (!isColor) {
            var subString = 'El color \'' + arrayIn[index] + '\' NO está en el arcoiris.';
            console.log('\x1b[7m%s\x1b[0m', subString);
        }
        ;
    }
    ;
}
;
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */
console.log('\n\n\x1b[35m%s\x1b[0m', '5º RETO TEST.');
console.log('\n\x1b[36m%s\x1b[0m', 'Ejemplo 1:');
var arrayColores = ['verde', 'marron', 'amarillo', 'piedra', 'añil', 'rojo', 'rosa', 'violeta'];
colorIsInRainbow(arrayColores);
//FIN PUNTO 5.=======================================================================
//PUNTO 9.===========================================================================
function oddVsEven(numIn) {
    console.log('El numero', numIn, numIn % 2 === 0 ? 'es par' : 'es impar');
}
;
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */
console.log('\n\n\x1b[35m%s\x1b[0m', '9º RETO TEST.');
console.log('\n\x1b[36m%s\x1b[0m', 'Ejemplo 1:');
var numA = 20;
oddVsEven(numA);
console.log('\n\x1b[36m%s\x1b[0m', 'Ejemplo 2:');
var numB = 21;
oddVsEven(numB);
//FIN PUNTO 4.=======================================================================
