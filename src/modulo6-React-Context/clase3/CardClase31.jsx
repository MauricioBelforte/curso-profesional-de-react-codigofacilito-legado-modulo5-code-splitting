import React,{useContext} from "react";
import {TemaContexto} from './Clase31ActualizandoElContexto'

const CardClase31 = ()=>{
    const contexto = useContext(TemaContexto);
 
    return(
        
        <div style={{
            backgroundColor:contexto.backgroundColor,
            color:contexto.color
        }}>
            <p>Hola este es el card , que es otro consumidor </p>       
        </div>
        
    )

}


export default CardClase31