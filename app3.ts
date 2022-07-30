type Combinable = number | string;

function combine(
  input1: Combinable,
  input2: Combinable,
  resultConversion: string
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number") {
    result = input1 + input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  if (resultConversion === "number") {
    return +result;
  } else {
    return result.toString();
  }
  return result;
}

const combinedAges = combine(30, 25, "number");
console.log(combinedAges);

const combinedNames = combine("ocen", "aaron", "text");
console.log(combinedNames);
