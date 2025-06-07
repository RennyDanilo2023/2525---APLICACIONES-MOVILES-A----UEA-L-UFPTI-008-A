
# 📘 Práctica: Implementación de Listas Enlazadas en JavaScript (Node.js)

Este proyecto corresponde a una actividad académica sobre estructuras de datos en la asignatura **Aplicaciones Móviles**, donde se implementan listas enlazadas simples, listas doblemente enlazadas y operaciones sobre nodos, utilizando JavaScript con Node.js.

---

## 📂 Archivos del proyecto

### 1. `linkedList.js`

**Funciones principales:**
- `addNode(valor)`: Añade un nodo al final de la lista.
- `deleteNode(valor)`: Elimina un nodo con el valor especificado.
- `printList()`: Imprime en consola los elementos de la lista en orden.

**Ejemplo de uso esperado:**
```bash
node linkedList.js
```

**Salida esperada:**
```
Lista vacía
1
3
```

---

### 2. `doublyLinkedList.js`

**Funciones principales:**
- `insertAt(valor)`: Inserta nodos al final de la lista doble.
- `reverseList(nodoInicial)`: Recorre e imprime la lista desde el final al inicio usando punteros `prev`.

**Ejemplo de uso esperado:**
```bash
node doublyLinkedList.js
```

**Salida esperada:**
```
1
```

---

### 3. `nodOperations.js`

**Funciones principales:**
- `createListFromArray(arr)`: Crea una lista enlazada a partir de un arreglo de valores.
- `printNodes(head)`: Recorre e imprime los valores del nodo.
- `countNodesRecursive(node)`: Cuenta el número de nodos usando recursividad.

**Ejemplo de uso esperado:**
```bash
node nodOperations.js
```

**Salida esperada:**
```
5
10
15
Total nodos: 3
Total nodos en vacío: 0
```

---

## ▶️ Instrucciones de ejecución

1. Asegúrate de tener instalado **Node.js** (v18 o superior). Verifica con:
   ```bash
   node -v
   ```

2. Abre una terminal en la carpeta del proyecto.

3. Ejecuta cada script con el comando:
   ```bash
   node nombreDelArchivo.js
   ```

   Por ejemplo:
   ```bash
   node linkedList.js
   ```

---

## ✍️ Autor

**Renny Danilo Vinocunga-Pillajo**  
Universidad Estatal Amazónica  
Asignatura: 2525 - APLICACIONES MÓVILES (A)

---

## 📄 Licencia

Este proyecto es de uso académico y no tiene fines comerciales.
