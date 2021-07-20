"use strict";
exports.__esModule = true;
var fechaToZodiaco_1 = require("./fechaToZodiaco");
var fecha0 = "January 20";
var fecha = new Date(fecha0);
console.log('\nSi has nacido en la fecha:', fecha0, 'eres', fechaToZodiaco_1.fechaToZodiaco(fecha) + '.');
var fecha1 = "October 21";
var fecha2 = new Date(fecha1);
console.log('\nSi has nacido en la fecha:', fecha1, 'eres', fechaToZodiaco_1.fechaToZodiaco(fecha2) + '.\n');
