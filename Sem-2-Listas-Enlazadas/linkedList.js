let head = null;

function addNode(valor) {
    const newNode = { value: valor, next: null };
    if (!head) {
        head = newNode;
    } else {
        let current = head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNode;
    }
}

function deleteNode(valor) {
    if (!head) {
        console.log("Lista vacía");
        return;
    }
    if (head.value === valor) {
        head = head.next;
        return;
    }
    let current = head;
    while (current.next && current.next.value !== valor) {
        current = current.next;
    }
    if (current.next) {
        current.next = current.next.next;
    } else {
        console.log("Valor no encontrado");
    }
}

function printList() {
    let current = head;
    while (current) {
        console.log(current.value);
        current = current.next;
    }
}

// Prueba
deleteNode(10);
addNode(1);
addNode(2);
addNode(3);
deleteNode(2);
printList();
