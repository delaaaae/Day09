function inverseWhile() {
    var fiveNumbers = 5;
    while(fiveNumbers > 0) {
       console.log(fiveNumbers--);
    }
    return fiveNumbers;
}
console.log(inverseWhile());
module.exports = inverseWhile;