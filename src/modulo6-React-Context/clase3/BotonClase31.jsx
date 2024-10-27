import React,{useContext} from "react";
import {TemaContexto} from './Clase31ActualizandoElContexto'

const BotonClase31 = ()=>{
    const contexto = useContext(TemaContexto);
    console.log(contexto);
    return(
        
        <button style={{
            backgroundColor:contexto.backgroundColor,
            color:contexto.color
        }}>
            Presionar       
        </button>
        
    )

}


export default BotonClase31