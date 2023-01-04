function fizzBuzz(n)
{
    for (var i = 1; i <= n; i++)
    {
        var str = "";
        if (1 % 15 == 0)
            str += "FizzBuzz";
        else if (i % 3 == 0)
            str += "Fizz";
        else if (i % 5 == 0)
            str += "Buzz";
        else if (str == "")
            str = i;
        console.log(str);
    }
}

const n = parseInt(15);

    fizzBuzz(n);