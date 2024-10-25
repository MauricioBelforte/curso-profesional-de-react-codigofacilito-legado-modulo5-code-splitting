
import './App.css';
/* import { SorpresaClase26 } from './modulo4-Code-Splitting/clase2/SorpresaClase26'; */
/* import { SorpresaClase27 } from './modulo4-Code-Splitting/clase3/SorpresaClase27'; */
import React, { useEffect, useState, Suspense } from 'react';


const SorpresaClase28 = React.lazy(() => import('./modulo4-Code-Splitting/clase4/SorpresaClase28'))

function App() {
  const [showSorpresa, setShowSorpresa] = useState(false)

  useEffect(() => {
    import("./modulo4-Code-Splitting/clase3/hello").then(modulo => modulo.default())

  }, []);
  return (
    <div >
      <button onClick={(ev) => setShowSorpresa(true)}>
        Mostrar sorpresa
      </button>
      {
        showSorpresa && <Suspense fallback={<p> Cargando... </p>}> <SorpresaClase28 /> </Suspense>
      }


    </div>
  );
}

export default App;
