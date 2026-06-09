// Arrow Function with Promise
const divideNumbers = (num1, num2) => {
    return new Promise((resolve, reject) => {

        if (num2 === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(num1 / num2);
        }

    });
};

function displayMessage(message) {
    document.getElementById("output").innerHTML += message + "<br>";
}

function runTests() {

    document.getElementById("output").innerHTML = "";

    // Test Case 1
    displayMessage("<b>Case 1:</b> Dividing 10 by 2");
    divideNumbers(10, 2)
        .then(result => displayMessage("Result: " + result))
        .catch(error => displayMessage(error));

    // Test Case 2
    displayMessage("<br><b>Case 2:</b> Dividing 10 by 0");
    divideNumbers(10, 0)
        .then(result => displayMessage("Result: " + result))
        .catch(error => displayMessage(error));

    // Test Case 3
    displayMessage("<br><b>Case 3:</b> Dividing 20 by 4");
    divideNumbers(20, 4)
        .then(result => displayMessage("Result: " + result))
        .catch(error => displayMessage(error));

    // Test Case 4
    displayMessage("<br><b>Case 4:</b> Dividing 15 by 3");
    divideNumbers(15, 3)
        .then(result => displayMessage("Result: " + result))
        .catch(error => displayMessage(error));

    // Test Case 5
    displayMessage("<br><b>Case 5:</b> Dividing 50 by 5");
    divideNumbers(50, 5)
        .then(result => displayMessage("Result: " + result))
        .catch(error => displayMessage(error));
}