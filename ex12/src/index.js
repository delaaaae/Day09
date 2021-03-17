function switchCaseSequential(num) {

    var answer;
    switch (num) {
        case 1:
            return "Low";
            break;

            case 2:
                return "Low";
                break;

                case 3:
                    return "Low";
                    break;
        
        case 4:
            return "Mid";
            break;
        
            case 5:
            return "Mid";
            break;
           
            case 6:
            return "Mid";
            break;

        case 7:
            return "High";
            break;
    
        case 8:
            return "High";
            break;
    
            case 9:
                return "High";
                break;
        
        default:
            break;
    }


    return answer;
}

console.log(switchCaseSequential(1));
console.log(switchCaseSequential(2));
console.log(switchCaseSequential(3));
console.log(switchCaseSequential(4));
console.log(switchCaseSequential(5));
console.log(switchCaseSequential(6));
console.log(switchCaseSequential(7));
console.log(switchCaseSequential(8));
console.log(switchCaseSequential(9));

module.exports = switchCaseSequential;