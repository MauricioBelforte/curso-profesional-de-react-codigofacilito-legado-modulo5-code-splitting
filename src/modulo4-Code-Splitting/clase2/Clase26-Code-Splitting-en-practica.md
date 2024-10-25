# Clase 25 Del curso completo

## Módulo 5: Code Splitting

---

### Clase 2: Code Splitting en Práctica

Para este siguiente ejemplo en el que vamos a hablar de **code splitting**, vamos a utilizar un proyecto creado localmente. No vamos a utilizar nuestro editor en línea, como aprendimos en los primeros temas. Hay muchas formas en cómo podemos utilizar React, una de ellas es `npx create-react-app nombre-del-proyecto`, que es una utilidad administrada por Facebook de Open Source. A través de la cual nosotros podemos generar un proyecto completo preconfigurado de React. Entonces, vamos a utilizar este comando. Para poder usarlo, debemos tener instalado **Node.js** y **npm** que viene con npx, que puede llamar líneas de comando como `create-react-app nombre-del-proyecto` sin tener que instalarla.

En este caso le vamos a poner `create-react-app code-splitting` y le voy a dar enter. Esto tarda unos minutos en instalarse. Quiero hablarte un poquito de lo que es la práctica de **code splitting**.

En una aplicación de JavaScript tenemos mucho código que eventualmente se traduce en un archivo o en múltiples archivos de JavaScript muy pesados que tenemos que descargar cuando ingresamos a una página web. En muchas ocasiones, este código hace referencia a múltiples vistas o múltiples estados de la aplicación y no todo el código se va a utilizar en una primera carga, o sea, cuando el usuario por primera vez entra a la página web no necesita todo el código de JavaScript. Especialmente cuando tenemos una aplicación dividida por vistas. Un código le corresponde a una vista, otro código a otra vista. No es necesario que descarguemos el código de todas las vistas disponibles de nuestra página web, sino únicamente aquello que se va a necesitar en cada interacción.

Para eso, existe una práctica que se llama **code splitting**. Es una estrategia a través de la cual nosotros podemos dividir el código total de nuestra aplicación en vistas o en estados para que únicamente se descarguen del servidor cuando sean necesarios. Algunos de los precompiladores como **webpack**, que nos permiten definir tareas automatizadas para el front-end, vienen con estrategias para que nosotros podamos hacer code splitting, y no enviar todo nuestro JavaScript en una sola carga, sino únicamente hasta que es necesario.

En esta clase vamos a ver cómo podemos implementar una de estas estrategias o la estrategia de **code splitting** de React para que un componente se cargue **on demand**. Eso quiere decir que hasta que sea necesario se descarga todo el código que corresponde a ese componente y no todo de una sola vez.

Una vez que terminó la instalación, debió haber creado una carpeta con el nombre que le asignamos al proyecto y acá vamos a darle en la terminal `npm start` para iniciar el servidor que viene con **create-react-app**. Por ahora, únicamente tenemos un componente **App.js** que tiene código preinstalado que vamos a eliminar. Vemos cómo React, cada vez que nosotros guardamos, el archivo automáticamente se actualiza en el navegador.

Eliminamos el código que está dentro del `return` del componente principal `App() {}`. En este caso solo vamos a crear el escenario. Que significa que un componente que inicialmente no está en la vista, por lo tanto, no deberíamos descargar el código para este componente. Porque no está disponible sino hasta que aparece en la vista, es decir, cuando `state` cambia a `true`. Ya lo vamos a mostrar en la vista, ya vamos a descargar su código. Por ahora, si vemos con `F12`, la pestaña `Network`, podemos ver que todo se descarga en un solo `bundle.js`.
### Código de la Clase

Creamos un componente que se va a llamar `SorpresaClase26`, que va a mostrar la palabra "sorpresa":

```javascript
import React from "react";

const SorpresaClase26 = () => {
  return (
    <div>
      <p>Sorpresa</p>
    </div>
  );
};

export { SorpresaClase26 };
```

Y en la app principal vamos a llamar al componente cuando se presiona el botón **Mostrar sorpresa**. Usamos el hook `useState` para inicializar un estado y modificarlo cuando se presione el botón:

```javascript
import './App.css';
import { SorpresaClase26 } from './modulo4-Code-Splitting/clase2/SorpresaClase26';
import { useState } from 'react';

function App() {
  const [showSorpresa, setShowSorpresa] = useState(false);

  return (
    <div>
      <button onClick={(ev) => setShowSorpresa(true)}>
        Mostrar sorpresa
      </button>
      {showSorpresa && <SorpresaClase26 />}
    </div>
  );
}

export default App;
```
