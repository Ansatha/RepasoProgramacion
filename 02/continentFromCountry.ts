export function continentFromCountry(countryIn:string):void
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