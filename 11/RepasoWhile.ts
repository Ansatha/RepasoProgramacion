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

let fecha0:string = "January 20";
let fecha:Date = new Date(fecha0);
console.log('\nSi has nacido en la fecha:', fecha0, 'eres', fechaToZodiaco(fecha)+'.');

let fecha1:string = "October 21";
let fecha2:Date = new Date(fecha1);
console.log('\nSi has nacido en la fecha:', fecha1, 'eres', fechaToZodiaco(fecha2)+'.\n');

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
    console.log('\n\x1b[31m%s\x1b[0m','Error:', '\n\'' + countryIn + '\' no está incluido en las listas.\nElige otro país.\n');
};

/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */

let country1:string = "España";
console.log('Ejemplo 1:');
continentFromCountry(country1);

let country2:string = "Toga";
console.log('Ejemplo 2:');
continentFromCountry(country2);
//FIN PUNTO 2.=======================================================================



//PUNTO 3.===========================================================================
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */

//FIN PUNTO 3.=======================================================================