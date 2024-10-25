# Clase 28 Del Curso Completo

## Módulo 5: Code Splitting

---

### Clase 4: React Lazy y Suspense

Ya vimos cómo podemos hacer **code splitting** con imports dinámicos para una función. Pero, ¿cómo podemos hacerlo para un componente? En este caso, queremos importar dinámicamente un componente, SorpresaClase27. Para eso, debemos utilizar `React.lazy`.

Primero, un detalle importante: el componente, al igual que anteriormente la función, debe estar exportado por defecto, así:

```javascript
import React from "react";

const SorpresaClase28 = () => {
  return (
    <div>
      <p>Sorpresa</p>
    </div>
  );
}

export default SorpresaClase28;
```

Yo estaba acostumbrado a ponerlo entre llaves `{}` y por eso no funcionaba, así que voy a cambiarlo.

La sintaxis es la siguiente. La variable donde asignaremos el componente se declara como una constante:

```javascript
const SorpresaClase28 = React.lazy(() => import("./modulo4-Code-Splitting/clase3/SorpresaClase28"));
```

Dentro de `React.lazy()`, pasamos una función con el import dinámico que retornará una promesa que eventualmente resolverá al módulo importado. En este caso, importaremos `SorpresaClase28`.

Al utilizar esta sintaxis, podemos encontrar el siguiente error: 
`A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator.` 
Este error es esperado porque un componente de React se suspendió durante el renderizado, pero no se especificó un componente de respaldo (fallback).

Cuando un componente no se carga junto con todo lo demás, sino on demand, React comienza a descargarlo solo cuando es necesario. Esto significa que el componente no se carga inicialmente, sino que se actualiza cuando lo necesitamos.

Cuando React solicita el componente (en este caso `SorpresaClase28`), la actualización de la interfaz se suspende, es decir, esperamos a que el archivo se descargue de la red antes de continuar con el renderizado de nuestra interfaz. Durante esta espera, necesitamos especificar un componente de respaldo (`fallback`), comúnmente algo que indique que estamos actualizando o cargando esta parte.

Para gestionar esto, utilizamos `Suspense`, un componente especial de React diseñado para manejar actualizaciones que necesitan esperar. Debemos colocar el componente que se descarga de manera lazy (es decir, bajo demanda) dentro de `Suspense`. Así, `SorpresaClase28` debe ir dentro de `Suspense` y, a `Suspense`, le podemos pasar una prop `fallback` donde especificamos el componente que se mostrará mientras `SorpresaClase28` se descarga. En este caso, podemos pasar un elemento de React `<p>` que diga "Cargando...".

Por lo tanto, debemos importar el elemento `Suspense` de React:

```javascript
import React, { Suspense } from 'react';
```

Y usarlo de esta manera:

```jsx
{showSorpresa && <Suspense fallback={<p>Cargando...</p>}> <SorpresaClase28 /> </Suspense>}
```




Con F12 se puede ver que figura "cargando" hasta que se carga el componente. Cuando React se encuentra con un componente que se carga de manera dinámica, busca el `Suspense` más cercano y sustituye todo lo que está dentro de `<Suspense>...</Suspense>` por lo que está dentro del fallback.

Por eso, `Suspense` se coloca cerca del componente que queremos cargar de manera dinámica. Además, se pueden colocar varios `Suspense`, e incluso un `Suspense` dentro de otro.
