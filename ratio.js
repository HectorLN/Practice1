function ratio(arr)
{
    let lenght = arr.length;

    let posCount = 0;
    let negCount = 0;
    let zeroCount = 0;

    for (let i = 0; i < lenght; i++)
    {
        if (arr[i] > 0)
        {
            posCount++;
        }
        else if (arr[i] < 0)
        {
            negCount++;
        }
        else
        {
            zeroCount++;
        }
    }

    console.log((posCount / lenght).toFixed(6));
    console.log((negCount / lenght).toFixed(6));
    console.log((zeroCount / lenght).toFixed(6));
}
//let n;
let arr = [-11,-5,-10,0,0,5,14,158];

console.log("Enter the number of elements in the array: ");
//n = parseInt(readLine());
//arr.length = n;

console.log("Enter the elements of the array: ");
//arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

ratio(arr);