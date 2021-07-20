"use strict";
exports.__esModule = true;
exports.printYarraFromarraY = void 0;
function printYarraFromarraY(arrayIn) {
    var arrayOut = [];
    for (var arrayInIndex = 0; arrayInIndex < arrayIn.length; arrayInIndex++) {
        arrayOut.push(arrayIn[arrayIn.length - (arrayInIndex + 1)]);
    }
    ;
    return arrayOut;
}
exports.printYarraFromarraY = printYarraFromarraY;
;
