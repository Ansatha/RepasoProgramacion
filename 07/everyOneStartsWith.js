"use strict";
exports.__esModule = true;
exports.everyOneStartsWith = void 0;
function everyOneStartsWith(arrayIn) {
    var arrayInIndex = 0;
    while (arrayInIndex < arrayIn.length && arrayIn[arrayInIndex][0] === 'M') {
        arrayInIndex++;
    }
    ;
    return (arrayInIndex == arrayIn.length ? true : false);
}
exports.everyOneStartsWith = everyOneStartsWith;
;
