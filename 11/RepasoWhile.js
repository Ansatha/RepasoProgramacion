"use strict";
exports.__esModule = true;
exports.fechaToZodiaco = void 0;
//PUNTO 1.===========================================================================
function fechaToZodiaco(fecha) {
    var tablaZodiaco = {
        'Capricornio': [new Date(1981, 11, 22), new Date(1982, 0, 19)],
        'Acuario': [new Date(1982, 0, 20), new Date(1982, 1, 18)],
        'Piscis': [new Date(1982, 1, 19), new Date(1982, 2, 20)],
        'Aries': [new Date(1982, 2, 21), new Date(1982, 3, 19)],
        'Tauro': [new Date(1982, 3, 20), new Date(1982, 4, 21)],
        'Géminis': [new Date(1982, 4, 22), new Date(1982, 5, 20)],
        'Cáncer': [new Date(1982, 5, 21), new Date(1982, 6, 22)],
        'Leo': [new Date(1982, 6, 23), new Date(1982, 7, 22)],
        'Virgo': [new Date(1982, 7, 23), new Date(1982, 8, 22)],
        'Libra': [new Date(1982, 8, 23), new Date(1982, 9, 22)],
        'Escorpio': [new Date(1982, 9, 23), new Date(1982, 10, 22)],
        'Sagitario': [new Date(1982, 10, 23), new Date(1982, 11, 21)]
    };
    var signos = ['Capricornio', 'Acuario', 'Piscis', 'Aries',
        'Tauro', 'Géminis', 'Cáncer', 'Leo', 'Virgo', 'Libra', 'Escorpio', 'Sagitario'];
    var mes = fecha.getMonth();
    var dia = fecha.getDate();
    var index = 0;
    while (index < signos.length &&
        (!(tablaZodiaco[signos[index]][0].getMonth() === mes && tablaZodiaco[signos[index]][0].getDate() <= dia) &&
            !(tablaZodiaco[signos[index]][1].getMonth() === mes && tablaZodiaco[signos[index]][1].getDate() >= dia))) {
        index++;
    }
    ;
    return signos[index];
}
exports.fechaToZodiaco = fechaToZodiaco;
;
var fecha0 = "January 20";
var fecha = new Date(fecha0);
console.log('\nSi has nacido en la fecha:', fecha0, 'eres', fechaToZodiaco(fecha) + '.');
var fecha1 = "October 21";
var fecha2 = new Date(fecha1);
console.log('\nSi has nacido en la fecha:', fecha1, 'eres', fechaToZodiaco(fecha2) + '.\n');
//FIN PUNTO 1.=======================================================================
//PUNTO 2.===========================================================================
//FIN PUNTO 2.=======================================================================
//PUNTO 2.===========================================================================
//FIN PUNTO 2.=======================================================================
