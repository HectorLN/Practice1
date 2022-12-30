function minmax(arr) 
{
  let minValue = 0;
  let maxValue = 0;

  arr.sort(function(a, b){return a-b});

  for (let i = 0, j = arr.length - 1; i < arr.length - 1; i++, j--)
  {
    minValue += arr[i];

    maxValue += arr[j];
  }

  console.log(minValue + " " + maxValue);
  return
}

arr = [34,1,0,23,4]

minmax(arr)