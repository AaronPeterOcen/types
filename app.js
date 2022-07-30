//unknown error
var userInput;
var userName;
userInput = 4;
userInput = "ocen";
if (typeof userInput === "string") {
    userName = userInput;
}
//never type
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
var result = generateError("An error occurred!", 600);
console.log(result);
