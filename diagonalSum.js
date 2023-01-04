function diagonalSum(matrix)
{
    let len = matrix.length;
    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i < len; i++)
    {
        firstSum += matrix[i][i];
        secondSum += matrix[i][len - i - 1];
    }

    let absoulteDiff = Math.abs(firstSum - secondSum);

    return absoulteDiff.toString();
}

let arr = [[1, 2, 3], [4, 5, 6], [9, 8, 9]];

console.log(diagonalSum(arr));