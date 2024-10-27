# Clase 31 Del Curso Completo

## Módulo 6: React Context

---

### Clase 3: Actualizando el Contexto

En la clase anterior, en el provider le estoy pasando uno de los temas que elegí, en este caso:

```jsx
<TemaContexto.Provider value={temas.dark}></TemaContexto.Provider>
```

Con esto seteo el contexto en el componente `BotonClase30`. Este recibe el contexto así:

```javascript
import { TemaContexto } from './Clase30ReactContextEnPractica';

const contexto = useContext(TemaContexto);
```

Ahora, ¿cómo podemos actualizar la información de un proveedor para actualizar la de los otros? Necesitamos usar el estado con el hook `useState()`. Es decir, debemos actualizar el estado del componente que está desplegando el proveedor. Vamos a crear un estado en el componente `Clase31ActualizandoElContexto`, en donde vamos a asignar a la variable de ese estado uno de los temas que hicimos. Por defecto, vamos a elegir el tema oscuro. Después cambiaremos a light dinámicamente.

```javascript
const [tema, setTema] = useState(temas.dark);
```

Vamos a crear 2 botones más, uno para modo claro y otro para modo oscuro. Cada uno con su `onClick` que modifique el estado. La variable que le pasamos al prop `value` se puede actualizar con el uso de estados, y los consumidores se van a actualizar dinámicamente. En este caso, le pasamos la variable del estado "tema":

```jsx
<TemaContexto.Provider value={tema}>
    <BotonClase31 />
    <button onClick={() => setTema(temas.light)}>Modo claro</button>
    <button onClick={() => setTema(temas.dark)}>Modo oscuro</button>
</TemaContexto.Provider>
```

Cada vez que actualicemos el `value` del proveedor, todos los consumidores se van a actualizar automáticamente.

Para entender mejor cómo todos los consumidores se van a actualizar, vamos a crear otro componente `Card`. Que va a consumir el contexto, por lo que el componente `CardClase31` tiene que ir dentro del provider.
Vamos a agregar un elemento <p></p> Con un mensaje para que este cambie los estilos segun lo que consume del provider, al igual que el Boton.

```javascript
import React, { useContext } from "react";
import { TemaContexto } from './Clase31ActualizandoElContexto';

const CardClase31 = () => {
    const contexto = useContext(TemaContexto);
    return (
        <div style={{
            backgroundColor: contexto.backgroundColor,
            color: contexto.color
        }}>
            <p>Hola, este es el card, que es otro consumidor</p>
        </div>
    );
};

export default CardClase31;
```

Entonces, el componente de la clase quedaría:

```javascript
import React, { useState } from "react";
import BotonClase31 from "./BotonClase31";
import CardClase31 from "./CardClase31";

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

const Clase31ActualizandoElContexto = () => {
    const [tema, setTema] = useState(temas.dark);
    return (
        <div>
            <TemaContexto.Provider value={tema}>
                <BotonClase31 />
                <button onClick={() => setTema(temas.light)}>Modo claro</button>
                <button onClick={() => setTema(temas.dark)}>Modo oscuro</button>
                <CardClase31 />
            </TemaContexto.Provider>
        </div>
    );
};

export { Clase31ActualizandoElContexto };
```

En el componente del botón no hubo modificaciones, solo creamos uno nuevo:

```javascript
import React, { useContext } from "react";
import { TemaContexto } from './Clase31ActualizandoElContexto';

const BotonClase31 = () => {
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

export default BotonClase31;
```

Y en la app principal:

```javascript
import './App.css';
import React from 'react';
import { Clase31ActualizandoElContexto } from './modulo6-React-Context/clase3/Clase31ActualizandoElContexto';

function App() {
    return (
        <div>
            <Clase31ActualizandoElContexto />
        </div>
    );
}

export default App;
```
