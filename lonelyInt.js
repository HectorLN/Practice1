function lonelyInt(arr)
{
    
    var b = 0;
    for (var i = 0; i < arr.length; i++)
    {
        b ^= arr[i];
    }
    return b;
}
var a = [1, 2, 3, 4, 3, 2, 1];

console.log(lonelyInt(a));