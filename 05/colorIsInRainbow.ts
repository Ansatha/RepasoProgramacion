export function colorIsInRainbow(arrayIn:string[]):void
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
                console.log('\n\x1b[' + rainbowColors[color] + 'm%s\x1b[0m', subString);
                isColor = true;
            };
        };
        if (!isColor)
        {
            let subString:string = 'El color \'' + arrayIn[index] + '\' NO está en el arcoiris.';
            console.log('\n\x1b[7m%s\x1b[0m', subString);
        };
    };
};