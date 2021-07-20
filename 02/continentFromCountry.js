"use strict";
exports.__esModule = true;
exports.continentFromCountry = void 0;
function continentFromCountry(countryIn) {
    var where;
    var continents = {
        'Europa': ['España', 'Portugal', 'Holanda', 'Suiza', 'Rumania'],
        'Africa': ['Marruecos', 'Egipto', 'Sudafrica', 'Zaire', 'Congo'],
        'Asia': ['Japon', 'China', 'India', 'Tailandia', 'Vietnam'],
        'America': ['EEUU', 'Argentina', 'Brasil', 'Chile', 'Cuba'],
        'Oceania': ['Australia', 'Fiji', 'Samoa', 'Kiribati', 'Tonga']
    };
    var continentFound = false;
    var _loop_1 = function (continent) {
        continents[continent].forEach(function (country) {
            if (country == countryIn) {
                console.log(continent);
                continentFound = true;
            }
            ;
        });
    };
    for (var continent in continents) {
        _loop_1(continent);
    }
    ;
    !continentFound ? console.log('\nError:\n\'' + countryIn + '\' no esta incluido en las listas.\nElige otro país.\n') : "";
}
exports.continentFromCountry = continentFromCountry;
;
