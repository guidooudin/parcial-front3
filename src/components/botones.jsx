import { Component } from "react";

class Botones extends Component{
    render(){
        return( 
            <div className="opciones">
                <div className="opcion">
                    <button className="botones" id="A" onClick={(e) => this.props.clickear(e)}>A</button>
                    <h2>{this.props.opcionA}</h2>
                </div>
                <div className="opcion">
                    <button className="botones" id="B" onClick={(e) => this.props.clickear(e)}>B</button>
                    <h2>{this.props.opcionB}</h2>
                </div>
            </div>
            )
    }
}

export default Botones;