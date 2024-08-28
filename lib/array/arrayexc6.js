function insertAtStart(array, element) {
  array.unshift(element);
  return array;
}


console.log(insertAtStart([1, 2, 3, 4, 5], 6));    
console.log(insertAtStart(["a", "b", "c"], "d"));   
console.log(insertAtStart([10], 20));  