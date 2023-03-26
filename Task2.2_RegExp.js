function myRegExp(string) {
    regExp = /^[0-9]*$/g
    const condition = (string.length === 4 || string.length === 6) 
        return condition ? `the pin is ${regExp.test(string)}` : ` the pin is ${false}`
}

console.log(myRegExp("00200"))