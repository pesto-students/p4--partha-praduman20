// Main function 
function createIncrement() {
    let count=0; //  Count is declared zero

    // Increment function 
    function increment() {
        count++;
    }

    let message=`Count is ${count}`; // Message string initialized with the value - Count is 0

    // This will print the message
    function log() {
        console.log(message);
    }

    // The increment and log fucntions are returned as a whole thus terminating the function.
    return[increment,log];
};

const[increment,log] =createIncrement();

increment(); // Incrementing
increment();
increment();
log(); // To print the message

// The output will be - Count is 0

// Why? - 
// In the main function the two functions increment and log are returned at the last which are then destructured
// and assigned to the variables in line 22. The function increment has been called out 3 times and after each time
// the count value is updated but the string message is not updated and holds the same value as it had previously 
// at the time of decalaration. So when we invoke the log function we see the output - Count is 0.