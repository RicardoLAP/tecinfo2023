function isNumberInArray(array, number) {
  return array.includes(number);
}


console.log(isNumberInArray([1, 2, 3, 4, 5], 3));    
console.log(isNumberInArray([10, 20, 30, 40, 50], 25)); 
console.log(isNumberInArray([100, 200, 300], 100)); 
