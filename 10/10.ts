import { sumLettersFromArray } from '../08/sumLettersFromArray';
import { oddVsEven } from '../09/oddVsEven';

const cNames:string[] = ['Casa', 'Coche', 'Ciudad', 'Cesta'];
const bNames:string[] = ['Barco', 'Baca', 'Bicicleta', 'Balon', 'Bisiesto', 'Brasil'];
const vNames:string[] = ['Venezuela', 'Veneno', 'Voltaje'];

oddVsEven(sumLettersFromArray(cNames));
oddVsEven(sumLettersFromArray(bNames));
oddVsEven(sumLettersFromArray(vNames));
console.log();