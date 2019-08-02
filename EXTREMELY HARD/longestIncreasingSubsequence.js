// Longest Increasing Subsequence

// Given a non-empty array of integers, write a function that returns the longest strictly-increasing subsequence of the array.  A subsequence is defined as a set of numbers that are not necessarily adjacent but that are in the same order as they appear in the array.  Assume that there will only be one longest increasing susequence.  

// O(nm * min(n,m)) time | O(nm * min(n,m)) space
function longestCommonSubsequence(str1, str2) {
    const lcs = [];
    for (let i = 0; i < str2.length + 1; i++) {
        const row = new Array(str1.length + 1).fill([]);
        lcs.push(row);
    }
    for (let i = 1; i < str2.length + 1; i++) {
        for (let j = 1; j < str1.length; j++) {
            if (str2[i - 1] === str1[j - 1]) {
                lcs[i][j] = lcs[i - 1][j - 1].concat(str2[i - 1]);
            } else {
                lcs[i][j] = 
                    lcs[i - 1][j].length > lcs[i][j - 1].length
                        ? lcs[i - 1][j]
                        : lcs[i][j - 1];
            }
        }
    }
    return lcs[str2.length][str1.length];
}