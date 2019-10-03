// Palindrome Partitioning Min Cuts

// Given a non-empty String, write a function that returns the minimum number of cuts needed to perform on the string such that each remaining substring is a palindrome.  A palindrome is defined as a string that is written the same forward as backward.  Note that single-character strings are palindromes.  

// O(n^3) time | O(n^2) space
function palindromePartitionMinCuts(string) {
    const palindromes = new Array(string.length).fill(1).map(row => []);
    for (let i = 0; i < string.length; i++) {
        for (let j = i; j < string.length; j++) {
            palindromes[i][j] = isPalindrome(string.slice(i, j + 1));
        }
    }
    const cuts = new Array(string.length);
    cuts.fill(Infinity);
    for (let i = 0; i < string.length; i++) {
        if (palindromes[0][i]) {
            cuts[i] = 0;
        } else {
            cuts[i] = cuts[i - 1] + 1;
            for (let j = 1; j < i; j++) {
                if (palindromes[j][i] && cuts[j - 1] + 1 < cuts[i]) {
                    cuts[i] = cuts[j - 1] + 1;
                }
            }
        }
    }
    return cuts[cuts.length - 1];
}

function isPalindrome(string) {
    let leftIdx = 0;
    let rightIdx = string.length - 1;
    while (leftIdx < rightIdx) {
        if (string[leftIdx] !== string[rightIdx]) return false;
        leftIdx++;
        rightIdx--;
    }
    return true;
}