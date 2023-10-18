import { Component } from "react";

class DidujosComplejos extends Component{

    dibujarNumeros =()=>{
        var lista=[]
        for (let index = 1; index <=10; index++) {
            var numero=parseInt(Math.random()*100)+1;

            lista.push(<li>{numero}</li>)
        }
        return lista;
       
    }

    render(){
        return(<div>
            <h1 style={{color:"blue"}}>Dibujos Complejos HTML</h1>
            <ul>
            {this.dibujarNumeros()}
            </ul>
        </div>)
    }
}
export default DidujosComplejos