# Clase 37 Del Curso Completo

## Módulo 8: Componentes de clase

---

### Clase 2: Cómo definir un componente de clase

Primero importamos React:
```javascript
import React from "react";
```

Luego definimos una clase que tiene que heredar de `React.Component`, es decir:
```javascript
class AlgunaClase extends React.Component {}
```

Alternativamente a esta sintaxis, también podemos hacerlo importando el `Component` directamente en una instancia separada así:
```javascript
import React, { Component } from "react";
```

Y utilizarlo directamente:
```javascript
class AlgunaClase extends Component {}
```

Después es necesario definir un método `render()` que dentro tendrá el `return` que ya sabemos usar de los componentes funcionales:
```javascript
class AlgunaClase extends Component {
  render() {
    return (
      <div>
        {/* JSX aquí */}
      </div>
    );
  }
}
```

AlgunaClase generalemente es una clase que ya esta implementada en el lenguaje

### Montaje de Componentes en React

Para montar tu aplicación React en el DOM, usamos una instrucción clave. Vamos a desglosarlo:

```javascript
render(<App />, document.getElementById('root'));
```

1. **`render(<App />)`**:
   - `<App />` es un componente de React. En este caso, es el componente principal de tu aplicación.
   - Los componentes en React son piezas reutilizables de código que definen cómo debe verse y comportarse una parte de tu interfaz de usuario.

2. **`document.getElementById('root')`**:
   - `document.getElementById('root')` es una llamada al DOM de JavaScript que selecciona el elemento HTML con el ID `root`.
   - En la mayoría de los proyectos de React (especialmente aquellos creados con Create React App), hay un archivo `index.html` con un elemento `<div id="root"></div>` en el cuerpo del documento. Este es el contenedor donde React insertará y gestionará tu aplicación.

3. **Unión de Todo**:
   - La función `render` (en React 18 y versiones posteriores, `createRoot` y `root.render`) toma el componente React (`<App />`) y lo monta dentro del elemento del DOM con el ID `root`.
   - Esto significa que React se hará cargo del control de ese elemento del DOM y renderizará el componente y cualquier componente hijo que `<App />` incluya.

#### Ejemplo en Contexto
Si tu archivo `index.html` tiene algo como esto:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>React App</title>
</head>
<body>
    <div id="root"></div>
    <script src="index.js"></script>
</body>
</html>
```

Y tu archivo `index.js` tiene algo como esto:

```javascript
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

Esto hará que el componente `App` y todos sus componentes hijos se rendericen dentro del `div` con el ID `root` en el DOM.

## Componentes Funcionales vs. Componentes de Clase en React

### Componente Funcional

```javascript
// App.js (Funcional)
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hola, mundo!</h1>
    </div>
  );
}

export default App;
```

### Componente de Clase

```javascript
// App.js (Clase)
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Hola, mundo!</h1>
      </div>
    );
  }
}

export default App;
```




## En este curso estamos viendo la version antigua de React, React 17 y anteriores

### React 18 y Posteriores

```javascript
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const root = createRoot(document.getElementById('root'));
root.render(<App />);
```

### React 17 y Anteriores

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

### Por lo que la mayoria, si no es todo el curso, no se llamara a los componentes en la App.js
