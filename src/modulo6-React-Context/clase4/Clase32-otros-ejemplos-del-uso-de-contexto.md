# Clase 32 Del Curso Completo

## Módulo 6: React Context

---


### Clase 4: Otros ejemplos del uso de contexto
Otro buen ejemplo para el uso de contexto es crear un formulario con múltiples pasos. Este también es un buen ejemplo para aplicar React Context, ya que cada paso del formulario requiere la misma información. Creamos varios componentes: uno para el formulario `FormularioClase32`, y otros dos para dentro del formulario `MainInfoClase32` y `SkillsClase32`. La idea es que en el componente de la clase solo vamos a colocar el formulario completo:

```jsx
import React from "react";
import FormularioClase32 from "./FormularioClase32";

const Clase32otrosEjemplosDelUsoDeContexto = () => {
    return (
        <div>
            <FormularioClase32 />
        </div>
    );
}

export { Clase32otrosEjemplosDelUsoDeContexto }
```

Luego en el componente del formulario `FormularioClase32` vamos a crear el contexto que se llamará `ContextoFormulario`:

```jsx
export const ContextoFormulario = React.createContext();
```

La idea es que a partir de este formulario se cree el proveedor, que va a pasar los datos en el `value`, hacia los componentes `MainInfoClase32` y `SkillsClase32`. Por lo que deben ir dentro del proveedor:

```jsx
<ContextoFormulario.Provider>
    <MainInfoClase32 />
    <SkillsClase32 />
</ContextoFormulario.Provider>
```

Además, vamos a crear tres estados para el email, el password y los likes. Tanto las variables como las funciones que setean el estado se van a pasar en el `value` del proveedor.

```jsx
import React, { useState } from "react";
import SkillsClase32 from "./SkillsClase32";
import MainInfoClase32 from "./MainInfoClase32";

export const ContextoFormulario = React.createContext();

const FormularioClase32 = () => {
    const [email, setEmail] = useState("mauricio@gmail.com");
    const [password, setPassword] = useState("");
    const [likes, setLikes] = useState("");

    return (
        <form>
            <ContextoFormulario.Provider value={{ email, password, likes, setEmail, setPassword, setLikes }}>
                <MainInfoClase32 />
                <SkillsClase32 />
            </ContextoFormulario.Provider>
            <p>Email: {email}</p>
            <p>Contraseña:</p>
            <p>Lenguajes:</p>
        </form>
    );
}

export default FormularioClase32;
```

Los componentes `MainInfoClase32` y `SkillsClase32` son los que van a consumir el contexto, por lo que deben importar el contexto del formulario así:

```jsx
import { ContextoFormulario } from "./FormularioClase32";
```

y usar el hook `useContext(ContextoFormulario)`.

En el componente `MainInfoClase32` vamos a colocar unos inputs y en el `value` recibe el contexto. Pero además, agregamos el `onChange={}` que si hay un cambio en el input este setee la variable `email` con ese dato que viene en el `ev.target.value`:

```jsx
import React, { useContext } from "react";
import { ContextoFormulario } from "./FormularioClase32";

const MainInfoClase32 = () => {
    const contexto = useContext(ContextoFormulario);
    return (
        <div>
            <input onChange={(ev) => contexto.setEmail(ev.target.value)} type="email" value={contexto.email} />
            <input type="password" />
        </div>
    );
}

export default MainInfoClase32;
```

En el componente `SkillsClase32` consumimos el contexto de la misma manera, lo colocamos en un elemento `p` para verlo.

```jsx
import React, { useContext } from "react";
import { ContextoFormulario } from "./FormularioClase32";

const SkillsClase32 = () => {
    const contexto = useContext(ContextoFormulario);
    return (
        <div>
            <p>Email: {contexto.email}</p>
            <label>
                <input type="checkbox" name="likes[]" /> Ruby
            </label>
            <label>
                <input type="checkbox" name="likes[]" /> Javascript
            </label>
        </div>
    );
}

export default SkillsClase32;
```

Entonces, ahora estos tres elementos están comunicados por el contexto, y si hay un cambio en el componente `FormularioClase32` que tiene el proveedor, el resultado se ve reflejado en todos los consumidores que están en los componentes `MainInfoClase32` y `SkillsClase32`.



Para completar un poco mas el codigo vamos a agregar algunas funciones en el componente SkillsClase32 para cuando se presione el check se vea reflejado en los elementos p del FormularioClase32


### Explicación de las funciones

#### `agregarALaLista`
```javascript
const agregarALaLista = (value, lista) => {
    console.log(":0");
    contexto.setLikes([value].concat(contexto.likes));
}
```
- Esta función toma dos parámetros: `value` y `lista` (aunque `lista` no parece estar siendo utilizada en esta función).
- `console.log(":0")`: Es simplemente un log en la consola que imprime ":0" cada vez que se llama la función.
- `contexto.setLikes([value].concat(contexto.likes));`: Aquí se está actualizando el estado `likes` del contexto. Se crea un nuevo array donde `value` se concatena al inicio del array actual de `likes` usando el método `concat`. De esta manera, `value` se agrega al inicio de la lista de `likes`.

#### `removerDeLaLista`
```javascript
const removerDeLaLista = (value, lista) => contexto.setLikes(contexto.likes.filter(v => v !== value));
```
- Esta función también toma dos parámetros: `value` y `lista` (aunque de nuevo, `lista` no está siendo utilizada aquí).
- `contexto.setLikes(contexto.likes.filter(v => v !== value));`: Aquí se está actualizando el estado `likes` del contexto. Se está creando un nuevo array que contiene todos los elementos del array actual de `likes` excepto aquellos que son iguales a `value`, usando el método `filter`. Esto efectivamente elimina `value` de la lista de `likes`.

Ambas funciones están diseñadas para agregar y remover elementos del estado `likes` dentro del contexto, permitiendo así modificar la lista de "likes" desde los componentes que consumen este contexto.

### Explicación de las funciones con `onChange` y `value` en los `input`

#### `agregarALaLista`
```javascript
const agregarALaLista = (value, lista) => {
    console.log(":0");
    contexto.setLikes([value].concat(contexto.likes));
}
```
- Esta función toma dos parámetros: `value` y `lista` (aunque `lista` no parece estar siendo utilizada en esta función).
- `console.log(":0")`: Es simplemente un log en la consola que imprime ":0" cada vez que se llama la función.
- `contexto.setLikes([value].concat(contexto.likes));`: Aquí se está actualizando el estado `likes` del contexto. Se crea un nuevo array donde `value` se concatena al inicio del array actual de `likes` usando el método `concat`. De esta manera, `value` se agrega al inicio de la lista de `likes`.

#### `removerDeLaLista`
```javascript
const removerDeLaLista = (value, lista) => contexto.setLikes(contexto.likes.filter(v => v !== value));
```
- Esta función también toma dos parámetros: `value` y `lista` (aunque de nuevo, `lista` no está siendo utilizada aquí).
- `contexto.setLikes(contexto.likes.filter(v => v !== value));`: Aquí se está actualizando el estado `likes` del contexto. Se está creando un nuevo array que contiene todos los elementos del array actual de `likes` excepto aquellos que son iguales a `value`, usando el método `filter`. Esto efectivamente elimina `value` de la lista de `likes`.

### Combinación con `onChange` y `value` en los `input`

```javascript
<label>
    <input type="checkbox" name="likes[]" value="Ruby" onChange={(e) => e.target.checked ? agregarALaLista(e.target.value) : removerDeLaLista(e.target.value)} /> Ruby
</label>
<label>
    <input type="checkbox" name="likes[]" value="Javascript" onChange={(e) => e.target.checked ? agregarALaLista(e.target.value) : removerDeLaLista(e.target.value)} /> Javascript
</label>
```
- El `onChange` se encarga de capturar los cambios en el `input` de tipo `checkbox`.
- `e.target.checked` verifica si el `checkbox` está marcado (true) o desmarcado (false).
- Si el `checkbox` está marcado (`true`), llama a la función `agregarALaLista(e.target.value)`, lo que agrega el valor del `checkbox` a la lista de `likes`.
  - Por ejemplo, si el `checkbox` tiene `value="Ruby"`, entonces `agregarALaLista("Ruby")` agrega "Ruby" a la lista de `likes`.
  - Si el `checkbox` tiene `value="Javascript"`, entonces `agregarALaLista("Javascript")` agrega "Javascript" a la lista de `likes`.
- Si el `checkbox` está desmarcado (`false`), llama a la función `removerDeLaLista(e.target.value)`, lo que elimina el valor del `checkbox` de la lista de `likes`.
  - Por ejemplo, si el `checkbox` tiene `value="Ruby"`, entonces `removerDeLaLista("Ruby")` elimina "Ruby" de la lista de `likes`.
  - Si el `checkbox` tiene `value="Javascript"`, entonces `removerDeLaLista("Javascript")` elimina "Javascript" de la lista de `likes`.

Esto permite que cada vez que un usuario marque o desmarque un `checkbox`, el estado `likes` del contexto se actualice en consecuencia, agregando o eliminando el valor correspondiente de la lista.


Y en el componente FormularioClase32 agregamos la variable del estado para ver los resultados :

```jsx
  <p>Lenguajes:{likes}</p>
```

Es importante que el contexto no sea compartido por toda la aplicacion de manera global. Sino por ejemplo, como en este caso que es compartido solo en elementos del formulario.