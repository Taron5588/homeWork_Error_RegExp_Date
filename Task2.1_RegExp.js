function checkLowerCase(string) {
    const regExp = /^(\w)*$/g
    return regExp.test(string)
}

console.log(checkLowerCase('abcD20%%'))
/************************************************************/
// function checkUpperCase(secondString) {
//     const secRegExp = /^[A-Z]*$/g
//     return secRegExp.test(secondString)
// }

// console.log(checkUpperCase("AbS"))
// /************************************************************/
// function checkNumberCase(stringNum) {
//     const thirdRegExp = /^[0-9]*$/g
//     return thirdRegExp.test(stringNum)
// }

// console.log(checkNumberCase("545"))