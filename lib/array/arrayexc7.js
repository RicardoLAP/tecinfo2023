function addToEnd(array, element) {
  array.push(element);
  return array;
}


console.log(addToEnd([1, 2, 3, 4, 5], 6));    
console.log(addToEnd(["a", "b", "c"], "d"));  
console.log(addToEnd([10], 20));           