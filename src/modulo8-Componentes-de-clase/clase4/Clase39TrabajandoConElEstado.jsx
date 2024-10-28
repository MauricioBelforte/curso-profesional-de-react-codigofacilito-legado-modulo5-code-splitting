import React, { Component } from "react";
 import { render } from "react-dom"; 
import PropTypes from "prop-types";

class Clase39TrabajandoConElEstado extends Component {
    static defaultProps = { name:"Cody"}

    static propTypes = {
        name : PropTypes.string

    }

    constructor(props){
        super(props);
        this.state = {
            contador:0
        }
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

export {Clase39TrabajandoConElEstado}
