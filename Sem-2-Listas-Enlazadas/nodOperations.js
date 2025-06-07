function createListFromArray(arr) {
    let head = null;
    let current = null;
    for (let value of arr) {
        const newNode = { value, next: null };
        if (!head) {
            head = newNode;
            current = newNode;
        } else {
            current.next = newNode;
            current = current.next;
        }
    }
    return head;
}

function printNodes(head) {
    let current = head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

function countNodesRecursive(node) {
    if (!node) return 0;
    return 1 + countNodesRecursive(node.next);
}

// Prueba
const array = [5, 10, 15];
const head = createListFromArray(array);
printNodes(head);

console.time("Conteo");
console.log("Total nodos:", countNodesRecursive(head));
console.timeEnd("Conteo");

const emptyHead = null;
console.time("Conteo vacío");
console.log("Total nodos en vacío:", countNodesRecursive(emptyHead));
console.timeEnd("Conteo vacío");
