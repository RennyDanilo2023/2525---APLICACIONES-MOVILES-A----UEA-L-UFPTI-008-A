let start = null;

function insertAt(valor) {
    const newNode = { value: valor, prev: null, next: null };
    if (!start) {
        start = newNode;
    } else {
        let current = start;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
        newNode.prev = current;
    }
}

function reverseList(nodoInicial) {
    let current = nodoInicial;
    while (current.next) {
        current = current.next;
    }
    while (current) {
        console.log(current.value);
        current = current.prev;
    }
}

// Prueba
insertAt(1);
reverseList(start);
