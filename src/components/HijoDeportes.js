import { Component } from "react";

class HijoDeportes extends Component {
  
seleccionarFavorito=()=>{
  var deporte=this.props.nombre;
  this.props.mostrarFavorito(deporte);
}

  render() {
    return (
      <div>
        <h1>{this.props.nombre}</h1>
        <button onClick={()=>this.seleccionarFavorito()}>seleccionar favorito</button>
      </div>
    );
  }
}

export default HijoDeportes;