function removeLastElement(array) {
  array.pop();
  return array;
}

console.log(removeLastElement([1, 2, 3, 4, 5])); 
console.log(removeLastElement(["a", "b", "c"])); 
console.log(removeLastElement([10])); 
