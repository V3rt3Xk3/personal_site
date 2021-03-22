function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number" || resultType === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
}
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedAgesStringsAsNum = combine('30', '26', 'as-number');
console.log(combinedAges);
var combinedNames = combine("Max", "Anna", 'as-text');
console.log(combinedNames);
function printToConsole() {
    console.log("Printing...");
}
printToConsole();
var functionVariable;
functionVariable = printToConsole;
functionVariable();
