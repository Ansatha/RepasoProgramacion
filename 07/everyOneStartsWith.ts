export function everyOneStartsWith(arrayIn:string[]):boolean
{
    let arrayInIndex:number = 0;
    while (arrayInIndex < arrayIn.length && arrayIn[arrayInIndex][0] === 'M')
    {
        arrayInIndex++;
    };
    return (arrayInIndex == arrayIn.length ? true : false)
};