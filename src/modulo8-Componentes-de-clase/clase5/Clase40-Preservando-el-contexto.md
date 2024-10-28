# Clase 40 Del Curso Completo

## Módulo 8: Componentes de clase

---
### Clase 5: Preservando el contexto


Uno de los temas más propensos a causarte un bug que te dé dolor de cabeza dentro de JavaScript es el contexto. Es muy importante que aprendas bien qué es el contexto, pero sobre todo cómo cambia el contexto.

El contexto es la forma en cómo nos referimos al valor que nos entrega la palabra reservada `this`. Este valor cambia bajo ciertas condiciones. Puedes ver el vídeo correspondiente dentro del curso profesional de JavaScript aquí en el bloque de funciones y scope. 

Esto es muy importante en el contexto de React. En ciertos casos, el valor de `this` no está definido, es decir, no hay un valor asignado para el contexto, y esto es un error muy común en React. Básicamente, lo que está pasando aquí es que se está reasignando el valor del contexto.

Una forma en como podemos evitar que el valor del contexto se reasigne es declarar la función con la sintaxis de la flecha (`=>`). Así se preserva el valor de `this`. Tradicionalmente, en los métodos de React el contexto debería ser el objeto con el que estamos trabajando, es decir, la instancia actual.

Podemos definir los métodos de tal manera que al enlazarlos con algún listener de algún evento no se vaya a modificar el contexto y no tengamos bugs inesperados. Una alternativa es aprovechar la sintaxis moderna de JavaScript (`bind`). 

Antes solíamos ver algo como lo siguiente:

```javascript
this.onClick = this.onClick.bind(this);
```

Esto hace que funcione igual. Sin embargo, esto tiene la desventaja de que para cada método que queramos que conserve el contexto, debemos agregar esta línea de código en el constructor.

En el curso profesional de JavaScript, también se cubre el tema de `call` y `apply`, que permiten asignar un valor para el contexto que no se vaya a modificar. Cuando el constructor se manda a llamar, el valor de `this` va a ser la instancia actual.

Entonces, en esta línea de código le estamos diciendo: para esta función, el valor del contexto siempre va a ser la instancia actual y no puede cambiar. 

Así que, te recomiendo muchísimo estos dos temas. De hecho, todo el bloque de funciones y scope es una muy buena idea tomarlo en el curso profesional de JavaScript. Aquí ya hemos visto cómo en un componente de clase.
