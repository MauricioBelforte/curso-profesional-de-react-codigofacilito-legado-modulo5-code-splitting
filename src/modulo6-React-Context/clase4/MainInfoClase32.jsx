import React,{useContext} from "react";
import {ContextoFormulario} from './FormularioClase32'

const MainInfoClase32 = ()=>{
    const contexto = useContext(ContextoFormulario)
    return(
        
        <div>
            
            <input onChange={(ev)=> contexto.setEmail(ev.target.value)} type="email" value={contexto.email}/>    
            <input type="password" value={contexto.password}/>    
        </div>
    )

}


export default MainInfoClase32