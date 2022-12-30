function median(values) {
  values.sort( function(a,b) {return a - b;} );
  var half = Math.floor(values.length/2);
  
    return values[half];
 
}

arr = [34,1,0,23,4];

console.log(median(arr));