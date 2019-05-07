// Longest Increasing Subsequence

// Given a non-empty array of integers, write a function that returns the longest strictly-increasing subsequence of the array.  A subsequence is defined as a set of numbers that are not necessarily adjacent but that are in the same order as they appear in the array.  Assume that there will only be one longest increasing susequence.  

// O(n^2) time | O(n) space
function longestIncreasingSubsequence(array) {
    const sequences = new Array(array.length);
    const lengths = array.map(num => 1);
    let maxLengthIdx = 0;
    for (let i = 0; i < array.length; i++) {
        const currentNum = array[i];
        for (let j = 0; j < i; j++) {
            const otherNum = array[j];
            if (otherNum < currentNum && lengths[j] + 1 >= lengths[i]) {
                lengths[i] = lengths[j] + 1;
                sequences[i] = j;
            }
        }
        if (lengths[i] >= lengths[maxLengthIdx]) maxLengthIdx = i;
    }
    return buildSequence(array, sequences, maxLengthIdx);
}

function buildSequence(array, sequences, currentIdx) {
    const sequence = [];
    while (currentIdx !== undefined) {
        sequence.unshift(array[currentIdx]);
        currentIdx = sequences[currentIdx];
    }
    return sequence;
}