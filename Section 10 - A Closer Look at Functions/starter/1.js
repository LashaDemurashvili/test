'use strict';


function myFunction() {
    // Your code here
    console.log("Function called every second.");

    // Call the function again after 1 second
    setTimeout(myFunction, 1000);
}

// Call the function for the first time
myFunction();
