function bubbleSort(arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        // Flag to optimize, if no swaps are made, array is already sorted
        let swapped = false;
        
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap the elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        
        // If no elements were swapped, the array is already sorted
        if (!swapped) break;
    }
    return arr;
}

// Example usage
const arr = [5, 6, 1, 3, 4, 2];
console.log(bubbleSort(arr)); // Expected output: [1, 2, 3, 4, 5, 6]
