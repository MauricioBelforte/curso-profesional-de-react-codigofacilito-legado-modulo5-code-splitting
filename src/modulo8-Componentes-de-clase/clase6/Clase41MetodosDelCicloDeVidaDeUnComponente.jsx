import React, { Component } from "react";
 import { render } from "react-dom"; 
import PropTypes from "prop-types";

class Clase41MetodosDelCicloDeVidaDeUnComponente extends Component {
    static defaultProps = { name:"Cody"}

    static propTypes = {
        name : PropTypes.string

    }

    constructor(props){
        super(props);
        this.state = {
            contador:0,
          updatedAt:null
        }
    }

    componentDidMount(){
        console.log("Fui creado en componentDidMount")
        let intervalo = this.setInterval(()=> this.setState({contador:this.state.contador+1}),1000)
    
        this.setState({
            intv : intervalo
        })
    }

    componentDidUpdate(prevProp,prevState){
        console.log("Esto esta en el componentDidUpdate")
        console.log(prevState,this.state);

        if(prevState.contador !== this.state.contador)
            this.setState({
                updatedAt:new Date()
        })
        console.log("Fui actualizado en componentDidUpdate ")
    }   

    getSnapshotBeforeUpdate(){
        console.log("getSnapshotBeforeUpdate Antes del dom ")
        return 3
    }

    componentWillUnmount(){
        alert("Chau")
        clearInterval(this.state.intv)
    }
    
    render(){
        console.log(this.props)
        return (
          <div>
            <p>Contador : {this.state.contador}</p>
            <button onClick={()=> this.setState({contador: this.state.contador + 1})}>Sumar:</button>
            
          </div>
         
        )

    }

}

/* render (<Clase39TrabajandoConElEstado /> , document.getElementById ('root')); */

export {Clase41MetodosDelCicloDeVidaDeUnComponente}
