//PUNTO 1.===========================================================================
function fechaToZodiaco(fecha:Date):string
{   
    let tablaZodiaco = {
        'Capricornio':  [new Date(1981,11,22), new Date(1982,0,19)],
        'Acuario':      [new Date(1982,0,20), new Date(1982,1,18)],
        'Piscis':       [new Date(1982,1,19), new Date(1982,2,20)],
        'Aries':        [new Date(1982,2,21), new Date(1982,3,19)],
        'Tauro':        [new Date(1982,3,20), new Date(1982,4,21)],
        'Géminis':      [new Date(1982,4,22), new Date(1982,5,20)],
        'Cáncer':       [new Date(1982,5,21), new Date(1982,6,22)],
        'Leo':          [new Date(1982,6,23), new Date(1982,7,22)],
        'Virgo':        [new Date(1982,7,23), new Date(1982,8,22)],
        'Libra':        [new Date(1982,8,23), new Date(1982,9,22)],
        'Escorpio':     [new Date(1982,9,23), new Date(1982,10,22)],
        'Sagitario':    [new Date(1982,10,23), new Date(1982,11,21)]
    };
    let signos:string[] = ['Capricornio', 'Acuario', 'Piscis', 'Aries',
                           'Tauro', 'Géminis', 'Cáncer', 'Leo' , 'Virgo', 'Libra', 'Escorpio', 'Sagitario'];
    
    let mes:number = fecha.getMonth();
    let dia:number = fecha.getDate();

    let index:number = 0;
    while (index < signos.length &&
        (!(tablaZodiaco[signos[index]][0].getMonth() === mes && tablaZodiaco[signos[index]][0].getDate() <= dia) &&
        !(tablaZodiaco[signos[index]][1].getMonth() === mes && tablaZodiaco[signos[index]][1].getDate() >= dia)))
    {  
        index++;
    };  
    return signos[index];
};
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */

console.log('\n\x1b[35m%s\x1b[0m','1º RETO TEST.')
console.log('\x1b[36m%s\x1b[0m','Ejemplo 1:');
let fecha0:string = "January 20";
let fecha:Date = new Date(fecha0);
console.log('Si has nacido en la fecha:', fecha0, 'eres', fechaToZodiaco(fecha)+'.');

console.log('\n\x1b[36m%s\x1b[0m','Ejemplo 2:');
let fecha1:string = "October 21";
let fecha2:Date = new Date(fecha1);
console.log('Si has nacido en la fecha:', fecha1, 'eres', fechaToZodiaco(fecha2)+'.\n');

//FIN PUNTO 1.=======================================================================




//PUNTO 2.===========================================================================
function continentFromCountry(countryIn:string):void
{   
    let whatContinent:string;
    const continentsCountry = {
        'Europa' : ['España', 'Portugal', 'Holanda', 'Suiza', 'Rumania'],
        'Africa' : ['Marruecos', 'Egipto', 'Sudafrica', 'Zaire', 'Congo'],
        'Asia'   : ['Japon', 'China', 'India', 'Tailandia', 'Vietnam'],
        'America': ['EEUU', 'Argentina', 'Brasil', 'Chile', 'Cuba'],
        'Oceania': ['Australia', 'Fiji', 'Samoa', 'Kiribati', 'Tonga']
    };
    let continents:string[] = ['Europa', 'Africa', 'Asia', 'America', 'Oceania'];

    let indexContinents:number = 0;
    let continentFound:boolean = false;
    let checkCountry:string;
    while (indexContinents < continents.length && continentFound == false)
    {   
        let indexCountry:number = 0;
        while (indexCountry < continentsCountry[continents[indexContinents]].length && continentFound == false)
        {
            whatContinent = continents[indexContinents];
            checkCountry = continentsCountry[whatContinent][indexCountry];
            continentFound = (checkCountry === countryIn ? true : false);
            indexCountry++;   
        };
        indexContinents++;
    };
    continentFound ? console.log('El país', countryIn, 'está en', whatContinent + '.\n') :
    console.log('\x1b[41m%s\x1b[0m','Error:', '\n\'' + countryIn + '\' no está incluido en las listas.\nElige otro país.\n');
};

/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */
console.log('\n\n\x1b[35m%s\x1b[0m','2º RETO TEST.')
let country1:string = "España";
console.log('\x1b[36m%s\x1b[0m','Ejemplo 1:');
continentFromCountry(country1);

let country2:string = "Toga";
console.log('\x1b[36m%s\x1b[0m','Ejemplo 2:');
continentFromCountry(country2);
//FIN PUNTO 2.=======================================================================




//PUNTO 3.===========================================================================
function printOdds(limitNum:any):void
{
    if(typeof limitNum !== 'number' || limitNum <= 0)
    {
        typeof limitNum !== 'number' ? console.log('\x1b[41m%s\x1b[0m','Error 01:', '\n\'' + limitNum + ' \' no es un valor aceptado.\n' + 'Prueba de nuevo con un valor númerico mayor que 0.') : "";
        limitNum <= 0 ? console.log('\x1b[41m%s\x1b[0m','Error 02:', '\n\'' + limitNum + ' \' no es un valor aceptado.\n' + 'Prueba de nuevo con un valor mayor que 0') : "";
    }
    else
    {
        let initNum:number = 0;
        let oddsList:string = "";
        do
        {
            oddsList += (initNum % 2 !== 0 ? initNum.toString() + " " : "");
            initNum++;
        }
        while (initNum <= limitNum);
        console.log('Esta es la lista de numeros impares de 0 a',limitNum + ':\n' + oddsList);
    };
};
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */

console.log('\n\n\x1b[35m%s\x1b[0m','3º RETO TEST.')
console.log('\x1b[36m%s\x1b[0m','Ejemplo 1:');
let num1:any = 31;
printOdds(num1);

console.log('\n\x1b[36m%s\x1b[0m','Ejemplo 2:');
let num2:any = 12;
printOdds(num2);

console.log('\n\x1b[36m%s\x1b[0m','Ejemplo 3:');
let num3:any = -10;
printOdds(num3);

console.log('\n\x1b[36m%s\x1b[0m','Ejemplo 4:');
let num4:any = 'Hola';
printOdds(num4);
//FIN PUNTO 3.=======================================================================




//PUNTO 6.===========================================================================
function thereIsAnyEven(arrayIn:number[]):boolean
{
    let arrayInIndex:number = 0;
    while (arrayInIndex < arrayIn.length && arrayIn[arrayInIndex] % 2 !== 0)
    {
        arrayInIndex++;
    };
    return (arrayInIndex < arrayIn.length ? true : false)
};
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */

console.log('\n\n\x1b[35m%s\x1b[0m','6º RETO TEST.')
console.log('\x1b[36m%s\x1b[0m','Ejemplo 1:');
let arrayA:number[] = [1, 3, 5, 7, 9, 11];
console.log('En el siguiente array:\n', arrayA, '\nHay algún numero par?: ', thereIsAnyEven(arrayA));

console.log('\n\x1b[36m%s\x1b[0m','Ejemplo 2:');
let arrayB:number[] = [1, 2, 5, 7, 9, 11];
console.log('En el siguiente array:\n', arrayB, '\nHay algún numero par?: ', thereIsAnyEven(arrayB),'\n');
//FIN PUNTO 6.=======================================================================




//PUNTO 7.===========================================================================
function everyOneStartsWith(arrayIn:string[]):boolean
{
    let arrayInIndex:number = 0;
    while (arrayInIndex < arrayIn.length && arrayIn[arrayInIndex][0] === 'M')
    {
        arrayInIndex++;
    };
    return (arrayInIndex == arrayIn.length ? true : false)
};
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */

console.log('\n\n\x1b[35m%s\x1b[0m','7º RETO TEST.')
console.log('\x1b[36m%s\x1b[0m','Ejemplo 1:');
let arrayC:string[] = ['Monica', 'Manuel', 'Miguel', 'Montse'];
console.log('En el siguiente array:\n', arrayC, '\nTodos los nombres empiezan por \'M\'?: ', everyOneStartsWith(arrayC),'\n');

console.log('\x1b[36m%s\x1b[0m','Ejemplo 2:');
let arrayD:string[] = ['monica', 'Manuel', 'Miguel', 'Montse'];
console.log('En el siguiente array:\n', arrayD, '\nTodos los nombres empiezan por \'M\'?: ', everyOneStartsWith(arrayD),'\n');

console.log('\x1b[36m%s\x1b[0m','Ejemplo 3:');
let arrayE:string[] = ['Lorena', 'Manuel', 'Miguel', 'Montse'];
console.log('En el siguiente array:\n', arrayE, '\nTodos los nombres empiezan por \'M\'?: ', everyOneStartsWith(arrayE),'\n');
//FIN PUNTO 7.=======================================================================