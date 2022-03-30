import { Component } from 'react';
import data from './data.json';
import Botones from './botones';
import Historial from './historial';



class Historia extends Component{
    constructor(props){
        super(props);
        this.state = {
            opcionesElegidas: [],
            seleccionAnterior: '',
            contador: 0,
        }
    }
    
    clickear = (e) => {
        const click = e.target.id;
        if(click === "A" && this.state.seleccionAnterior !== "A"){
            this.setState({
                seleccionAnterior: click,
                contador: this.state.contador + 1,
            })
            this.state.opcionesElegidas.push(click)
        }else if(click === "B" && this.state.seleccionAnterior !=="B"){ 
            this.setState({
                seleccionAnterior: click,
                contador: this.state.contador + 3,
            })
            this.state.opcionesElegidas.push(click)
        }else if(click === "A" && this.state.seleccionAnterior !== "B"){
            this.setState({
                seleccionAnterior: click,
                contador: this.state.contador + 3,
            })
            this.state.opcionesElegidas.push(click)
        }else if(click === "B" && this.state.seleccionAnterior !=="A"){
            this.setState({
                seleccionAnterior: click,
                contador: this.state.contador + 2,
            })
            this.state.opcionesElegidas.push(click)
        }
    }

    componentDidUpdate(){
        if(this.state.contador >= 7){
            alert("Fin del juego")
            document.getElementById("A").disabled = true;
            document.getElementById("B").disabled = true;
        }
    }
    render(){
        console.log(this.state)
        return(
            <div className="layout">
            <div className="historia">
                <h1>{data[this.state.contador].historia}</h1>
            </div>
            <Botones
                clickear={(e) => this.clickear(e)}
                opcionA={data[this.state.contador].opciones.a}
                opcionB={data[this.state.contador].opciones.b}
                />
            <Historial
                seleccionAnterior={this.state.seleccionAnterior}
                opcionesElegidas={this.state.opcionesElegidas.map((opcion, index) => <li key={index}>{opcion}</li>, data[this.state.contador].id)}
            />
            </div>
        )
    }
}

export default Historia;