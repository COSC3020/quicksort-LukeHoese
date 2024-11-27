function quicksort(array) {
    if (array.length <= 1) {
        return array;
    }
    
    var stack = [];

    stack.push(0);
    stack.push(array.length - 1);

    while (stack.length > 0) {
        var high = stack.pop();
        var low = stack.pop();

        var index = partition(array, low, high);

        if (index - 1 > low) {
            stack.push(low);
            stack.push(index - 1);
        }

        if (index + 1 < high) {
            stack.push(index + 1);
            stack.push(high);
        }
    }

    return array;
}

function partition(array, low, high) {
    var pivot = array[high];
    var x = low - 1;

    for (y = low; y < high; y++) {
        if (array[y] <= pivot) {
            x++
            [array[x], array[y]] = [array[y], array[x]];
        }
    }

    [array[x + 1], array[high]] = [array[high], array[x + 1]];

    return x + 1;
}
