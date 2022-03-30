import { Component } from "react";

class Historial extends Component{
    render(){
        return(
            <div className="recordatorio">
                <h3>Seleccion anterior: {this.props.seleccionAnterior}</h3>
                <h4>Historial de opciones elegidas: </h4>
                <ul>{this.props.opcionesElegidas}</ul>
            </div>
        )
    }
}

export default Historial;