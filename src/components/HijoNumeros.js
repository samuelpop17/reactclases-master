import { Component } from "react";

class HijoNumeros extends Component{

    state = {
        numero: parseInt(Math.random()*100)+1,
      };

    sumarPadre=()=>{
       
        this.props.sumarHijo(this.state.numero)
    }

    render(){
        return(<div>

            <h1>Numero hijo: {this.state.numero} </h1>
            <button onClick={()=>this.sumarPadre()} >sumar numero</button>

        </div>)
    }
}
export default HijoNumeros