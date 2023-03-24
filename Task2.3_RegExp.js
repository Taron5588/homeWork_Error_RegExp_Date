const REGEXP = /\s<(.*?)>/g;
let str = '<> <a href="/"> <input type="radio" checked> <b>';
let arr = str.match(REGEXP);

console.log(arr)
'<a href="/">', '<input type="radio" checked>', "<b>";

// let str = "cbbabcdebc"
// let reg = /ab+c/g
// console.log(reg.test(str))
// console.log(str.match(reg))