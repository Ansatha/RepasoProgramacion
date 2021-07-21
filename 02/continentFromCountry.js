"use strict";
exports.__esModule = true;
exports.continentFromCountry = void 0;
function continentFromCountry(countryIn) {
    var whatContinent;
    var continentsCountry = {
        'Europa': ['España', 'Portugal', 'Holanda', 'Suiza', 'Rumania'],
        'Africa': ['Marruecos', 'Egipto', 'Sudafrica', 'Zaire', 'Congo'],
        'Asia': ['Japon', 'China', 'India', 'Tailandia', 'Vietnam'],
        'America': ['EEUU', 'Argentina', 'Brasil', 'Chile', 'Cuba'],
        'Oceania': ['Australia', 'Fiji', 'Samoa', 'Kiribati', 'Tonga']
    };
    var continents = ['Europa', 'Africa', 'Asia', 'America', 'Oceania'];
    var indexContinents = 0;
    var continentFound = false;
    var checkCountry;
    while (indexContinents < continents.length && continentFound == false) {
        var indexCountry = 0;
        while (indexCountry < continentsCountry[continents[indexContinents]].length && continentFound == false) {
            whatContinent = continents[indexContinents];
            checkCountry = continentsCountry[whatContinent][indexCountry];
            continentFound = (checkCountry === countryIn ? true : false);
            indexCountry++;
        }
        ;
        indexContinents++;
    }
    ;
    continentFound ? console.log('El país', countryIn, 'está en', whatContinent + '.\n') :
        console.log('\n\x1b[31m%s\x1b[0m', 'Error:', '\n\'' + countryIn + '\' no está incluido en las listas.\nElige otro país.\n');
}
exports.continentFromCountry = continentFromCountry;
;
