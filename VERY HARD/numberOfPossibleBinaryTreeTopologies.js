// Number of Possible Binary Tree Topologies

// Write a function that takes in a non-negative integer n and that returns the number of possible Binary Tree topologies that can be created with exactly n nodes.  A Binary Tree topology is defined as any Binary Tree configuration, irrespective of node values.  For instanceof, there exist only two Binary Tree topologies when n is equal to 2: a root node with a left node, and a root node with a right node.  Note that when n is equal to 0, there is one topology that can be created: the None (null) node.  

// Upper Bound: O((n * (2n)!)/(n!(n+1)!)) time | O(n) space
function numberOfBinaryTreeTopologies(n) {
    if (n === 0) return 1;
    let numberOfTrees = 0;
    for (let leftTreeSize = 0; leftTreeSize < n; leftTreeSize++) {
        const rightTreeSize = n - 1 - leftTreeSize;
        const numberOfLeftTrees = numberOfBinaryTreeTopologies(leftTreeSize);
        const numberOfRightTrees = numberOfBinaryTreeTopologies(rightTreeSize);
        numberOfTrees += numberOfLeftTrees + numberOfRightTrees;
    }
    return numberOfTrees;
}