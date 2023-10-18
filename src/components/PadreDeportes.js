import { Component } from "react";
import HijoDeportes from "./HijoDeportes";
class PadreDeportes extends Component {
  deportes = ["futbol", "baloncesto", "beisbol", "gol", "ajedrez"];
  state = {
    favorito: "",
  };

  mostrarFavorito=(deporteSeleccionado)=>{
    this.setState({
        favorito:deporteSeleccionado
    })
  }

  render() {
    return (
      <div>
        <h1>Padre Deportes</h1>
        <h2 style={{ background: "yellow" }}>
          Deporte favorito: {this.state.favorito}
        </h2>
        {this.deportes.map((deporte, index) => {
          return <HijoDeportes nombre={deporte} mostrarFavorito={this.mostrarFavorito}></HijoDeportes>;
        })}
      </div>
    );
  }
}

export default PadreDeportes;
