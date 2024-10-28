# Clase 36 Del Curso Completo

## Módulo 8: Componentes de clase

---

### Clase 1: Qué son los componentes de clase


Un componente de clase es aquel que está definido con una clase de JavaScript. Esta clase debe tener dos particularidades: 
Primero, debe ser una clase de ES6 de JavaScript que herede de `React.Component`.
Debe poder implementar un método `render()` que retorne los elementos de React para la interfaz de dicho componente.

Históricamente, un componente de clase se diferencia de un componente funcional en dos principales aspectos: 
- La capacidad de administrar un estado propio del componente.
- La exposición de métodos que pueden ejecutar funcionalidad personalizada en distintas etapas del ciclo de vida de un componente.

Sin embargo, con la introducción de hooks en React 16, los componentes funcionales homologaron la funcionalidad de los componentes de clase, ya que ahora también pueden guardar un estado y ejecutar métodos del ciclo de vida de un componente.

En ese sentido, gran parte de la comunidad de desarrolladores que usan React recomiendan usar componentes funcionales y hooks, en lugar de componentes de clase. Al mismo tiempo, el equipo que mantiene y desarrolla React recomienda que no se reescriban componentes de clase en componentes funcionales a menos que sea necesario.

Esto quiere decir que en el futuro, React soportará ambas formas de declarar un componente, con clases y con funciones. Esto significa que para un desarrollador nuevo de React es necesario conocer ambas formas de declarar componentes, ya que es probable que en su trabajo diario se encuentre con componentes de clase y componentes funcionales como parte de una misma aplicación.

Por último, cabe mencionar que algunos conceptos de React son más claros cuando se observan a través de la definición en un componente de clase, particularmente los métodos del ciclo de vida de un componente.




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
