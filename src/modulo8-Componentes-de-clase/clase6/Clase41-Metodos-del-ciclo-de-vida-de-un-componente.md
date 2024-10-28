# Clase 41 Del Curso Completo

## Módulo 8: Componentes de clase

---
### Clase 6: Métodos del ciclo de vida de un componente



Un componente expone una serie de métodos que puedes utilizar para ejecutar código en momentos claves del funcionamiento de tu componente. La documentación de React destaca una página con un diagrama donde puedes identificar los distintos métodos del ciclo de vida y en qué momento se ejecutan.

Esto significa que si implementas un método con nombre, por ejemplo, `componentDidMount`, el código dentro de dicho método se ejecutará luego de que React actualice el DOM en la etapa de montajes, es decir, la etapa inicial de creación. Así mismo, `componentDidUpdate` es el nombre que debes asignar al método cuyo código se ejecuta después de actualizar el DOM en cualquier actualización, mientras que `componentWillUnmount` se ejecutará una vez en el momento del desmontaje o la eliminación del componente del DOM.

El diagrama destaca los puntos en los que se pueden ejecutar efectos secundarios y en cuáles no. La fase del render indica que estas funciones deben ser puras y no deben tener efectos secundarios. Por otro lado, está la fase de commit, donde se puede trabajar con el DOM y es muy importante para ejecutar operaciones con efectos secundarios. 

Entender esto es crucial para poder organizar el código. Saber qué operaciones deben ir en estos métodos y cuáles no es clave. Por ejemplo, si necesitas hacer una consulta Ajax para llenar de información tu componente al iniciar, quizás quieras colocarla en `componentDidMount`, que es una etapa donde se pueden hacer efectos secundarios. Si necesitas actualizar un dato cada vez que se actualiza el componente en tu servidor, esa consulta debería ir en `componentDidUpdate`. Y si necesitas limpiar algo que asignaste localmente cuando el componente se desmonta, `componentWillUnmount` es el lugar indicado.


Vamos a ver en términos prácticos cómo se ven.

`componentDidMount(){}`

Este se ejecuta sin que nosotros tengamos que haber hecho nada porque es el primero que se manda a llamar. En cuanto el componente se monta se lo manda a llamar:

```javascript
componentDidMount(){
    console.log("Esto está en el componentDidMount")
}
```

`componentDidUpdate(){}`

Va a mandarse a llamar cada vez que hay una actualización:

```javascript
componentDidUpdate(){
    console.log("Esto está en el componentDidUpdate")
}
```

En muchas ocasiones vamos a querer ver el valor antes de que se actualice el componente. Por eso `componentDidUpdate()` puede recibir 3 argumentos:

```javascript
componentDidUpdate(prevProp,prevState){
    console.log("Esto está en el componentDidUpdate")
}
```

`prevProp` se refiere al valor antes de que se haya modificado alguna prop. El valor nuevo se puede seguir consultando con `this.props`. `prevState` se refiere al valor anterior del estado. Aquí podemos comparar si los valores fueron modificados.

Vamos a ver un ejemplo. Agregamos en el constructor en `this.state`:

```javascript
constructor(props){
    super(props);
    this.state = {
        contador: 0,
        updatedAt: null
    }
}
```

`updatedAt` se usa para saber cuándo fue modificado por última vez el contador, y en `componentDidUpdate()`:

```javascript
componentDidUpdate(prevProp, prevState){
    console.log("Esto está en el componentDidUpdate")
    console.log(prevState, this.state);
    if(prevState.contador !== this.state.contador) {
        this.setState({
            updatedAt: new Date()
        })
    }
    console.log("Fui actualizado en componentDidUpdate")
}
```

Aquí estamos diciendo que asigne esa fecha si el valor previo es distinto al actual, y lo llama cuando el contador cambia.

Hay un tercer argumento que es un snapshot que se llama `getSnapshotBeforeUpdate()`. Se manda a llamar antes de que el DOM se actualice:

```javascript
getSnapshotBeforeUpdate(){
    console.log("getSnapshotBeforeUpdate Antes del DOM")
    return 3
}
```

Esto es raro de ver, pero es bueno saberlo. `componentDidUpdate` lo recibe como tercer argumento:

```javascript
componentDidUpdate(prevProp, prevState, snapshot){
    console.log("Esto está en el componentDidUpdate")
    console.log(prevState, this.state);
    if(prevState.contador !== this.state.contador) {
        this.setState({
            updatedAt: new Date()
        })
    }
    console.log("Fui actualizado en componentDidUpdate")
}
```

Hay un escenario más que también es difícil de ver, que es `componentWillUnmount()`, que es el método que se llama cuando el componente se va. Es decir, cuando se desmonta el componente de la interfaz. Aquí se puede hacer limpieza de lo que se generó:

```javascript
componentWillUnmount(){
    alert("Chau")
}
```

Por ejemplo, podríamos crear un escenario para hacer un clear, como para hacer una limpieza:

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
```
