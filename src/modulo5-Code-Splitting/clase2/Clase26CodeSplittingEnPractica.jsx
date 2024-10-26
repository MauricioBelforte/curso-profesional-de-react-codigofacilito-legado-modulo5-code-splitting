
import { SorpresaClase26 } from './SorpresaClase26';
import { useState } from 'react';

function Clase26CodeSplittingEnPractica() {
  const [showSorpresa, setShowSorpresa] = useState(false);

  return (
    <div>
      <button onClick={(ev) => setShowSorpresa(true)}>
        Mostrar sorpresa
      </button>
      {showSorpresa && <SorpresaClase26 />}
    </div>
  );
}

export default Clase26CodeSplittingEnPractica;