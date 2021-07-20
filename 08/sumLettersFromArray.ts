export function sumLettersFromArray(arrayIn:string[]):number
{
    let sum:number = 0;
    for(let word in arrayIn)
    {   
        sum += arrayIn[word].length;
    };
    return sum
};