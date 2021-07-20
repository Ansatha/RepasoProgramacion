"use strict";
exports.__esModule = true;
exports.colorIsInRainbow = void 0;
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
                console.log('\n\x1b[' + rainbowColors[color] + 'm%s\x1b[0m', subString);
                isColor = true;
            }
            ;
        }
        ;
        if (!isColor) {
            var subString = 'El color \'' + arrayIn[index] + '\' NO está en el arcoiris.';
            console.log('\n\x1b[7m%s\x1b[0m', subString);
        }
        ;
    }
    ;
}
exports.colorIsInRainbow = colorIsInRainbow;
;
