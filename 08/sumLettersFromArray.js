"use strict";
exports.__esModule = true;
exports.sumLettersFromArray = void 0;
function sumLettersFromArray(arrayIn) {
    var sum = 0;
    for (var word in arrayIn) {
        sum += arrayIn[word].length;
    }
    ;
    return sum;
}
exports.sumLettersFromArray = sumLettersFromArray;
;
