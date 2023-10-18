import { Component } from "react";

class DibujosComplejosReact extends Component {
  state = {
    nombres: ["Lara", "Lucia", "Sandra", "Ester", "Ana de Armas"],
  };

  generarNombre = () => {
    this.state.nombres.push("nuevo nombre");
    this.setState({
      nombre: this.state.nombres,
    });
  };

  render() {
    return (
      <div>
        <h1>dibujos complejos react coleccion</h1>
        <button onClick={() => this.generarNombre()}>hola</button>
        {this.state.nombres.map((name, index) => {
          return (
            <h3 key={index} style={{ color: "blue" }}>
              {name}
            </h3>
          );
        })}
      </div>
    );
  }
}

export default DibujosComplejosReact;
