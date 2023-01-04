function finfzigzagsequence(n) {
    var result = [];
    var i = 1;
    var j = 1;
    var k = 1;
    while (i <= n) {
        if (j > 0) {
            result.push(k);
            j--;
        } else {
            k++;
            j = k;
        }
        i++;
    }
    return result;
}