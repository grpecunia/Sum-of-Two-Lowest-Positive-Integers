function sumTwoSmallestNumbers(numbers) {  
  var sum = numbers.sort(function (a,b) {
  return a - b;})
  var sumTot = numbers [0] + numbers [1];
  return sumTot;
}