
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
    try{ if (!value.hasOwnProperty("runLab")) {
        throw new TypeError("Error thrown")
    } 
        if(value.runLab(3) === expectedNum){
                console.log('You are right')
            } 
            else console.log('You did a mistake')
        

    } catch(err){
        console.log(err.message)
    }
}
}

gradeLabs(studentLabs);