# Clase 25 Del curso completo

## Módulo 5: Code Splitting

---

### Clase 1: ¿Qué es Code Splitting?

Una de las principales desventajas de hacer una aplicación con **JavaScript** es el tamaño del o los archivos de código que enviamos a los dispositivos de nuestros usuarios. Según el httparchive, una página web envía en promedio más de **400 kilobytes** de código de JavaScript comprimido. Esto puede resultar en un par de megabytes que el navegador debe de descargar, interpretar y ejecutar.

Según un reporte de Chrome del 2019, el navegador invierte en promedio el **30% del total de la ejecución** con una página ejecutando JavaScript. El resto lo ocupa en todo lo demás. En una aplicación basada en JavaScript, como las que construimos con **React**, este valor puede incrementar considerablemente con páginas que envían más de **10 megabytes** de JavaScript al ingresar a un sitio.

El problema se empeora si consideramos que además del tiempo que toma descargar esos más de **10 megabytes** en la red, debemos sumar el tiempo de ejecución del código. Esta tarea, usualmente, interrumpe a otras como la actualización de la interfaz o la respuesta a las interacciones del usuario.

Una de las estrategias para reducir el tamaño total del código de JavaScript es dividirlos y enviarlos por partes. Esta estrategia nos permite enviar el código según el usuario lo requiera. Por ejemplo, si ingreso a una página con gráficas, podría recibir el código para mostrar las gráficas solo hasta que estas aparezcan en pantalla. De esta manera, optimizamos el rendimiento de nuestra aplicación enviando solo el código que necesita y evitamos enviar código que el usuario aún no requiere o quizás nunca lo haga.

A esta estrategia la llamamos **Code Splitting**.

Vamos a ver en los siguientes vídeos cómo implementar esto de **Code Splitting** en React.
