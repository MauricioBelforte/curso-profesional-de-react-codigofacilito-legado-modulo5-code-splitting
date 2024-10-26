# Clase 29 Del Curso Completo

## Módulo 6: React Context

---

### Clase 1: Que es React Context

### Contexto en React y Prop Drilling

En temas anteriores, hablamos de cómo cada componente en React es una unidad independiente de la interfaz, con su propia información. Sin embargo, conforme la complejidad de tu interfaz crece, es común que necesites compartir datos entre varios componentes. Por ejemplo, saber si el usuario ha iniciado sesión puede afectar cómo se muestran múltiples componentes en tu interfaz. Si el usuario ha definido preferencias que influyen en la presentación, estos datos pueden ser requeridos por más de un componente.

### Prop Drilling

Inicialmente, puedes obtener esa información desde el componente base de tu aplicación y enviarla vía props a todos los componentes que la necesiten. Esta práctica se llama prop drilling. La práctica de prop drilling puede tener beneficios, como una visión más clara de tu aplicación y código más fácil de entender, ya que solo necesitas pasar información directamente. Sin embargo, prop drilling también puede traer problemas:

- **Complejidad en la Estructura**: Si la estructura de la prop cambia, debes modificar todos los componentes por los que pasa la información.
- **Eliminación de Props No Necesarias**: Si un componente ya no necesita la prop, debes buscar entre todos sus padres en la jerarquía para eliminar las instancias que la envían.
- **Código Verboso**: El código se vuelve más verboso y los cambios se vuelven más complicados.

### React Context

Para solucionar este problema, React introduce una API para compartir información entre varios componentes, llamada React Context. React Context permite compartir información entre un grupo de componentes o entre toda la aplicación.

1. **Proveedor (Provider)**: Es un componente que almacena la información.
2. **Consumidor (Consumer)**: Cualquier componente hijo del proveedor que puede leer o acceder a la información.

De esta manera, todos los componentes que necesiten saber, por ejemplo, si un usuario ha iniciado sesión, pueden recurrir a un proveedor en común.
