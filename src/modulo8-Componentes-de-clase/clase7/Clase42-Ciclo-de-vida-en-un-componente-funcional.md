# Clase 42 Del Curso Completo

## Módulo 8: Componentes de clase

---
### Clase 7: Ciclo de vida en un componente funcional


## Equivalentes en componentes funcionales

Así solo me gustaría hacer un repaso de cuáles son los equivalentes de estos métodos en un componente funcional. Los métodos del ciclo de vida en un componente de clase son muy expresivos. El componente se montó `componentDidMount`, se actualizó `componentDidUpdate` y se desmontó. En un componente funcional, no es tan directo, y necesitamos utilizar hooks como `useEffect`. Este método puede ejecutar efectos secundarios.

Recordemos que los métodos del ciclo de vida de un componente React pueden ejecutar efectos secundarios. Ni el render ni el constructor deberían tener efectos secundarios, solo estos. Por eso, en un componente funcional existe `useEffect` para colocar operaciones que mandan a llamar a efectos secundarios o producen efectos secundarios. `useEffect` se comporta como `componentDidMount` o `componentDidUpdate` dependiendo de cómo se use.

Por defecto, el comportamiento de `useEffect` es similar a `componentDidUpdate`. Aquí tienes un ejemplo de actualización de un componente funcional, que tiene mucho menos código:

```javascript
componentDidMount(){
    console.log("Esto está en el componentDidMount")
}
```

En componentes funcionales, `useEffect` sin dependencias se comporta como `componentDidMount`:

```javascript
useEffect(() => {
    console.log("Esto está en el componentDidMount");
}, []);
```

`componentDidUpdate` se ejecuta cada vez que hay una actualización. En un componente funcional, `useEffect` sin arreglo de dependencias se ejecuta en cada render:

```javascript
componentDidUpdate(){
    console.log("Esto está en el componentDidUpdate")
}

useEffect(() => {
    console.log("Esto está en el componentDidUpdate");
});
```

Para evitar esto, pasamos las dependencias adecuadas:

```javascript
useEffect(() => {
    console.log("Esto está en el componentDidUpdate");
}, [dependencies]);
```

Si quieres que el comportamiento sea similar a `componentDidMount`, debes pasar un arreglo vacío como argumento a `useEffect`:

```javascript
useEffect(() => {
    console.log("Esto está en el componentDidMount");
}, []);
```

Por último, si quieres `componentWillUnmount`, debes retornar una función de `useEffect`. Esta función se va a mandar a llamar cada vez que el componente vaya a desmontarse. Aquí tienes un ejemplo de cómo se comporta la función que se retorna de `useEffect`:

```javascript

componentDidMount(){
    console.log("Fui creado en componentDidMount")
    let intervalo = setInterval(() => this.setState({contador: this.state.contador + 1}), 1000)
    this.setState({
        intv: intervalo
    })
}

componentWillUnmount(){
    alert("Chau")
    clearInterval(this.state.intv)
}

useEffect(() => {
    console.log("Fui creado en componentDidMount");
    let intervalo = setInterval(() => setContador(contador + 1), 1000);
    return () => {
        alert("Chau");
        clearInterval(intervalo);
    }
}, []);
```

Así, tenemos los equivalentes de los métodos del ciclo de vida en componentes de clase a componentes funcionales utilizando hooks.


