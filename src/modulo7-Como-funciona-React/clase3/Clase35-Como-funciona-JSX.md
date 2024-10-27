# Clase 35 Del Curso Completo

## Módulo 7: Cómo funciona React

---

### Clase 3: Cómo funciona JSX


JSX es una extensión de JavaScript, que busca traer la sintaxis de los lenguajes tipo HTML/XML para definir el árbol de elementos de nuestros componentes de React. La sintaxis de JSX por sí misma no puede ser leída o ejecutada por un navegador, para hacerlo, es necesario convertir la sintaxis de JSX en instrucciones válidas del lenguaje.

Para que este proceso pase se requiere de un pragma. En programación, “pragma” hace referencia a una directiva para el compilador. En otras palabras, un pragma le da instrucciones al compilador para el proceso de compilación. Usamos un pragma en JSX para indicarle al compilador cómo debe traducir las instrucciones de JSX a JavaScript válido. El pragma es necesario ya que, aunque JSX es muy popular en el uso de React, no es el único lugar donde podemos usar JSX.

En un proyecto de React preconfigurado, como el que obtenemos de usar create-react-app, el pragma de JSX es `React.createElement`. Esta es la función que usaremos para convertir la sintaxis de JSX en JavaScript válido:

```jsx
// JSX
<div> <Button /> </div>

// JavaScript
React.createElement("div", {}, React.createElement(Button))
```

Si quieres usar JSX en otro contexto, con otro framework como Vue, sólo necesitas cambiar el pragma para que JSX use la función necesaria dependiendo de la librería que estés usando.

Si regresamos al ejemplo anterior, podemos aprender algunas cosas importantes acerca de cómo usar JSX en React:

```jsx
// JSX
<div> <Button /> </div>

// JavaScript
React.createElement("div", {}, React.createElement(Button))
```

Como puedes ver, el resultado final hace uso de las variables `React` y `Button`, es por eso que, aunque no uses directamente React, debes importarlo en cualquier archivo que usa JSX:

```jsx
import React from ‘react’;

<div>   <Button /></div>
```

Lo mismo pasa para cualquier componente que hayas creado, en este ejemplo `Button`. JSX evaluará tus etiquetas y, dependiendo de la primera letra de la declaración, sabrá si estás refiriendo a un componente tuyo o a un elemento nativo de la plataforma. En este caso, por ejemplo, podemos saber que `div` es un elemento de la plataforma y `Button` es un componente que tú has creado.

Continuemos.
