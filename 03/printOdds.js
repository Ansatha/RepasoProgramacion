"use strict";
exports.__esModule = true;
exports.printOdds = void 0;
function printOdds(limitNum) {
    if (typeof limitNum !== 'number' || limitNum <= 0) {
        typeof limitNum !== 'number' ? console.log('\n\x1b[31m%s\x1b[0m', '\nError 01:\n', '\'' + limitNum + ' \' no es un valor aceptado.\n' + 'Prueba de nuevo con un valor númerico mayor que 0.') : "";
        limitNum <= 0 ? console.log('\n\x1b[31m%s\x1b[0m', '\nError 02:\n', '\'' + limitNum + ' \' no es un valor aceptado.\n' + 'Prueba de nuevo con un valor mayor que 0') : "";
    }
    else {
        var initNum = 0;
        var oddsList = "";
        do {
            oddsList += (initNum % 2 !== 0 ? initNum.toString() + " " : "");
            initNum++;
        } while (initNum <= limitNum);
        console.log('\nEsta es la lista de numeros impares de 0 a', limitNum + ':\n' + oddsList);
    }
    ;
}
exports.printOdds = printOdds;
;
