// function reverseString(s) {
//     try {
//        return s.split("").reverse().join("")
//     }
//     catch (err) {
//         //console.log(err)
//         throw new TypeError(`${s} is not string`)    
//     }
//     finally {
//        return "end"
//     }
// }

// console.log(reverseString(155))

function reverseString(s) {
    try {
        if(typeof s === "string") {
       return s.split("").reverse().join("")
        } else {
            throw new TypeError(`${s} is not string`)
        }
    }
    catch ({message, name}) {
        return `${message}, this is ${name}`
    }
}

console.log(reverseString(15555))
