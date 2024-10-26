

import React, { useState , Suspense } from 'react';



 const SorpresaClase28 = React.lazy(() => import('./SorpresaClase28'))
 
function Clase28ReactLazyYSuspense() {
  const [showSorpresa, setShowSorpresa] = useState(false);



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


export default Clase28ReactLazyYSuspense;