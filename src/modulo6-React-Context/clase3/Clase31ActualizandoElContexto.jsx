import React, { useState } from "react";
import BotonClase31 from "./BotonClase31";
import CardClase31 from "./CardClase31";

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

const Clase31ActualizandoElContexto = ()=>{
    const[tema,setTema]= useState(temas.dark)
    return(
        <div>
             <TemaContexto.Provider value={tema}>
                <BotonClase31 />
                <button onClick={()=> setTema(temas.light)}>Modo claro</button>
                <button onClick={()=> setTema(temas.dark)}>Modo oscuro</button>
                <CardClase31 />
            </TemaContexto.Provider>
        </div>
    )


}

export {Clase31ActualizandoElContexto}



