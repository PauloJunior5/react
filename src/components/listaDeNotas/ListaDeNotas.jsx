import React, { Component } from "react";
import CardDeNotas from "../cardDeNotas";
import "./estilo.css";

class ListaDeNotas extends Component {
  render() {
    return (
      <ul className='lista-notas'>
        {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria, index) => {
          return (
            <li key={index} className='lista-notas_item'>
              <span>{categoria}</span>
              <CardDeNotas />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default ListaDeNotas;
