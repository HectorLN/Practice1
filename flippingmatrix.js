function flippingmatrix (arr)
{
    let len = arr.length;
    let sum = 0;

    for (let i = 0; i < len / 2; i++)
    {
        for (let j = 0; j < len / 2; j++)
        {
            let max = Math.max(arr[i][j], arr[i][len - j - 1], arr[len - i - 1][j], arr[len - i - 1][len - j - 1]);
            sum += max;
        }
    }

    return sum.toString();
}

let arr = [[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]];
Console.log(flippingmatrix(arr));