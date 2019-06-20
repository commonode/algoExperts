// Multi String Search

// Write a function that takes in a big string and an array of small strings, all of which are smaller in length than the big string.  The function should return an array of booleans, where each boolean represents whether or not eh small string at that index in the array of small strings is contained in the big string.  Note that you cannot use language-built-in-string-matching methods.  

// O(bns) time | O(n) space
function mutiStringSearch(bigString, smallStrings) {
    return smallStrings.map(smallString => isInBigString(bigString, smallString));
}

function isInBigString(bigString, smallString) {
    for (let i = 0; i < bigString.length; i++) {
        if (i + smallString.length > bigString.length) break;
        if (isInBigStringHelper(bigString, smallString, i)) return true;
    }
    return false;
}

function isInBigStringHelper(bigString, smallString, startIdx) {
    let leftBigIdx = startIdx;
    let rightBigIdx = startIdx + smallString.length - 1 ;
    let leftSmallIdx = 0;
    let rightSmallIdx = smallString.length - 1;
    while (leftBigIdx <= rightBigIdx) {
        if (
            bigString[leftBigIdx] !== smallString[leftSmallIdx] ||
            bigString[rightBigIdx] !== smallString[rightSmallidx]
        ) {
            return false;
        }
        leftBigIdx++;
        rightBigIdx--;
        leftSmallIdx++;
        rightSmallIdx--;
    }
    return true;
}

// O(b^2 + ns) time | O(b^2 + n) space
function multiStringSearch(bigString, smallStrings) {
    const modifiedSuffixTrie = new modifiedSuffixTrie(bigString);
    return smallStrings.map(string => modifiedSuffixTrie.contains(string));
}

class ModifiedSuffixTrie {
    constructor(string) {
        this.root = {};
        this.populateModifiedSuffixTrieFrom(string);
    }

    populateModifiedSuffixTrieFrom(string) {
        for (let i = 0; i < string.length; i++) {
            this.insertSubstringStartingAt(i, string);
        }
    }

    insertSubstringStartingAt(i, string) {
        let node = this.root;
        for (let j = i; j < string.length; j++) {
            const letter = string[j];
            if (!letter in node)) node[letter] = {};
            node = node[letter];
        }
    }

    contains(string) {
        let node = this.root;
        for (const letter of string) {
            if (!(letter in node)) return false;
            node = node[letter];
        }
        return true;
    }
}