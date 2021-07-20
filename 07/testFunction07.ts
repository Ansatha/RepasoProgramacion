import { everyOneStartsWith } from "./everyOneStartsWith";

let array:string[] = ['Monica', 'Manuel', 'Miguel', 'Montse'];
console.log('\nEn el siguiente array:\n', array, '\nTodos los nombres empiezan por \'M\'?: ', everyOneStartsWith(array),'\n');

let array1:string[] = ['monica', 'Manuel', 'Miguel', 'Montse'];
console.log('\nEn el siguiente array:\n', array1, '\nTodos los nombres empiezan por \'M\'?: ', everyOneStartsWith(array1),'\n');

let array2:string[] = ['Lorena', 'Manuel', 'Miguel', 'Montse'];
console.log('\nEn el siguiente array:\n', array2, '\nTodos los nombres empiezan por \'M\'?: ', everyOneStartsWith(array2),'\n');