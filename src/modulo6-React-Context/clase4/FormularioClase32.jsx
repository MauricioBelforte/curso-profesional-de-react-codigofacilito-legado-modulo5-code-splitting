import React,{useState} from "react";
import SkillsClase32 from "./SkillsClase32";
import MainInfoClase32 from "./MainInfoClase32";

export const ContextoFormulario = React.createContext()    ;

const FormularioClase32 = ()=>{
 

const [email, setEmail] = useState("mauricio@gmail.com");
const [password, setPassword] = useState("");
const [likes , setLikes] = useState("");

    return(
        
       <form>
            <ContextoFormulario.Provider value={{email,password,likes,setEmail,setPassword,setLikes}}>
                <MainInfoClase32 />
                <SkillsClase32 />
            </ContextoFormulario.Provider>
            <p>Email:{email}</p>
            <p>Contraseña:</p>
            <p>Lenguajes:{likes}</p>
       </form>
        
    )

}


export default FormularioClase32