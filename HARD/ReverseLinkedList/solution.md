# Solution

```js
// O(n) time | O(1) space - where n is the number of nodes in the Linked List
function reverseLinkedList(head) {
    let p1 = null,
        p2 = head;
    while (p2 !== null) {
        const p3 = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = p3;
    }
    return p1;
}
```