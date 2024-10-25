
import './App.css';
import { SorpresaClase26 } from './modulo4-Code-Splitting/clase2/SorpresaClase26';
import { SorpresaClase27 } from './modulo4-Code-Splitting/clase3/SorpresaClase27';
import { useEffect, useState } from 'react';

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
        showSorpresa && <SorpresaClase27 />
      }


    </div>
  );
}

export default App;
