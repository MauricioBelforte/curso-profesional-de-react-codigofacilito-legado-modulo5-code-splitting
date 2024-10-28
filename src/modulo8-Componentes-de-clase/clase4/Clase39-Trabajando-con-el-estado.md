# Clase 39 Del Curso Completo

## Módulo 8: Componentes de clase

---
### Clase 4: Trabajando con el estado

Una de las partes clave de trabajar con un componente en React es producir interfaces interactivas. En ese sentido, algunos de los valores con los que trabajamos en un componente estarán actualizándose y modificándose. Ya vimos en el capítulo pasado que los valores de una prop no se deben modificar dentro de un componente, únicamente se pueden modificar por fuera, es decir por acá:
```javascript
render(<App name={"OtroNombre"} />, document.getElementById('root'));
```

Cuando queremos un valor que pueda estar actualizándose dentro del mismo componente, necesitamos definirle un estado. Esto ya lo vimos antes con el uso de `useState`, uno de los hooks de React para manejar el estado dentro de un componente funcional. Originalmente, los componentes de clase eran los únicos que podían manejar un estado, pero a partir de la versión 16.4 de React, también se puede hacer en componentes funcionales a través del uso de hooks.

En este capítulo vamos a ver cómo definir un estado dentro de un componente de clase.

Lo primero que necesitamos hacer es sobrescribir el constructor. Hablamos de sobrescribir porque el constructor ya tiene una funcionalidad que estamos heredando de `Component`.
```javascript
constructor(props) {}
```

El primer paso en el constructor del componente es mandar a llamar al constructor del padre. En este caso, el constructor de la clase padre `Component`. El constructor siempre recibe como argumento las props y debe enviarle esas props al constructor del componente padre:
```javascript
constructor(props) {
  super(props);
}
```

Esta es la sintaxis base de un constructor en un componente de clase. Después de esto, podemos asignarle un valor por defecto a nuestro estado, por ejemplo, un contador que empiece en cero. Un ejemplo clásico en React.
```javascript
constructor(props) {
  super(props);
  this.state = {
    contador: 0
  };
}
```

Este valor se puede acceder dentro de la interfaz haciendo uso del `this.state.contador` así:
```javascript
render() {
  console.log(this.props);
  return <p>Contador: {this.state.contador}</p>;
}
```

Ahora agregamos un elemento button y usamos `this.setState()` para modificar el estado.
```javascript
render() {
  console.log(this.props);
  return (
    <div>
      <p>Contador: {this.state.contador}</p>
      <button onClick={() => this.setState({ contador: this.state.contador + 1 })}>
        Sumar
      </button>
    </div>
  );
}
```
