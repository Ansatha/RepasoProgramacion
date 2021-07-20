"use strict";
exports.__esModule = true;
exports.thereIsAnyEven = void 0;
function thereIsAnyEven(arrayIn) {
    var arrayInIndex = 0;
    while (arrayInIndex < arrayIn.length && arrayIn[arrayInIndex] % 2 !== 0) {
        arrayInIndex++;
    }
    ;
    return (arrayInIndex < arrayIn.length ? true : false);
}
exports.thereIsAnyEven = thereIsAnyEven;
;
