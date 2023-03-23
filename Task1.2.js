function isPositive(a) {
    if(a > 0) {
        return "Yes"
    } else {
        if(a === 0) {
            throw new Error("Zero Error")
        }
            throw new Error("Negative Error")
    }
}

console.log(isPositive(-782))