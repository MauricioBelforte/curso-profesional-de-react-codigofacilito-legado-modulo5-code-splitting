# Clase 38 Del Curso Completo

## Módulo 8: Componentes de clase

---

### Clase 3: Trabajando con props


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

La diferencia de los componentes funcionales es que las props son una propiedad del objeto del componente. Algo importante mencionar acerca de los componentes que se generan a partir de clases es que cuando insertamos dicho componente en la interfaz, se crea una instancia de la clase, es decir, un objeto. Este objeto no se va a sustituir; dentro puede haber cambios y la interfaz puede actualizarse, pero se utilizará el mismo objeto. Esto permite hacer uso del estado del objeto para guardar información, entre ellas las props.

Estas props son una propiedad del objeto y se acceden a través de la propiedad o el nombre `props`. Ejemplo:
```javascript
console.log(this.props)
```

Podemos ver en la consola con F12 que por ahora no tenemos ningún prop. Pero si pasamos algo como `name="Uriel"`, ya tendremos en name esa prop disponible.
```javascript
render(<App name={"Uriel"} />, document.getElementById('root'));
```

Podemos utilizar las props en cualquier parte del objeto, en métodos particulares o en el render. El único detalle es que, al igual que en los componentes funcionales, las props nunca deben reasignarse. Dentro del componente se pueden clasificar como de solo lectura. No se pueden reasignar, es decir, no puedes hacer algo así como `this.props.name = algo`. Estas reasignaciones no se pueden hacer ni en componentes funcionales ni en componentes de clase.

Cuando queremos que alguna prop esté siempre presente, podemos asignarle un valor por defecto definiendo una propiedad estática dentro del componente que se llame `static defaultProps`.
```javascript
static defaultProps = { name: "Cody" }
```

Aquí podemos especificar el valor de algunas props, y ese es el que se le asigna cuando el componente padre o desde fuera no se le asigna un valor. Es decir, si quitáramos name del ejemplo anterior:
```javascript
render(<App />, document.getElementById('root'));
```

Como en este caso particular donde a la prop `name` no se le está asignando ningún valor y por defecto toma el que se especifique en la propiedad estática `defaultProps`, que en este caso es "Cody". Podemos ver que dice "Cody", que es el valor que le estamos asignando por defecto. Puedes poner todas las props que quieras y, a menos que desde fuera se reasigne el valor, tomará el valor por defecto de aquí:
```javascript
static defaultProps = { name: "Cody" }
```

Aquí podemos especificar otra propiedad estática llamada `propTypes` que nos va a permitir validar el tipo de valor que se le pueda asignar a un prop. Esto quiere decir que si, por ejemplo, el nombre forzosamente tiene que ser una cadena, podemos utilizar `propTypes` para poder indicarle que únicamente puede asignarse una cadena a la prop name por ejemplo. Al hacer uso de esta propiedad se recomienda instalar un nuevo paquete llamado `prop-types`.

Dentro del archivo `package.json` agregamos `"prop-types": "*"` :
```json
"dependencies": {
  "@testing-library/jest-dom": "^5.17.0",
  "@testing-library/react": "^13.4.0",
  "@testing-library/user-event": "^13.5.0",
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "react-scripts": "5.0.1",
  "web-vitals": "^2.1.4",
  "prop-types": "*"
},
```

Vamos a decirle que instale la nueva dependencia e importamos:
```javascript
import PropTypes from "prop-types";
```

Y le decimos que name puede ser solo una cadena así:
```javascript
static propTypes = {
  name: PropTypes.string
}
```
