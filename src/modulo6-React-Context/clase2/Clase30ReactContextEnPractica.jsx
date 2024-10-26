import React from "react";
import BotonClase30 from "./BotonClase30";

const temas = {
    'dark':{
        backgroundColor:'black',
        color:'white'
    },
    'light':{
        backgroundColor:'white',  
        color:'black'
    }
}

export const TemaContexto = React.createContext();

const Clase30ReactContextEnPractica = ()=>{

    return(
        <div>
             <TemaContexto.Provider value={temas.dark}>
                <BotonClase30/>
            </TemaContexto.Provider>
        </div>
    )


}

export {Clase30ReactContextEnPractica}



