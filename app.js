function combine(input1, input2, resultConversion) {
    var result;
    if (typeof input1 === "number" && typeof input2 === "number") {
        result = input1 + input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    if (resultConversion === "number") {
        return +result;
    }
    else {
        return result.toString();
    }
    return result;
}
var combinedAges = combine(30, 25, "number");
console.log(combinedAges);
var combinedNames = combine("ocen", "aaron", "text");
console.log(combinedNames);
