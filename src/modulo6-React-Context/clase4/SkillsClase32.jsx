import React,{useContext} from "react";
import { ContextoFormulario } from "./FormularioClase32";

const SkillsClase32 = ()=>{
    const contexto = useContext(ContextoFormulario)

    const agregarALaLista = (value,lista) => {
        console.log(":0");
        contexto.setLikes([value].concat(contexto.likes));

    }

    const removerDeLaLista = (value, lista ) => contexto.setLikes(contexto.likes.filter(v => v !== value))
    return(
        
      <div>
        <p>Email:{contexto.email}</p>
        <label>
          <input type="checkbox" onChange={(ev)=> ev.target.checked ? agregarALaLista("Ruby") : removerDeLaLista("Ruby")} name="likes[]"/>
            Ruby
        </label>
        <label>
          <input type="checkbox" onChange={(ev)=> ev.target.checked ? agregarALaLista("Javascript") : removerDeLaLista("Javascript")} name="likes[]"/>
            Javascript
        </label>
      </div>
        
    )

}


export default SkillsClase32