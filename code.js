function quicksort(array) {
    // deal with empty array (base case)
    if (array.length <= 1) {
        return array;
    }

    // utilize a stack in place of recursion, stores the ranges of subarrays
    var stack = [];

    // initial range, aka entire array
    stack.push(0);
    stack.push(array.length - 1);

    // loop while there are elements (subarray ranges) on the stack
    while (stack.length > 0) {
        var high = stack.pop();
        var low = stack.pop();

        // call partition to sort current subarray and return the index of the pivot element
        var index = partition(array, low, high);

        // push new subarray range onto stack if lower subarray has more than one element
        if (index - 1 > low) {
            stack.push(low);
            stack.push(index - 1);
        }

        // push new subarray range onto stack if higher subarray has more than one element
        if (index + 1 < high) {
            stack.push(index + 1);
            stack.push(high);
        }
    }

    return array;
}

function partition(array, low, high) {
    // select pivot, I will use the "highest" (last) element as my pivot
    var pivot = array[high];
    // x will help keep track of which elements are greater than or less than our pivot
    var x = low - 1;

    // loop over each element of subarray
    for (y = low; y < high; y++) {
        // if element is less than pivot, switch it to be below x, if values are greater than x nothing needs to be done
        if (array[y] <= pivot) {
            x++
            [array[x], array[y]] = [array[y], array[x]];
        }
    }
    
    // place pivot into its correct postion (above x)
    [array[x + 1], array[high]] = [array[high], array[x + 1]];

    return x + 1;
}
