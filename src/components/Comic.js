import { Component } from "react";

class Comic extends Component {



    render() {
        return (<div>

            <h1>{this.props.comic.titulo}</h1>
            <h2>{this.props.comic.descripcion}</h2>
            <img src={this.props.comic.imagen} />
            <button onClick={() => {
                this.props.seleccionarFavorito(this.props.comic);
            }}>seleccionar favorito</button>

            <button onClick={() => {
                var index=parseInt(this.props.index);
                this.props.eliminarComic(index);
            }}>eliminar comic </button>
        </div>)
    }
}
export default Comic