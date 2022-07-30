//unknown error
let userInput: unknown;
let userName: string;

userInput = 4;
userInput = "ocen";
if (typeof userInput === "string") {
  userName = userInput;
}

//never type
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

const result = generateError("An error occurred!", 600);
console.log(result);
