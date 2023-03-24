
let studentLabs = [
    {
        student: "Blake",
        myCode: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: "Jessica",
        runLab: function (num) {
            return Math.pow(num, num);
        },
    },
    {
        student: "Mya",
        runLab: function (num) {
            return num * num;
        },
    },
];

//gradeLabs(studentLabs);
const expectedNum = 27;
function gradeLabs(students){ 
    for(let value of students){
    try{
        if(value.runLab(3) === expectedNum){
                return 'You are right'
            } 
            return 'You did a mistake'

    } catch(err){
        throw new TypeError("Error thrown")
    }
}
}

console.log(gradeLabs(studentLabs));