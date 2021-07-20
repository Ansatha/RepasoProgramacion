import { fechaToZodiaco } from "./fechaToZodiaco";

let fecha0:string = "January 20";
let fecha:Date = new Date(fecha0);
console.log('\nSi has nacido en la fecha:', fecha0, 'eres', fechaToZodiaco(fecha)+'.');

let fecha1:string = "October 21";
let fecha2:Date = new Date(fecha1);
console.log('\nSi has nacido en la fecha:', fecha1, 'eres', fechaToZodiaco(fecha2)+'.\n');