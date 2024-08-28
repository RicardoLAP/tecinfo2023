function inverterString(str) {
    return str.split('')
        .reverse()
        .join('');
}

console.log(inverterString("hello"));
console.log(inverterString("world"));
console.log(inverterString("abc"));   
