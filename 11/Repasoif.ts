//PUNTO 5.===========================================================================
function colorIsInRainbow(arrayIn:string[]):void
{
    const rainbowColors = {
        'ROJO':     '41',
        'NARANJA':  '10',
        'AMARILLO': '43',
        'VERDE':    '42',
        'CELESTE':  '10',
        'AÑIL':     '44',
        'VIOLETA':  '45'
    };
    let colorItemCheck:boolean[] = [];
    for (let index in arrayIn)
    {
        let isColor:boolean = false;
        for (let color in rainbowColors)
        {
            if (arrayIn[index].toUpperCase() === color)
            {
                let subString:string = 'El color \'' + arrayIn[index] + '\' SI está en el arcoiris.';              
                console.log('\x1b[' + rainbowColors[color] + 'm%s\x1b[0m', subString);
                isColor = true;
            };
        };
        if (!isColor)
        {
            let subString:string = 'El color \'' + arrayIn[index] + '\' NO está en el arcoiris.';
            console.log('\x1b[7m%s\x1b[0m', subString);
        };
    };
};
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */

console.log('\n\n\x1b[35m%s\x1b[0m','5º RETO TEST.')
console.log('\n\x1b[36m%s\x1b[0m','Ejemplo 1:');
let arrayColores:string[] = ['verde', 'marron', 'amarillo', 'piedra', 'añil', 'rojo', 'rosa', 'violeta'];
colorIsInRainbow(arrayColores);                           
//FIN PUNTO 5.=======================================================================



//PUNTO 9.===========================================================================
function oddVsEven(numIn:number):void
{
    console.log('El numero', numIn, numIn % 2 === 0 ? 'es par' : 'es impar');
};
/*                         ↑↑↑  FUNCTION  ↑↑↑
-------------------------------------------------------------------------------------
                           ↓↓↓    TEST    ↓↓↓                                      */

console.log('\n\n\x1b[35m%s\x1b[0m','9º RETO TEST.')
console.log('\n\x1b[36m%s\x1b[0m','Ejemplo 1:');
let numA:number = 20;
oddVsEven(numA);

console.log('\n\x1b[36m%s\x1b[0m','Ejemplo 2:');
let numB:number = 21;
oddVsEven(numB);                          
//FIN PUNTO 9.=======================================================================