import { Component } from "react";

function metodoExterno() {
  console.log("funcion externa a la clase");
}

class Contado extends Component {
  numero = 1;

  incrementarNumero = () => {
    this.numero = this.numero + 1;
    console.log("valor de numero: " + this.numero);
  };
  state = {
    valor: parseInt(this.props.inicio),
  };
  incrementarValor = () => {
    this.setState({
      valor: this.state.valor + 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Class componenet contador</h1>
        <h1>inicio contador:{this.props.inicio}</h1>
        <h1>valor del contador{this.state.valor}</h1>
        <button
          onClick={() => {
            this.incrementarValor();
          }}
        >
          Incrementar valor
        </button>
        <button
          onClick={() => {
            this.incrementarNumero();
            metodoExterno();
          }}
        >
          Incrementar Numero
        </button>
      </div>
    );
  }
}

export default Contado;
