import React, { Component } from "react";
 import { render } from "react-dom"; 
import PropTypes from "prop-types";

class Clase38TrabajandoConProps extends Component {
    static defaultProps = { name:"Cody"}

    static propTypes = {
        name : PropTypes.string

    }
    render(){
        console.log(this.props)
        return <p>Hola este es un componente de clase</p>

    }

}

render (<Clase38TrabajandoConProps /> , document.getElementById ('root'));