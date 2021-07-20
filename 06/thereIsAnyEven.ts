export function thereIsAnyEven(arrayIn:number[]):boolean
{
    let arrayInIndex:number = 0;
    while (arrayInIndex < arrayIn.length && arrayIn[arrayInIndex] % 2 !== 0)
    {
        arrayInIndex++;
    };
    return (arrayInIndex < arrayIn.length ? true : false)
};