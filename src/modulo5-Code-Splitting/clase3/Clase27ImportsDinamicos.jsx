
import { SorpresaClase27 } from './SorpresaClase27';
import { useState , useEffect } from 'react';

function Clase27ImportsDinamicos() {
  const [showSorpresa, setShowSorpresa] = useState(false);

  useEffect(() => {
    import("./hello").then(modulo => modulo.default())
  }, []);

  return (
    <div >
      <button onClick={(ev) => setShowSorpresa(true)}>
        Mostrar sorpresa
      </button>
      {
        showSorpresa && <SorpresaClase27 />
      }
    </div>
  );
}


export default Clase27ImportsDinamicos;