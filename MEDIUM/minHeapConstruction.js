Min Heap Construction

Implement a Min Heap class.  The class should support insertion, removal (of the minimum/root value), peeking (of the minimum/root value), as well as sifting a value up and down the heap and building the heap from an input Array.  The heap should be represented in the form of an Array.  

For the buildheap(), remove() and insert() methods of the heap, you will need to use the siftDown() and siftUp() methods.  These two methods should essentially allow you to take any node in the heap and move it either down or up in the heap until it's in its final, appropriate position.  This can be done by comparing the node in question to its child nodes in the case of siftDown() or to its parent node in the case of siftUp().  

In an array-based Heap, you can easily access a node's children nodes and parent nodes by using the nodes' indices.  If a node is located at index innerWidth, then its children nodes are located at indices 2 * i + 1 and 2 * i + 2, and its arent node is located at index Math.floor((i - 1 / 2)).  

To implement the buildHeap() method, you can either sift every node in the input array down to its finally, correct position, or you can sift every node in the input array up to its final, correct position.  