let a = parseFloat(prompt("Enter First Number:"))
let b = parseFloat(prompt("Enter Second Number:"))
let ans
let command = prompt("Enter the Operator, '*', '/', '+', '-' :")

switch (command) {
    case '+' :
        ans = a + b
        break
    case '*' :
        ans = a * b
        break
    case '/' :
        ans = a / b
        break
    case '-' :
        ans = a - b
        break
    default :
        alert ("Enter either '+', '/', '-', '*' as an operator!")
}

alert( `The result is ${ans}` )