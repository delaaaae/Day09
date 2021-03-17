function myForLoop1() {
    var evenNumbers = [];
    for (var i = 0; i < 10; i+2) {
     return evenNumbers;   
    }
}
console.log(myForLoop1());

function myForLoop2() {
    var evenInverseNumbers;
    for (var i = 8; i > 0; i-2){
        return evenInverseNumbers;
    }

}

console.log(myForLoop2());
module.exports = {
    myForLoop1,
    myForLoop2
};