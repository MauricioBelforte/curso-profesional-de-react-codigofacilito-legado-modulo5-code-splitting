# Clase 27 Del curso completo

## Módulo 5: Code Splitting

---

### Clase 3: Code Splitting en Práctica

En la documentación de React, se menciona que la mejor forma de introducir **code splitting** y la más simple para un proyecto configurado con **Create React App** es utilizar **imports dinámicos**. Podemos llamar a `import` como si fuera una función, que retorna una promesa que se va a ejecutar hasta que se haya terminado de importar este archivo.

Cuando Webpack detecta esta clase de sintaxis, empieza a hacer **code splitting**, es decir, comienza a dividir la app en varios archivos js cuando sean necesarios.

Creamos una función `hello` en el archivo `hello.js` aparte:

```javascript
export default function hello() {
    console.log("Hola amigos")
}
```

Agregamos un hook `useEffect` en `App.js` para poder agregar una actualización cuando el componente se monta.


### Código
```jsx
useEffect(() => { 
  import("./modulo4-Code-Splitting/clase3/hello").then(modulo => modulo.default())
}, []);
```

### Explicación Detallada

1. **`useEffect`**:
   - `useEffect` es un Hook de React que permite realizar efectos secundarios en componentes funcionales. Se ejecuta después de que el componente se ha renderizado.
   - En este caso, `useEffect` se ejecutará una vez al montarse el componente porque el segundo argumento es un array vacío `[]`.

2. **`import("./modulo4-Code-Splitting/clase3/hello")`**:
   - Este es un import dinámico. En lugar de importar el módulo en la parte superior del archivo, se importa dentro de `useEffect` cuando se necesita.
   - `import()` devuelve una promesa que se resuelve con el módulo importado.
   - Es decir que trae un objeto que le pediremos la funcion que trae por defecto.

3. **`.then(modulo => modulo.default())`**:
   - Aquí, `.then()` se encadena a la promesa devuelta por `import()`.
   - `modulo` es el módulo importado. `modulo.default` accede al export default del módulo.
   - `modulo.default()` asume que el export default del módulo es una función, así que se la llama.

4. **`[],`**:
   - El array vacío `[]` como segundo argumento a `useEffect` significa que el efecto solo se ejecutará una vez, cuando el componente se monte.

### Resumen
El código está configurado para que, cuando el componente se monte, haga una importación dinámica del módulo `hello` desde la ruta especificada. Una vez que la importación se complete, llama a la función exportada por defecto de ese módulo. Este enfoque es útil para **code splitting** y cargar módulos solo cuando se necesiten, mejorando la performance de la aplicación.

### Código y Explicación de Imports Dinámicos en React

Con F2 se puede ver que el archivo `hello.js` está aparte de los chunks.js tradicionales. Esto quiere decir que ya no se descarga todo de una sola vez.

### Función Principal:
```jsx
import './App.css';
import { SorpresaClase26 } from './modulo4-Code-Splitting/clase2/SorpresaClase26';
import { SorpresaClase27 } from './modulo4-Code-Splitting/clase3/SorpresaClase27';
import { useEffect, useState } from 'react';

function App() {
  const [showSorpresa, setShowSorpresa] = useState(false);

  useEffect(() => {
    import("./modulo4-Code-Splitting/clase3/hello").then(modulo => modulo.default())
  }, []);

  return (
    <div >
      <button onClick={(ev) => setShowSorpresa(true)}>
        Mostrar sorpresa
      </button>
      {
        showSorpresa && <SorpresaClase27 />
      }
    </div>
  );
}

export default App;
```

### El Componente:
```jsx
import React from "react";

const SorpresaClase27 = () => {
  return (
    <div>
      <p>Sorpresa</p>
    </div>
  )
}

export { SorpresaClase27 }
```

### Importar Función de la Manera Tradicional:
Si quisiéramos corroborar cómo carga junto a los chunks.js tradicionales, podemos dejar comentado el import dinámico,e importar la función de la manera tradicional así:

```jsx
import './App.css';
import { SorpresaClase27 } from './modulo4-Code-Splitting/clase3/SorpresaClase27';
import { useEffect, useState } from 'react';
import hello from './modulo4-Code-Splitting/clase3/hello';

function App() {
  const [showSorpresa, setShowSorpresa] = useState(false);

  useEffect(() => {
    /*  import("./modulo4-Code-Splitting/clase3/hello").then(modulo => modulo.default()) */
  }, []);

  return (
    <div >
      <button onClick={(ev) => setShowSorpresa(true)}>
        Mostrar sorpresa
      </button>
      {
        showSorpresa && <SorpresaClase27 />
      }
    </div>
  );
}

export default App;
```
