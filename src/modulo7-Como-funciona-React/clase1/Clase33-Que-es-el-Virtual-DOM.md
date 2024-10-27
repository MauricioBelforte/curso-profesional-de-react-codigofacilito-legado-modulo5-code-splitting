# Clase 33 Del Curso Completo

## Módulo 7: Cómo funciona React

---

### Clase 1: Qué es el Virtual DOM



El Virtual DOM es el concepto que se refiere a la versión en memoria que React guarda de cómo debe lucir la interfaz. Esta versión en memoria se compara luego con la estructura real de la interfaz para que React haga la mínima cantidad de cambios necesarios para que la interfaz sea representada como está en el Virtual DOM.

Aunque hay muchas razones detrás de la elección de usar una versión en memoria de la interfaz, existen dos que quiero destacar: **rendimiento** y **multiplataforma**.

### Rendimiento

En una página web, la interfaz está representada por un árbol al que llamamos el Document Object Model (DOM). Como en cualquier estructura de árbol, las operaciones de lectura son rápidas porque solo tienes que recorrer el árbol, mientras que las modificaciones son costosas porque muchas veces debes reajustar el árbol al hacer una modificación. El DOM, como mencioné, no es la excepción. Para hacer las cosas más complicadas, el DOM luego tiene que ser repintado en el navegador. El layout debe ser recalculado, los estilos actualizados, entre otras cosas.

Modificar constantemente el DOM tiene un alto costo de rendimiento, especialmente si estamos haciendo más cambios de los necesarios, como actualizar un elemento con el mismo valor. Consideremos, por ejemplo, el siguiente código:

```javascript
let div = div.querySelector(".container");
div.innerHTML = div.innerHTML + "<footer></footer>";
```

Lo que estas instrucciones de código hacen es colocar una etiqueta `<footer>` al final del contenido actual de un elemento `<div>`. Insertar un elemento podría parecer una operación de bajo costo. Sin embargo, al reasignar por completo el contenido, todo el árbol del DOM se está reconstruyendo, al menos en este ejemplo. Este es un ejemplo de una instrucción que parece inofensiva, pero puede ser muy costosa para el DOM.

React busca solucionar este problema evitando tocar el DOM lo más que sea posible y solo en los casos en que requiera actualizar algo, hacerlo de la manera más eficiente posible, ejecutando la menor cantidad de cambios y especialmente sin ejecutar aquellos que no requieren la reconstrucción completa de todo el árbol.

Para poder hacer esto, nuestros componentes retornan una representación de la interfaz usando elementos de React. Esta representación es el Virtual DOM, una representación que aún no se refleja en la pantalla, pero que indica cómo debe lucir la interfaz. Cada vez que se ejecuta el render de tu componente y una nueva representación virtual del DOM es entregada, React la compara con el DOM real. Recuerda que leer no es tan costoso como modificar y es en esta comparación que React detecta qué cambios debe hacer, si es que hay alguno. Si hay algún cambio, hace las modificaciones de manera eficiente.

### Multiplataforma

La segunda gran razón para el Virtual DOM es la cualidad multiplataforma de React. Recuerda que React puede usarse en la web y en plataformas nativas, como iOS y Android. El Virtual DOM nos ayuda a escribir el mismo código de React, sin importar cuál sea la plataforma destino. React va a leer la representación virtual y después la va a traducir a elementos dependiendo de en qué plataforma se está ejecutando nuestro código. Si es en la web, en elementos HTML; y si es en móviles, en elementos nativos de la plataforma, ya sea en controles de Android o controles de iOS, dependiendo de dónde está tu app.

En futuras versiones de React se incluirá un mecanismo de prioridad para las actualizaciones, de manera que la librería podrá marcar algunos cambios como más importantes que otros. Por ejemplo, el texto que un usuario está escribiendo en un control tendrá mayor importancia que el scroll en una lista de miles de elementos. De esta manera, React nos ofrece una forma de escribir componentes que funcionan en todas partes y cuyas actualizaciones se realizan de manera eficiente.
