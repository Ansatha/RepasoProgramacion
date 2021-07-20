export function printYarraFromarraY(arrayIn:any[])
{
    let arrayOut:any[] = [];
    for (let arrayInIndex = 0; arrayInIndex < arrayIn.length; arrayInIndex++)
    {
        arrayOut.push(arrayIn[arrayIn.length - (arrayInIndex + 1)]);    
    };
    return arrayOut;
};