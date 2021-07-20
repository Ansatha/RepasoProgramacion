export function continentFromCountry(countryIn:string):void
{   
    let where:string;
    const continents = {
        'Europa' : ['España', 'Portugal', 'Holanda', 'Suiza', 'Rumania'],
        'Africa' : ['Marruecos', 'Egipto', 'Sudafrica', 'Zaire', 'Congo'],
        'Asia'   : ['Japon', 'China', 'India', 'Tailandia', 'Vietnam'],
        'America': ['EEUU', 'Argentina', 'Brasil', 'Chile', 'Cuba'],
        'Oceania': ['Australia', 'Fiji', 'Samoa', 'Kiribati', 'Tonga']
    };

    let continentFound:boolean = false;
    for (let continent in continents)
    {
        continents[continent].forEach(country => {
            if (country == countryIn)
            {
                console.log(continent);
                continentFound = true;
            };
        });
    };
    !continentFound ? console.log('\nError:\n\'' + countryIn + '\' no esta incluido en las listas.\nElige otro país.\n') :"";
};