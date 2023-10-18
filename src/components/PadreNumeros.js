import { Component } from "react";

import HijoNumeros from "./HijoNumeros";
class PadreNumeros extends Component {

  

  state = {
    sumados: 0,
    numeros : [0, 0, 0]
  };

  generarNumero =()=>{

    this.state.numeros.push(0)
    this.setState({
      numeros: this.state.numeros,
    });
 }

    sumarHijo=(n)=>{
      this.setState({sumados:this.state.sumados+n})
    }

 

  render() {
    return (
      <div>
        <h1>la suma es: {this.state.sumados} </h1>
        <button onClick={() => this.generarNumero()}>Nuevo numero</button>
        {this.state.numeros.map((numeros, index) => {
          return <HijoNumeros key={index} numero={numeros} sumarHijo={this.sumarHijo}></HijoNumeros>;
        })}
      </div>
    );
  }
}
export default PadreNumeros;
