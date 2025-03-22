function steps(n) {
    // Loop through each level
    for (let i = 1; i <= n; i++) {
        let step = '';
        
        // Add '#' characters for the current level
        for (let j = 1; j <= i; j++) {
            step += '#';
        }

        // Print the step at the current level
        console.log(step);
    }
}

// Example usage
steps(2); 
// Output:
// #
// ##

steps(3); 
// Output:
// #
// ##
// ###
