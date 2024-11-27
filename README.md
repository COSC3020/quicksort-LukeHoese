# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

The worst case time complexity for my algorithm would be $\Theta$(n^2)
This is because the partitioning step has a time complexity of O(n), as it must iterate over
all n elements of the subarray. The worst case for the algorithm would be a data set where
the pivot chose was always the smallest/largest element. Essentially at each step only the pivot would end up sorted,
and the resulting subarrays would be of size n-1, and 0. This means that you would have to repeat the iteration over n
elements n times, giving the worst case time complexity of: $\Theta$(n^2)
