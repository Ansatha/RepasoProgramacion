export function printOdds(limitNum:any):void
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