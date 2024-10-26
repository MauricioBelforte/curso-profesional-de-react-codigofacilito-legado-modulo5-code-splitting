# Clase 30 Del Curso Completo

## Módulo 6: React Context

---

### Clase 2: React Context en práctica

Lo primero que necesitamos para utilizar el API de React Context es llamar a la función y asignarla a una variable o constante:

```javascript
const TemaContexto = React.createContext();
```

Si quisiéramos, también se puede asignar un valor por defecto. Creamos el componente de la clase y un componente para un botón. Ahora, ¿qué pasa si queremos tener un tema para que cambie de color el botón de oscuro a claro?

Entonces, vamos a crear 2 temas:

```javascript
const temas = {
    'dark': {
        backgroundColor: 'black',
        color: 'white'
    },
    'light': {
        backgroundColor: 'white',
        color: 'black'
    }
};
```

Ahora, hay que agrupar todos los componentes que van a acceder a la información del contexto en el componente provider que retorna `createContext`.

```javascript
<TemaContexto.Provider>
    <BotonClase30 />
</TemaContexto.Provider>
```

Ahora, todos los hijos del componente `<TemaContexto.Provider></TemaContexto.Provider>` van a compartir la información que le asignemos a este contexto:

```javascript
const TemaContexto = React.createContext();
```

Esa información la asignamos vía prop `value={}` así:

```javascript
<TemaContexto.Provider value={temas}>
    <BotonClase30 />
</TemaContexto.Provider>
```

Ahora, todos los componentes que estén dentro de `<TemaContexto.Provider></TemaContexto.Provider>` van a tener acceso al objeto temas a través del contexto:

```javascript
const temas = {
    'dark': {
        backgroundColor: 'black',
        color: 'white'
    },
    'light': {
        backgroundColor: 'white',
        color: 'black'
    }
};
```

Ahora, vamos al componente `BotonClase30` y usamos el hook `useContext()` para poder acceder al contexto.

```javascript
const contexto = useContext();
```

Pero hay un inconveniente, en React pueden existir múltiples contextos. Entonces, hay que decirle a `useContext()` del `BotonClase30` a qué contexto se quiere acceder. Para eso, hay que pasar la variable `TemaContexto`, para que enlace el provider con el `useContext()` del `BotonClase30`. Entonces, la exportamos así:

```javascript
export const TemaContexto = React.createContext();
```

Y la importamos en el botón:

```javascript
import { TemaContexto } from './Clase30ReactContextEnPractica';
```

A todos los que consuman la información de provider o proveedor se las llama consumidores. Cada vez que cambiamos el valor que se está pasando en `value`, todos los consumidores se van a actualizar. Así que asignamos colores a los botones pasándole a `value` temas.dark o temas.light:

```javascript
<TemaContexto.Provider value={temas.dark}>
    <BotonClase30 />
</TemaContexto.Provider>
```

El código del componente Clase30ReactContextEnPractica quedaría:

```javascript
import React from "react";
import BotonClase30 from "./BotonClase30";

const temas = {
    'dark': {
        backgroundColor: 'black',
        color: 'white'
    },
    'light': {
        backgroundColor: 'white',
        color: 'black'
    }
};

export const TemaContexto = React.createContext();

const Clase30ReactContextEnPractica = () => {
    return (
        <div>
            <TemaContexto.Provider value={temas.dark}>
                <BotonClase30 />
            </TemaContexto.Provider>
        </div>
    );
};

export { Clase30ReactContextEnPractica };
```

Quedando el código del BotonClase30:

```javascript
import React, { useContext } from "react";
import { TemaContexto } from './Clase30ReactContextEnPractica';

const BotonClase30 = () => {
    const contexto = useContext(TemaContexto);
    console.log(contexto);
    return (
        <button style={{
            backgroundColor: contexto.backgroundColor,
            color: contexto.color
        }}>
            Presionar
        </button>
    );
};

export default BotonClase30;
```

Y la app principal:

```javascript
import './App.css';
import React from 'react';
import { Clase30ReactContextEnPractica } from './modulo6-React-Context/clase2/Clase30ReactContextEnPractica';

function App() {
  return (
    <div>
      <Clase30ReactContextEnPractica />
    </div>
  );
}

export default App;
```
