"use strict";

//Start or Controll function - get needed values
function getValues() {
    // get unique input values from the page
    let startValue = document.getElementById('startValue').value;
    let endValue = document.getElementById('endValue').value;

    // Use the "parseInt()" function to cast/convert from string input to integers    
    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    // validate - check if above parsed input are integers
    if (Number.isInteger(startValue) && Number.isInteger(endValue)) {
        // if true call generateNumbers() - generate the numbers return them in an array
        let numbers = generateNumbers(startValue, endValue);

        // Call the display function with "numbers" variable to display results on the page 
        displayNumbers(numbers);

    } else {
        alert("You must enter whole integers.");

    }

}

//Logic function - Generate numbers based on the start and endvalue
function generateNumbers(sValue, eValue) {
    // Declare an array variable called numbers and set it equal to []
    let numbers = [];


    // loop over the sValue and eValue from start to end.
    for (let i = sValue; i <= eValue; i++) {
        // add each number to the "numbers" array
        numbers.push(i);

    }

    //Return the "numbers" array
    return numbers;

}


//View/Display Function - display the results (numbers) to the screen
function displayNumbers(numbers) {
    // Delare a variable called "className" and set it equal to 'even' for use with displaying even numbers
    let className = 'even';

    //Decalre a variable called "templateRows" and set it equal to ''
    let templateRows = "";

    // loop through the numbers array- allow loop to run up to numbers.length

    for (let i = 0; i < numbers.length; i++) {
        // declare "number" variable and set it equal to numbers[index]
        let number = numbers[i];

        // use "if-else-statement" to test each number against the zero modulus(%). (ie. number % 2 == 0)
        if (number % 2 == 0) {
            className = 'even';
            // concate loop
            templateRows += `<tr><td class="${className}">${number}</td></tr>`;
        } else {
            className = 'odd';
            // concate loop
            templateRows += `<tr><td class="${className}">${number}</td></tr>`;
        }

    }

    // HTML page Markup - set the "results" element/innerHTML to the concatenated "templateRows"
    document.getElementById('results').innerHTML = templateRows;
    
}